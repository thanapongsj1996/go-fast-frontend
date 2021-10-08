<template>
  <DriverJobInfoPage :jobInfo="driverJob" />
</template>

<script>
import DriverJobInfoPage from '~/components/templates/DriverJobInfoPage.vue'
export default {
  components: { DriverJobInfoPage },
  async asyncData({ $axios, route }) {
    const response = await $axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs/${route.params.uuid}`
    )
    console.log('response : ', response)
    if (response.status) {
      return {
        driverJob: response.data ? response.data : {},
      }
    }
  },
  data() {
    return {
      driverJob: {},
    }
  },
  watchQuery: true,
}
</script>