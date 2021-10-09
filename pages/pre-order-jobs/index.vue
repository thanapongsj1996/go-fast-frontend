<template>
  <div>
    <DriverJobsPreOrderPage v-if="!pageLoading" :driverJobs="driverJobs" />
    <PageLoading v-else-if="pageLoading" />
  </div>
</template>

<script>
import DriverJobsPreOrderPage from '~/components/templates/DriverJobsPreOrderPage.vue'
import PageLoading from '@/components/general/PageLoading.vue'
export default {
  components: { DriverJobsPreOrderPage, PageLoading },
  layout: 'default',
  head() {
    return {
      title: 'ส่งส่ง.com'
    }
  },
  async created() {
    this.pageLoading = true
    const response = await this.$axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs/pre-order`
    )
    console.log('response : ', response)
    if (response.status) {
      this.driverJobs = response.data ? response.data : []
    }
    this.pageLoading = false
  },
  data() {
    return {
      pageLoading: false,
      driverJobs: [],
    }
  },
}
</script>
