<template>
  <Homepage :users="users" />
</template>

<script>
import Homepage from '~/components/Homepage.vue'
export default {
  components: { Homepage },
  async asyncData({ $axios }) {
    const response = await $axios.$get('https://arcane-chamber-55473.herokuapp.com/api/v1/users')
    return { users: response.users ? response.users : [] }
  },
  data() {
    return {
      users: []
    }
  }
}
</script>
