<template>
  <Tutorial :msg="msg" />
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get('https://arcane-chamber-55473.herokuapp.com/')
    return { msg: data.message ? data.message : '' }
  },
  data() {
    return {
      msg: ''
    }
  }
}
</script>
