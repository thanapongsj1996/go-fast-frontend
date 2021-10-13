<template>
  <b-container>
    <div class="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
      <h2 class="mb-4">Login</h2>

      <b-form-input
        id="input-1"
        v-model="phone"
        trim
        placeholder="เบอร์โทรศัพท์"
        class="my-2"
        size="lg"
      ></b-form-input>

      <b-form-input
        id="input-1"
        v-model="password"
        trim
        placeholder="รหัสผ่าน"
        type="password"
        class="my-2"
        size="lg"
      ></b-form-input>

      <b-button variant="info" @click="login" class="w-100" size="lg"
        >เข้าสู่ระบบ</b-button
      >
    </div>
  </b-container>
</template>

<script>
export default {
    data() {
        return {
            phone: null,
            password: null
        }
    },
    methods: {
        login() {
            alert('test login')
            // if (!this.phone || this.phone === '') {
                
            // }
        }
    }
}
</script>