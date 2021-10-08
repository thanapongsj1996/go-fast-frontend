<template>
  <b-container
    class="my-4 my-md-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 px-0"
  >
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3">รายละเอียดงาน</h2>
    <div>
      <b-card
        :title="`${jobInfo.departurePlace} - ${jobInfo.destinationPlace}`"
      >
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
            ราคาเริ่มต้น {{ jobInfo.startPrice }}
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="clock"
              scale="1"
              variant="info"
            ></b-icon>
            ออกเดินทาง {{ timeString(jobInfo.departureTime) }}
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="clock-fill"
              scale="1"
              variant="info"
            ></b-icon>
            ถึงปลายทาง {{ timeString(jobInfo.destinationTime) }}
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="geo-alt-fill"
              scale="1"
              variant="info"
            ></b-icon>
            สถานที่ระหว่างทาง
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
              icon="telephone-fill"
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
            เบอร์โทร {{ jobInfo.phone }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3">กรอกข้อมูลฝากส่งของ</h2>
    <div>
      <b-card>
        <b-form-group
          id="fieldset-1"
          label="ชื่อจริง"
          label-for="input-1"
          valid-feedback="Thank you!"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="นามสกุล"
          label-for="input-1"
          valid-feedback="Thank you!"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="เบอร์โทรศัพท์"
          label-for="input-1"
          valid-feedback="Thank you!"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="รายละเอียดของที่ฝากส่ง"
          label-for="input-1"
          valid-feedback="Thank you!"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="สถานที่รับของ"
          label-for="input-1"
          valid-feedback="Thank you!"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="สถานที่ส่งของ"
          label-for="input-1"
          valid-feedback="Thank you!"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-1"
          label="ข้อมูลเพิ่มเติม (ถ้ามี)"
          label-for="input-1"
          valid-feedback="Thank you!"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-button variant="primary" class="my-3 w-100" size="lg">ยืนยันข้อมูล</b-button>
      </b-card>
    </div>
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
  methods: {
    formatDate(day, d, m, y) {
      return `วัน${day}ที่ ${d} ${months[m]} ${y + 543}`
    },
    timeString(date) {
      const d = new Date(date)
      return this.formatDate(
        days[d.getDay()],
        d.getDate(),
        d.getMonth(),
        d.getFullYear()
      )
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