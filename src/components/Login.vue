<template>
<form action="">
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Unlock Space</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Password">
                <b-input
                    type="password"
                    :value="password"
                    password-reveal
                    placeholder="Your password"
                    required
                    v-model="password">
                </b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" type="button" @click="unlock">Login</button>
        </footer>
    </div>
</form>
</template>

<script>
export default {
  name: 'Login',
  props: [],
  data() {
    return {
      password: ''
    }
  },
  methods: {
      unlock: function() {
          this.$parent.close()
      }
  }
}
</script>