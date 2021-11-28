<template>
  <b-container>
    <DriversPage v-if="!pageLoading" :drivers="drivers" :paging="paging" @getDriversByPage="getDriversByPage" />
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
    await this.getDrivers()
  },
  data() {
    return {
      pageLoading: false,
      drivers: [],
      paging: {},
    }
  },
  methods: {
    async getDrivers(page = 1, limit = 14) {
      this.pageLoading = true
      const response = await this.$axios.$get(
        `${process.env.API_ENDPOINT}/driver-jobs/provided-jobs?limit=${limit}&page=${page}`
      )
      if (response.status) {
        this.drivers = response.data ? response.data : []
        this.paging = response.paging ? response.paging : {}
      }
      this.pageLoading = false
    },
    async getDriversByPage(page) {
      await this.getDrivers(page)
    }
  },
}
</script>