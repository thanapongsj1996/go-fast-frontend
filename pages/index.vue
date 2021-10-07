<template>
  <div class="center">Redirect to driver jobs page in 3 seconds...</div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.location.href = `${process.env.HOST_NAME}/driver-jobs`
    }, 3000)
  }
}
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
