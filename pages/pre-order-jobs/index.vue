<template>
  <div>driver jobs pre-order page</div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs/pre-order`
    )
    console.log('response : ', response)
    if (response.status) {
      return {
        driverJobs: response.data ? response.data : [],
      }
    }
    return {}
  },
  data() {
    return {
      driverJobs: [],
    }
  },
}
</script>
