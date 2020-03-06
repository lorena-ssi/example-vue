<template>
    <article class="tile is-child is-3">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">Add contact</p>
            </header>
            <div class="card-content">
                <div class="content">
                    <b-field label="Did">
                        <b-input v-model="did"></b-input>
                    </b-field>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Cancel</a>
                <a href="#" class="card-footer-item">Connect</a>
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
        did: '',
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
    min-height: 200px;
}
</style>
