<template>
<q-page class="flex flex-center" v-if="userProfileName">
  Hello {{ userProfileName }}
</q-page>
<q-page class="flex flex-center" v-else>
  Not logged in!
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',

  computed: {
    userProfileName () {
      return this.$store.state.user?.name
    }
  }

})
</script>
