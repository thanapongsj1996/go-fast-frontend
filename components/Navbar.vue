<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="px-md-5">
      <b-navbar-brand
        ><b-avatar variant="info" src="/logo.png" class="mr-3"></b-avatar
        >ส่งส่ง.com</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
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
          </b-nav-item>
          <b-nav-item
            href="https://www.facebook.com/ส่งส่ง-113410371111462/"
            target="blank"
          >
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
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>