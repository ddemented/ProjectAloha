<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-black text-white">
        <q-icon name="favorite" style="font-size: 26px;"/>
        <q-toolbar-title>
          Project Aloha
        </q-toolbar-title>
        <q-space />
        <q-btn flat round dense icon="more_vert">
          <q-menu auto-close :offset="[110, 0]">
            <q-list style="min-width: 150px">
              <q-item v-if="!isAuthenticated" clickable @click="onSignIn">
                <q-item-section>Sign-In</q-item-section>
              </q-item>
              <q-item v-if="!isAuthenticated" clickable @click="onRegister">
                <q-item-section>Register</q-item-section>
              </q-item>
              <q-item v-if="isAuthenticated" clickable @click="onProfile">
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-item v-if="isAuthenticated" clickable @click="onSignOut">
                <q-item-section>Signout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  computed: {
    isAuthenticated () {
      return this.$store.state.user.authenticated
    }
  },

  methods: {
    onSignIn () {
      this.$router.push('/login')
    },

    onRegister () {
      this.$router.push('/register')
    },

    onProfile () {
      this.$router.push('/profile')
    },

    onSignOut () {
      this.$store.dispatch('user/logoutUser')
      this.$router.push('/profile')
    }
  }
})
</script>
