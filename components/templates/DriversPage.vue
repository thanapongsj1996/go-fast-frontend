<template>
  <b-container>
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 prompt-font">พาร์ทเนอร์ของเรา</h2>
    <div v-if="driverArr.length" class="row">
      <div
        v-for="driver in driverArr"
        :key="driver.uuid"
        class="col-12 col-lg-6 my-2"
      >
        <DriverCard :driver="driver" />
      </div>
      <div class="mt-3 w-100">
        <b-pagination
          @change="changePage"
          v-model="currentPage"
          pills
          :total-rows="rows"
          :per-page="parPage"
          align="center"
        ></b-pagination>
      </div>
    </div>
    <div v-else class="text-center mt-5">ไม่มีพาร์ทเนอร์ส่งของในขณะนี้</div>
  </b-container>
</template>

<script>
export default {
  props: {
    drivers: {
      type: Array,
      default: () => [],
    },
    paging: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      driverArr: this.drivers,
      rows: this.paging ? this.paging.count : 0,
      parPage: this.paging ? this.paging.limit : 14,
      currentPage: this.paging ? this.paging.page : 1,
    }
  },
  methods: {
    changePage(page) {
      this.$emit('getDriversByPage', page)
    }
  }
}
</script>