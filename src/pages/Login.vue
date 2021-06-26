<template>
<q-page class="flex flex-center">
    <q-form class="flex column q-gutter-md" style="width: 25rem;" @submit="onSubmit">
        <q-input outlined v-model="username" label="Username" />
        <q-input outlined v-model="password" label="Password" type="password" />

        <q-btn type="submit" color="primary">
            Login
            <template v-slot:loading>
                <q-spinner-hourglass class="on-left" />
                Loading...
            </template>
        </q-btn>
        <q-btn flat type="submit" color="green" @click="onRegister">
            Register
        </q-btn>
    </q-form>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    onSubmit () {
      console.log('Username: ', this.username)
      console.log('Password: ', this.password)
      const loginUserParams = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('user/loginUser', loginUserParams)
      this.$router.push('/profile')
    },

    onRegister () {
      this.$router.push('/register')
    }
  }

})
</script>
