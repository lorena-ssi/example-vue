<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="dropdown navigation">
      <img src="./assets/logo.png" alt="IDSpace" class="logo">
      <div class="navbar-item">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Documentation</a>
      </div>
    </nav>
    
    <section>
      <div class="columns">
        
        <div class="column is-narrow left-box" v-if="unlocked">
          <div class="left-menu">
            <p class="title is-5">Menú</p>
            <p class="subtitle">Idspace</p>
            <section>
              <p><b-button class="menu-button" outlined rounded @click="option=1">Dashboard</b-button></p>
              <p><b-button class="menu-button" outlined rounded @click="option=2">Clients</b-button></p>
              <p><b-button class="menu-button" outlined rounded @click="option=3">Contacts</b-button></p>
              <p><b-button class="menu-button" outlined rounded @click="option=4">Credentials</b-button></p>
              <p><b-button class="menu-button" outlined rounded @click="option=5">Recipes</b-button></p>
              <p><b-button class="menu-button" outlined rounded @click="option=6">Logs</b-button></p>
              <p><b-button class="menu-button" outlined rounded @click="logout">Logout</b-button></p>
            </section>
          </div>
        </div>
        
        <div class="column right-tab">
          <section v-if="unlocked" class="modal-card-body">
            <Dashboard v-if="option==1" lorena=lorena />
            <Clients v-if="option==2" lorena=lorena />
            <Contacts v-if="option==3" lorena=lorena />
            <Credentials v-if="option==4" lorena=lorena />
            <Recipes v-if="option==5" lorena=lorena />
            <Logs v-if="option==6" lorena=lorena />
            <b-message id="logmsg" auto-close type="is-info" :active.sync="showLog">
            Recipe says: <strong>{{msgLog}}</strong>
            </b-message>
          </section>
          <section v-if="!unlocked">
            <section  class="modal-card-body">
              <div  class="box login-box">
                <div class="box-card">
                  <p class="title is-5">Lorena IDSpace</p>
                  <p class="subtitle">Your Own Idenitiy server</p>
                  <p>Remote: 2236f59ba6dbeaf6-6c5292405f60cd95-9902ffb4aa3a20db</p>
                  <P>Local: 5c7ca0ef4248e3a5-b987eb7a015b24d8-db74c940d447e877</P>
                  <p>Test: efd708e2b5dc1648-77326e5151d48bd7-138df632fd0de206</p>
                  <hr />
                  <b-field label="Client Code">
                    <b-input
                      type="password"
                      password-reveal
                      placeholder="Your password"
                      required
                      v-model="password">
                    </b-input>
                  </b-field>
                </div>
                <footer class="modal-card-foot">
                  <button class="button is-primary" type="button" @click="unlock">Login</button>
                </footer>
              </div>
              <b-message type="is-danger" v-if="showError!==false">
                Invalid Code
              </b-message>
            </section>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import Lorena from './services/Lorena'
const lorena = new Lorena()

import {store} from './store/store'
import Dashboard from './components/Dashboard'
import Clients from './components/Clients'
import Contacts from './components/Contacts'
import Credentials from './components/Credentials'
import Recipes from './components/Recipes'
import Logs from './components/Logs'


export default {
  name: 'app',
  data() {
    return {
      unlocked: false,
      option: 1,
      password: '',
      showError: false,
      showLog: false,
      msgLog: 'Log'
    }
  },  
  components: {
    Dashboard,
    Clients,
    Contacts,
    Credentials,
    Recipes,
    Logs
  },
  methods: {
    async showMessage(msg) {
      this.msgLog = msg
      this.showLog = true
      // missatge pong
    },
    async unlock() {
      const loadingComponent = this.$buefy.loading.open({container: null})
      lorena.connect(this.password)
      .then(() => {
        store.commit("SET_LORENA", lorena)
        this.unlocked = true
        loadingComponent.close()
      })
      .catch(() => {
        this.showError = true
        loadingComponent.close()
      })
      
    },
    logout() {
      this.unlocked = false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
h1 {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  color: #444;
  font-size: 18px;
}
#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logmsg {
  position: absolute;
  top: 80px;
  left: 80%;
  width: 400px;
}

.left-box {
  width:200px;
  min-height: 1000px;
  border: 1px solid #DDD;
}
.left-menu {
  margin-top: 30px;
}
.right-tab {
  margin-top: 10px;
  margin-right: 30px;
}

.navbar.is-info {
    background-color: #4C52BB !important;
    color: #fff;
}

.navbar-item {
  color: #FFF !important;
}
.navbar-item:hover {
  color: #000 !important;
}

.login-box {
  max-width: 700px;
  margin: 0 auto;
  padding: 0;
}

.box {
  padding: 0 !important;
}
.box-card {
  padding: 30px;
}

.logo {
  max-width: 250px;
}

.is-link, .is-danger {
  margin-top: 10px;
  width: 85%;
}

button.menu-button {
    width: 70%;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
}
</style>
