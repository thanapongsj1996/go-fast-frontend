<template>
  <div>
    <DriverJobsPage v-if="!pageLoading" :driverJobs="driverJobs" />
    <PageLoading v-else-if="pageLoading" />
  </div>
</template>

<script>
import DriverJobsPage from '@/components/templates/DriverJobsPage.vue'
import PageLoading from '@/components/general/PageLoading.vue'
export default {
  components: { DriverJobsPage, PageLoading },
  layout: 'default',
  head() {
    return {
      title: 'ส่งส่ง.com'
    }
  },
  async created() {
    this.pageLoading = true
    const response = await this.$axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs`
    )
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
