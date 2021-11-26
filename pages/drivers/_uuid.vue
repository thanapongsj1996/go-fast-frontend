<template>
  <div>
    <DriverInfoPage v-if="!pageLoading" :driverInfo="driverInfo" />
    <PageLoading v-else-if="pageLoading" />
  </div>
</template>

<script>
import DriverInfoPage from '~/components/templates/DriverInfoPage.vue'
import PageLoading from '@/components/general/PageLoading.vue'
export default {
  components: { DriverInfoPage, PageLoading },
  head() {
    return {
      title: 'ส่งส่ง.com'
    }
  },
  async created() {
    this.pageLoading = true

    const response = await this.$axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs/provided-jobs/${this.$route.params.uuid}`
    )

    if (response.status) {
      this.driverInfo = response.data ? response.data : {}
    }

    this.pageLoading = false
  },
  data() {
    return {
      driverInfo: {},
      pageLoading: false
    }
  },
}
</script>