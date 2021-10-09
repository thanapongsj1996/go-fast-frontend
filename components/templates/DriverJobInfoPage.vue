<template>
  <b-container
    class="my-4 my-md-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6"
  >
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 mx-1 mx-md-0 prompt-font">
      รายละเอียดงาน
    </h2>
    <div v-if="jobInfo">
      <b-card
        :title="`${jobInfo.departurePlace} - ${jobInfo.destinationPlace}`"
      >
        <template #header>
          <b-avatar
            class="mr-3"
            size="lg"
            :src="`/${
              jobInfo.driver && jobInfo.driver.profileImg !== ''
                ? jobInfo.driver.profileImg
                : 'default.png'
            }`"
          ></b-avatar>
          <span class="mr-auto" style="font-size: 20px">{{
            `${jobInfo.driver ? jobInfo.driver.firstName : ''} ${
              jobInfo.driver ? jobInfo.driver.lastName : ''
            }`
          }}</span>
        </template>

        <b-card-text class="mt-1" style="font-size: 18px">
          {{ jobInfo.description }}
        </b-card-text>

        <b-list-group flush>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="cash-stack"
              scale="1"
              variant="info"
            ></b-icon>
            ราคาเริ่มต้น {{ jobInfo.startPrice }} บาท
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <div class="d-flex">
              <b-icon
                class="mx-2 mx-md-3 mt-2 mt-md-1"
                icon="clock"
                scale="1"
                variant="info"
              ></b-icon>
              <span class="ml-1">
                เดินทาง {{ dateString(jobInfo.departureTime) }}
                <br class="d-md-none" />(
                {{ timeString(jobInfo.departureTime) }} )
              </span>
            </div>
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <div class="d-flex">
              <b-icon
                class="mx-2 mx-md-3 mt-2 mt-md-1"
                icon="clock-fill"
                scale="1"
                variant="info"
              ></b-icon>
              <span class="ml-1">
                ถึง {{ dateString(jobInfo.destinationTime) }}
                <br class="d-md-none" />(
                {{ timeString(jobInfo.destinationTime) }} )
              </span>
            </div>
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="geo-alt-fill"
              scale="1"
              variant="info"
            ></b-icon>
            จุดสำคัญที่ผ่าน
            <b-list-group flush>
              <b-list-group-item
                v-for="p in places"
                :key="p"
                class="pl-4"
                action
              >
                <b-icon
                  class="mx-2 mx-md-3"
                  icon="geo-alt"
                  scale="1"
                  variant="info"
                ></b-icon>
                {{ p }}
              </b-list-group-item>
            </b-list-group>
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
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 prompt-font">กรอกข้อมูลฝากส่งของ</h2>
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
          label="เบอร์โทรศัพท์มือถือ (ผู้ฝากส่งของ)"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="senderPhone"
            trim
            placeholder="ตัวอย่าง: 0999999999"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="เบอร์โทรศัพท์มือถือ (ผู้รับของ)"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="receiverPhone"
            trim
            placeholder="ตัวอย่าง: 0999999999"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="รายละเอียดของที่ฝากส่ง"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="items"
            trim
            placeholder="ตัวอย่าง: ต้องการฝากส่งเสื้อผ้า 1 ชุดและรองเท้า 1 คู่"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="สถานที่ให้คนขับไปรับของ"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="pickupPlace"
            trim
            placeholder="ตัวอย่าง: เซเว่น-อีเลเว่น ปตท. ด่านช้าง"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="สถานที่ให้คนขับไปส่งของ"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="deliverPlace"
            trim
            placeholder="ตัวอย่าง: BTS พญาไท ทางออกที่ 3 เขตราชเทวี กรุงเทพฯ"
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
          class="my-3 w-100 prompt-font"
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
        <p v-if="errMsg === ''">
          หากคำสั่งของคุณได้รับการยืนยัน จะมีการติดต่อกลับไป
        </p>
      </div>
      <b-button
        size="lg"
        class="mt-3 prompt-font"
        :variant="errMsg === '' ? 'info' : 'danger'"
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
      senderPhone: null,
      receiverPhone: null,
      items: null,
      pickupPlace: null,
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
      const reg = /^\d+$/

      if (this.firstName === null || this.firstName === '') {
        this.errMsg = 'โปรดระบุชื่อจริง'
      } else if (this.lastName === null || this.lastName === '') {
        this.errMsg = 'โปรดระบุนามสกุล'
      } else if (this.senderPhone === null || this.senderPhone === '') {
        this.errMsg = 'โปรดระบุเบอร์โทรศัพท์มือถือ (ผู้ฝากส่งของ)'
      } else if (
        !this.senderPhone.match(reg) ||
        this.senderPhone.length !== 10
      ) {
        this.errMsg = 'โปรดระบุเบอร์โทรศัพท์มือถือ (ผู้ฝากส่งของ) ให้ถูกต้อง'
      } else if (this.receiverPhone === null || this.receiverPhone === '') {
        this.errMsg = 'โปรดระบุเบอร์โทรศัพท์มือถือ (ผู้รับของ)'
      } else if (
        !this.receiverPhone.match(reg) ||
        this.receiverPhone.length !== 10
      ) {
        this.errMsg = 'โปรดระบุเบอร์โทรศัพท์มือถือ (ผู้รับของ) ให้ถูกต้อง'
      } else if (this.items === null || this.items === '') {
        this.errMsg = 'โปรดระบุรายละเอียดของที่ฝากส่ง'
      } else if (this.pickupPlace === null || this.pickupPlace === '') {
        this.errMsg = 'โปรดระบุสถานที่ให้คนขับไปรับของ'
      } else if (this.deliverPlace === null || this.deliverPlace === '') {
        this.errMsg = 'โปรดระบุสถานที่ให้คนขับไปส่งของ'
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
      formData.append('senderPhone', this.senderPhone)
      formData.append('receiverPhone', this.receiverPhone)
      formData.append('items', this.items)
      formData.append('pickupPlace', this.pickupPlace)
      formData.append('deliverPlace', this.deliverPlace)
      formData.append('description', this.description)

      try {
        const response = await this.$axios.$post(
          `${process.env.API_ENDPOINT}/driver-jobs/${this.jobInfo.uuid}`,
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
      this.senderPhone = null
      this.receiverPhone = null
      this.items = null
      this.pickupPlace = null
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
  computed: {
    places() {
      if (this.jobInfo && this.jobInfo.placeOnTheWay) {
        return this.jobInfo.placeOnTheWay.split(',')
      }
      return []
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