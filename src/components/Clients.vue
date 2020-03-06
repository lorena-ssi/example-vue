<template>
   <section>
        <b-notification ref="element" :closable="false">
          <Contact v-for="(item, index) in contacts.payload" v-bind:contact="item" v-bind:key="index"></Contact>
          <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
        </b-notification>
    </section>
</template>
<script>
import { mapState } from 'vuex'
// import Lorena from '../services/Lorena'
// const lorena = new Lorena()
import Contact from './Contact'

export default {
  name: 'clients',
  data() {
    return {
        isLoading: true,
        contacts: []
    }
  },
  conputed: mapState(['step']),
  created() {
    // eslint-disable-next-line no-console
    this.loadClients()
  },
  components: {Contact},
  methods: {
    async loadClients() {
      // let idRecipe = await lorena.sendMessage('clients-list', {})
      // eslint-disable-next-line no-console
      // this.contacts = await lorena.getResponse(idRecipe)
      this.isLoading = false
    }
  }
}
</script>
<style>
</style>
