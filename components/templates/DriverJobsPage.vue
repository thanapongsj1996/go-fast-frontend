<template>
  <b-container>
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 prompt-font">งานส่งของทั้งหมด</h2>
    <div class="row">
      <div
        v-for="job in driverJobs"
        :key="job.uuid"
        class="col-12 col-lg-6 my-2"
      >
        <DriverJobCard :jobInfo="job" />
      </div>
    </div>
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