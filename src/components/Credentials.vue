<template>
  <div>
    Credentials
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import Lorena from '../services/Lorena'
// const lorena = new Lorena()

export default {
  name: 'credentials',
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
