<template>
  <div></div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ส่งส่ง.com',
    }
  },
  mounted() {
    window.location.href = `${process.env.HOST_NAME}/drivers`
  },
}
</script>
