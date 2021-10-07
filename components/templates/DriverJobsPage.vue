<template>
  <b-container>
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3">งานส่งของทั้งหมด</h2>
    <DriverJobCard v-for="job in driverJobs" :key="job.uuid" :jobInfo="job" class="col-12 col-lg-6 px-0" />
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