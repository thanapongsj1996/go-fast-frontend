<template>
  <b-container>
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 prompt-font">งานฝากซื้อของทั้งหมด</h2>
    <div v-if="driverJobs.length" class="row">
      <div
        v-for="job in driverJobs"
        :key="job.uuid"
        class="col-12 col-lg-6 my-2"
      >
        <DriverJobPreOrderCard :jobInfo="job" />
      </div>
    </div>
    <div v-else class="text-center mt-5">ไม่มีงานในขณะนี้</div>
  </b-container>
</template>

<script>
export default {
  props: {
    driverJobs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>