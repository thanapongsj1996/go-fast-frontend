<template>
  <b-container>
    <DriversPage v-if="!pageLoading" :drivers="drivers" />
    <PageLoading v-else-if="pageLoading" />
  </b-container>
</template>

<script>
import DriversPage from '@/components/templates/DriversPage.vue'
import PageLoading from '@/components/general/PageLoading.vue'
export default {
  components: {
    DriversPage,
    PageLoading,
  },
  layout: 'default',
  head() {
    return {
      title: 'ส่งส่ง.com',
    }
  },
  async created() {
    this.pageLoading = true
    const response = await this.$axios.$get(
      `${process.env.API_ENDPOINT}/driver-jobs/provided-jobs`
    )
    if (response.status) {
      this.drivers = response.data ? response.data : []
    }
    this.pageLoading = false
  },
  data() {
    return {
      pageLoading: false,
      drivers: [],
    }
  },
}
</script>