<template>
<q-page class="flex flex-center">
  <q-form class="flex column q-gutter-md" style="width: 25rem;" @submit="onSubmit">
    <q-input outlined v-model="emailAddress" label="Email Address" type="email" />
    <q-input outlined v-model="username" label="Username" />
    <q-input outlined v-model="password" label="Password" type="password" />

    <q-btn :loading="requestInFlight" type="submit" color="primary">
        Register
        <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Loading...
        </template>
    </q-btn>
  </q-form>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Register',
  data () {
    return {
      emailAddress: '',
      username: '',
      password: '',
      requestInFlight: false
    }
  },

  methods: {
    onSubmit () {
      this.requestInFlight = true
      console.log('Username: ', this.username)
      console.log('Password: ', this.password)
    }
  }

})
</script>
