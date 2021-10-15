<template>
  <b-container>
    <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <h2 class="mb-4 prompt-font">เข้าสู่ระบบสำหรับคนขับ</h2>

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

      <b-button
        variant="info"
        @click="login"
        class="w-100 prompt-font"
        size="lg"
        :disabled="btnDisabled"
        >เข้าสู่ระบบ</b-button
      >
      <p class="mt-3 text-center">
        สมัครสมาชิกเพื่อเป็นพาร์ทเนอร์ร่วมกับเรา
        <nuxt-link to="/register">สมัครสมาชิก</nuxt-link>
      </p>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      phone: null,
      password: null,
    }
  },
  methods: {
    async login() {
      const payload = {
        phone: this.phone,
        password: this.password,
      }
      try {
        const response = await this.$axios.$post(
          `${process.env.API_ENDPOINT}/auth/driver/sign-in`,
          payload
        )
        if (response.code === 200) {
          alert('ok')
        }
      } catch (err) {
        alert('error')
      }
    },
  },
  computed: {
    btnDisabled() {
      return (
        !this.phone ||
        this.phone === '' ||
        !this.password ||
        this.password === ''
      )
    },
  },
}
</script>