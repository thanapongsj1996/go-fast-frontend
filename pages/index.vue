<template>
  <Homepage :jobs="jobs" />
</template>

<script>
import Homepage from '~/components/Homepage.vue'
export default {
  components: { Homepage },
  async mounted() {
    const response = await this.$axios.$get(`https://polar-tundra-74605.herokuapp.com/api/v1/jobs/customer-requests`)
    console.log('response : ', response)
    if (response.status) {
      this.jobs = response.data ? response.data : []
    }
  },
  data() {
    return {
      jobs: []
    }
  }
}
</script>
