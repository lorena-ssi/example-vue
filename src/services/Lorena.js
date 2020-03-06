/* eslint-disable no-console */
import Vue from 'vue'
const apiUrl = 'https://matrix.caelumlabs.com/_matrix/client/r0/'
import {store} from '../store/store'

export default class Lorena {

    /**
    * Connects to a matrix server.
    *
    * @param {string} password Matrix password
    * @returns {Promise} Return a promise with the connection when it's done.
    */
    async connect (password) {
        return new Promise((resolve, reject) => {
            const code = password.split('-')
            if (code.length!==3) {
                reject('Invalid Code')
            }
            Vue.http.get(apiUrl+'login')
            .then(() => {
                return Vue.http.post(apiUrl+'login', {
                    type: 'm.login.password',
                    user: code[0],
                    password: code[1]})
            })
            .then(async (result) => {
                store.commit("SET_TOKEN", result.data.access_token)
                store.commit("SET_USERNAME", code[0])
                store.commit("SET_DID", code[2])
                console.log(apiUrl+'publicRooms&access_token=' + store.state.token)
                return Vue.http.get(apiUrl+'joined_rooms?access_token=' + store.state.token)
            })
            .then(async (rooms) => {
                console.log(rooms.body.joined_rooms[0])
                store.commit("SET_ROOMID", rooms.body.joined_rooms[0])
                
                // Listen at least one time.
                await this.listen(false)
                resolve(true)
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error.statusText)
                reject('Invalid Code')
            })
        })
    }

    async listen(getMessages = true) {
        return new Promise((resolve, reject) => {
            const apiCall = apiUrl + 'sync?timeout=60000' + '&access_token=' + store.state.token + (store.state.nextBatch === '' ? '' : '&since=' + store.state.nextBatch)
            Vue.http.get(apiCall)
            .then(async (res) => {
                store.commit("SET_NEXT_BATCH", res.data.next_batch)
                if (getMessages) {
                    this.getMessages(res.data.rooms.join)
                }
                resolve(true)
                this.listen()
                })
            .catch((error) => {
                reject(error)
            })
        })
    }

    getMessages (rooms) {
        // Check if rooms is empty
        let msgs = 0
        const myDid = '@' + store.state.did + ':matrix.caelumlabs.com'
        const roomEmpty = !Object.keys(rooms).length === 0 && rooms.constructor === Object
        if (!roomEmpty) {
            for (const roomId in rooms) {
                // Get the events in the Timeline.
                const events = rooms[roomId].timeline.events
                if (events.length > 0) {
                    for (let i = 0; i < events.length; i++) {
                        const element = events[i]
                        if (element.type === 'm.room.message' & element.sender===myDid) {
                            msgs++
                            store.commit("SET_STEP", JSON.parse(element.content.body))
                        }
                            
                    }
                }
            }
            console.log("Input : "+msgs+ ' messages')
        }
    }

    sendMessage(recipe, payload) {
        return new Promise( (resolve, reject) => {
            const apiSendMessage = apiUrl + 'rooms/' + store.state.roomId + '/send/m.room.message/' + store.state.txnId + '?access_token=' + store.state.token
            let body = JSON.stringify({
                recipe: recipe,
                recipeId: 0,
                remoteRecipe: 'ping',
                remoteRecipeId: store.state.txnId,
                payload: payload
            })
            Vue.http.put(apiSendMessage, {
                msgtype: "m.action",
                body: body
            })
            .then(() => {
                const recipeId = store.state.txnId
                store.commit("INCREMENT_TX")
                resolve(recipeId)
            })
            .catch((error) => {
                console.log(error)
                reject()
            })
        })
    }


    whoami() {
        return 'Alex'
    }

    getResponse(recipeId) {
        return new Promise( (resolve) => {
            store.subscribe((mutation, state) => {
                if (mutation.type === 'SET_STEP') {
                    const step = state.step
                    if (step.recipeId === recipeId) {
                        resolve(step)
                    }
                }
            })
        })
    }

}