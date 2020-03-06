<template>
  <section>
    <div>
      <b-button type="is-primary" outlined @click="ping()" :loading="this.loading">ping</b-button>
    </div>
    <div>
      <b-button type="is-primary" outlined @click="listen()">receive</b-button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Lorena from '../services/Lorena'
const lorena = new Lorena()

export default {
  name: 'Ping',
  props: [],
  data() {
    return {
      loading: false
    }
  },
  computed: mapState(['step']),
  created() {
    // eslint-disable-next-line no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_STEP') {
        // eslint-disable-next-line no-console
        console.log("--- STEP")
        // eslint-disable-next-line no-console
        console.log("Type"+state.step.content.msgtype)
      }
    })
  },
  methods: {
    ping() {
      this.loading = true
      lorena.sendMessage('ping', 'start', {})
    },
    listen() {
      // eslint-disable-next-line no-console
      // lorena.sendMessage('ping', 'start', {})
      lorena.listen()
    }
  }
}
</script>