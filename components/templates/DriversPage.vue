<template>
  <b-container>
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 prompt-font">พาร์ทเนอร์ของเรา</h2>
    <div v-if="drivers.length" class="row">
      <div
        v-for="driver in drivers"
        :key="driver.uuid"
        class="col-12 col-lg-6 my-2"
      >
        <DriverCard :driver="driver" />
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
  },
}
</script>