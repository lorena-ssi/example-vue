<template>
  <div>
    Logs
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import Lorena from '../services/Lorena'
// const lorena = new Lorena()

export default {
  name: 'logs',
  data() {
    return {
        name: false
    }
  },
  conputed: mapState(['step']),
  created() {
  },
  components: {},
  methods: {}
}
</script>
<style>
</style>
