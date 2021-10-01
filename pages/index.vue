<template>
  <Homepage :jobs="jobs" />
</template>

<script>
import Homepage from '~/components/Homepage.vue'
export default {
  components: { Homepage },
  async asyncData({ $axios }) {
    const response = await $axios.$get(`https://polar-tundra-74605.herokuapp.com/api/v1/jobs/customer-requests`)
    if (response.status) {
      return { jobs: response.data ? response.data : [] }
    }
  },
  data() {
    return {
      jobs: []
    }
  }
}
</script>
