<template>
  <div>
    <b-navbar-toggle :target="width <= 991 ? 'nav-collapse':''" :disabled="width > 991">
      
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="info"
        class="px-md-5 box-shadow prompt-font"
        fixed="top"
        target="nav-collapse"
      >
        <b-navbar-brand
          ><b-avatar variant="info" src="/logo.png" class="mr-3"></b-avatar
          >ส่งส่ง.com</b-navbar-brand
        >

        <b-navbar-toggle target=""></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              to="/drivers"
              :active="$route.name.includes('drivers')"
            >
              พาร์ทเนอร์ของเรา
            </b-nav-item>
            <!-- <b-nav-item
              to="/driver-jobs"
              :active="$route.name.includes('driver-jobs')"
            >
              งานส่งของ
            </b-nav-item>
            <b-nav-item
              to="/pre-order-jobs"
              :active="$route.name.includes('pre-order-jobs')"
            >
              งานฝากซื้อของ
            </b-nav-item> -->
            <b-nav-item to="/contact" :active="$route.name.includes('contact')">
              ติดต่อเรา
            </b-nav-item>
          </b-navbar-nav>

          <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
        </b-collapse>
      </b-navbar>
    </b-navbar-toggle>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser){
      this.width = window.innerWidth
    }
  },
  data() {
    return {
      width: 1000
    }
  },
}
</script>

<style scoped>
.box-shadow {
  box-shadow: 0px -1px 32px -8px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: 0px -1px 32px -8px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: 0px -1px 32px -8px rgba(0, 0, 0, 0.69);
}
</style>