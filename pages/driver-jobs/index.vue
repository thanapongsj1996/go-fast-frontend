<template>
  <DriverJobsPage :driverJobs="driverJobs" />
</template>

<script>
import DriverJobsPage from '@/components/templates/DriverJobsPage.vue'
export default {
  components: { DriverJobsPage },
  layout: 'default',
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs`
    )
    if (response.status) {
      return {
        driverJobs: response.data ? response.data : [],
      }
    }
  },
  data() {
    return {
      driverJobs: [],
    }
  },
}
</script>
