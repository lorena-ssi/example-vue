/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        username: '',
        did: '',
        token: '',
        nextBatch: '',
        roomId: '',
        txnId: 1,
        step: null,
        lorena: {}
      },
      
      mutations: {
        SET_USERNAME(state, username) {
          state.username = username
        },
        SET_DID(state, did) {
          state.did = did
        },
        SET_STEP(state, step) {
          state.step = step
        },
        SET_LORENA(state, lorena) {
          state.lorena = lorena
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_NEXT_BATCH(state, nextBatch) {
          state.nextBatch =  nextBatch
        },
        SET_ROOMID(state, roomId) {
          state.roomId = roomId
        },
        INCREMENT_TX(state) {
            state.txnId++
        }
      },
      actions: {
        sendMessage(/*context, body*/) {
          /*
            const apiSendMessage = apiUrl + 'rooms/' + roomId + '/send/m.room.message/' + context.state.txnId + '?access_token=' + context.state.token
            console.log(apiSendMessage)
            Vue.http.put(apiSendMessage, {
                msgtype: "m.action",
                body: body
            })
            .then(() => {
                context.commit("INCREMENT_TX")
                console.log("Worked!")
            })
            .catch((error) => {
                console.log(error)
                
            })*/
        },
        ping(/*{dispatch}*/) {
          /*
            let payload = JSON.stringify({
                recipeId: 0,
                remoteRecipeId: 0,
                recipe: 'ping',
                type: 'start',
                payload: {}
              })
            dispatch('sendMessage', payload)
            */
        }
      },
      getters: {
        token: state => state.token
      },
})