<template>
  <b-container
    class="my-4 my-md-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6"
  >
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 mx-1 mx-md-0">รายละเอียดงาน</h2>
    <div v-if="jobInfo">
      <b-card :title="`${jobInfo.description}`">
        <template #header>
          <b-avatar class="mr-3" size="lg" src="/profile.jpg"></b-avatar>
          <span class="mr-auto" style="font-size: 20px">{{
            `${jobInfo.driver ? jobInfo.driver.firstName : ''} ${
              jobInfo.driver ? jobInfo.driver.lastName : ''
            }`
          }}</span>
        </template>

        <b-list-group flush>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="geo-fill"
              scale="1"
              variant="info"
            ></b-icon>
            {{ jobInfo.shopPlace }}
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="cash-stack"
              scale="1"
              variant="info"
            ></b-icon>
            ค่าส่ง {{ jobInfo.price }} บาท / ชิ้น
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="clock"
              scale="1"
              variant="info"
            ></b-icon>
            ซื้อสินค้า {{ dateString(jobInfo.departureTime) }} (
            {{ timeString(jobInfo.departureTime) }} )
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="clock-fill"
              scale="1"
              variant="info"
            ></b-icon>
            ถึง {{ dateString(jobInfo.destinationTime) }} (
            {{ timeString(jobInfo.destinationTime) }} )
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="person-fill"
              scale="1"
              variant="info"
            ></b-icon>
            คนขับ
            {{
              `${jobInfo.driver ? jobInfo.driver.firstName : ''} ${
                jobInfo.driver ? jobInfo.driver.lastName : ''
              }`
            }}
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="telephone-fill"
              scale="1"
              variant="info"
            ></b-icon>
            เบอร์โทรศัพท์มือถือ {{ jobInfo.phone }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3">กรอกข้อมูลฝากส่งของ</h2>
    <div>
      <b-card>
        <b-form-group id="fieldset-1" label="ชื่อจริง" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="firstName"
            trim
            placeholder="ตัวอย่าง: สมหมาย"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-1" label="นามสกุล" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="lastName"
            trim
            placeholder="ตัวอย่าง: ใจดี"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="เบอร์โทรศัพท์มือถือ"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="phone"
            trim
            placeholder="ตัวอย่าง: 0999999999"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="รายละเอียดของที่ฝากซื้อ"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="items"
            trim
            placeholder="ตัวอย่าง: ต้องการฝากส่งเสื้อผ้า 1 ชุดและรองเท้า 1 คู่"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-1" label="สถานที่รับของ" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="deliverPlace"
            trim
            placeholder="ตัวอย่าง: เซเว่น-อีเลเว่น ปตท. ด่านช้าง"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="ข้อมูลเพิ่มเติม (ถ้ามี)"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="description"
            trim
            placeholder="ข้อมูลเพิ่มเติม (ถ้ามี)"
          ></b-form-input>
        </b-form-group>

        <b-button
          @click="saveDate()"
          variant="info"
          class="my-3 w-100"
          size="lg"
          >ยืนยันข้อมูล</b-button
        >
      </b-card>
    </div>

    <b-modal
      ref="save-modal"
      hide-footer
      :title="errMsg === '' ? 'บันทึกข้อมูลสำเร็จ' : 'เกิดข้อผิดพลาด'"
    >
      <div class="d-block text-center">
        <h4>{{ errMsg === '' ? 'ขอบคุณที่ใช้บริการ' : errMsg }}</h4>
        <p v-if="errMsg === ''">หากคำสั่งของคุณได้รับการยืนยัน จะมีการติดต่อกลับไป</p>
      </div>
      <b-button
        size="lg"
        class="mt-3"
        variant="primary"
        block
        @click="hideModal"
        >ปิด</b-button
      >
    </b-modal>
  </b-container>
</template>

<script>
export default {
  props: {
    jobInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      phone: null,
      items: null,
      deliverPlace: null,
      description: null,
      errMsg: '',
    }
  },
  methods: {
    formatDate(day, d, m, y) {
      return `${day}ที่ ${d} ${months[m]} ${y + 543}`
    },
    formatTime(h, m) {
      const minute = `${m}`.length === 1 ? `0${m}` : m
      return `${h}:${minute} น.`
    },
    dateString(date) {
      const d = new Date(date)
      return this.formatDate(
        days[d.getDay()],
        d.getDate(),
        d.getMonth(),
        d.getFullYear()
      )
    },
    timeString(date) {
      const d = new Date(date)
      return this.formatTime(d.getUTCHours(), d.getUTCMinutes())
    },
    async saveDate() {
      // validate
      this.errMsg = ''
      if (this.firstName === null || this.firstName === '') {
        this.errMsg = 'โปรดระบุชื่อจริง'
      } else if (this.lastName === null || this.lastName === '') {
        this.errMsg = 'โปรดระบุนามสกุล'
      } else if (this.phone === null || this.phone === '') {
        this.errMsg = 'โปรดระบุเบอร์โทรศัพท์มือถือ'
      } else if (this.items === null || this.items === '') {
        this.errMsg = 'โปรดระบุรายละเอียดของที่ฝากซื้อ'
      } else if (this.deliverPlace === null || this.deliverPlace === '') {
        this.errMsg = 'โปรดระบุสถานที่ส่งของ'
      } else if (this.description === null || this.description === '') {
        this.errMsg = ''
        this.description = ''
      }

      if (this.errMsg !== '') {
        this.showModal()
        return
      }

      const formData = new FormData()
      formData.append('firstName', this.firstName)
      formData.append('lastName', this.lastName)
      formData.append('phone', this.phone)
      formData.append('items', this.items)
      formData.append('deliverPlace', this.deliverPlace)
      formData.append('description', this.description)

      try {
        const response = await this.$axios.$post(
          `${process.env.API_ENDPOINT}/driver-jobs/pre-order/${this.jobInfo.uuid}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        if (response.status) {
          this.showModal()
        } else {
          this.errMsg = 'เกิดปัญหาขณะบันทึกข้อมูล กรุณาลองใหม่ภายหลัง'
          this.showModal()
        }
      } catch (err) {
        this.errMsg = 'เกิดปัญหาขณะบันทึกข้อมูล กรุณาลองใหม่ภายหลัง'
        this.showModal()
      }
    },
    clearState() {
      this.firstName = null
      this.lastName = null
      this.phone = null
      this.items = null
      this.deliverPlace = null
      this.description = null
      this.errMsg = ''
    },
    showModal() {
      this.$refs['save-modal'].show()
    },
    hideModal() {
      if (this.errMsg === '') this.clearState()
      this.$refs['save-modal'].hide()
    },
  },
}
const days = [
  'อาทิตย์',
  'จันทร์',
  'อังคาร',
  'พุธ',
  'พฤหัสบดี',
  'ศุกร์',
  'เสาร์',
]
const months = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.',
]
</script>

<style scoped>
::placeholder {
  opacity: 0.6; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  opacity: 0.6; /* Firefox */
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  opacity: 0.6; /* Firefox */
}
</style>