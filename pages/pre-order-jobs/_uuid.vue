<template>
  <div>
    <DriverJobPreOrderInfoPage v-if="!pageLoading" :jobInfo="driverJob" />
    <PageLoading v-else-if="pageLoading" />
  </div>
</template>

<script>
import DriverJobPreOrderInfoPage from '~/components/templates/DriverJobPreOrderInfoPage.vue'
import PageLoading from '@/components/general/PageLoading.vue'
export default {
  components: { DriverJobPreOrderInfoPage, PageLoading },
  head() {
    return {
      title: 'ส่งส่ง.com'
    }
  },
  async created() {
    this.pageLoading = true

    const response = await this.$axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs/pre-order/${this.$route.params.uuid}`
    )

    if (response.status) {
      this.driverJob = response.data ? response.data : {}
    }

    this.pageLoading = false
  },
  data() {
    return {
      driverJob: {},
      pageLoading: false
    }
  },
}
</script>