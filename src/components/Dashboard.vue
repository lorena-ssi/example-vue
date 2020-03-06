<template>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification">
          <p class="title">Connections</p>
          <p class="subtitle">List of knwon identities</p>
        </article>
        <article class="tile is-child notification">
          <p class="title">Recipes</p>
          <p class="subtitle">Manage your DAPI</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Credentials</p>
          <p class="subtitle">Your verified claims</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification  is-info">
      <div class="content">
        <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        
        <p class="subtitle is-6">did:lor:lab:</p>
        <p class="title is-4">234672342638942</p>
      </div>
    </div>

    <div class="content">
      Personal Recipes
  <p><a href="#" @click="ping">Ping</a></p>
      

    </div>
  </div>
</div>
      </div>
    </article>
  </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
import Lorena from '../services/Lorena'
const lorena = new Lorena()

export default {
  name: 'dashboard',
  data() {
    return {
        name: false
    }
  },
  conputed: mapState(['step']),
  created() {
    // let idRecipe = await lorena.sendMessage('whoami', {})
    // let whoamI = await lorena.getResponse(idRecipe)

    // eslint-disable-next-line no-unused-vars
    // console.log(whoamI)

  },
  components: {},
  methods: {
    async ping() {
      let idRecipe = await lorena.sendMessage('ping', {})
      let step = await lorena.getResponse(idRecipe)
      this.$parent.showMessage(step.payload);
    },
    async unlock() {
      this.$store.state.lorena.whoamI()
      .then(() => {
        this.name = true
      })
      .catch(() => {
        this.showError = true
      })
    },
  }
}
</script>
<style>
</style>
