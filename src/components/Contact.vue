<template>
    <article class="tile is-child is-3">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">{{contact.didMethod}}{{contact.did}}</p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>type: {{contact.type}}</p>
                    <p>created: <time >{{contact.createdAt}}</time></p>
                    <p>status: <time >{{contact.status}}</time></p>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" v-if="contact.type!='client'" class="card-footer-item">Ping</a>
                <a href="#" class="card-footer-item">Credential</a>
                <a href="#" class="card-footer-item">Disconnect</a>
            </footer>
        </div>
    </article>
</template>
<script>
import { mapState } from 'vuex'
// import Lorena from '../services/Lorena'
// const lorena = new Lorena()

export default {
  name: 'contacts',
  data() {
    return {
        name: false
    }
  },
  props: ['contact'],
  conputed: mapState(['step']),
  created() {
  },
  components: {},
  methods: {}
}
</script>
<style>
.card {
    margin: 10px;
}
.card-header {
    background-color: #4C52BB !important;
}
.card-header-title {
    color: #FFF !important;
}
</style>
