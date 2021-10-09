<template>
  <div>
    <b-card :title="`${jobInfo.description}`">
      <template #header>
        <b-avatar
          class="mr-3"
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

      <b-list-group flush>
        <b-list-group-item class="px-0">
          <b-icon
            class="mx-2 mx-md-3"
            icon="shop-window"
            scale="1"
            variant="info"
          ></b-icon>
          สถานที่ซื้อสินค้า {{ jobInfo.shopPlace }}
        </b-list-group-item>
        <b-list-group-item class="px-0">
          <b-icon
            class="mx-2 mx-md-3"
            icon="geo-fill"
            scale="1"
            variant="info"
          ></b-icon>
          สถานที่ส่งสินค้า {{ jobInfo.destinationPlace }}
        </b-list-group-item>
        <b-list-group-item class="px-0">
          <b-icon
            class="mx-2 mx-md-3"
            icon="cash-stack"
            scale="1.5"
            variant="info"
          ></b-icon>
          ค่าหิ้ว {{ jobInfo.price }} บาท / ชิ้น
        </b-list-group-item>
        <b-list-group-item class="px-0">
          <div class="d-flex">
            <b-icon
              class="mx-2 mx-md-3 mt-2 mt-md-1"
              icon="clock"
              scale="1.5"
              variant="info"
            ></b-icon>
            <span class="ml-1">
              ซื้อสินค้า {{ dateString(jobInfo.departureTime) }}
              <br class="d-md-none" />(
              {{ timeString(jobInfo.departureTime) }}
              )
            </span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="px-0">
          <div class="d-flex">
            <b-icon
              class="mx-2 mx-md-3 mt-2 mt-md-1"
              icon="clock-fill"
              scale="1.5"
              variant="info"
            ></b-icon>
            <span class="ml-1">
              ถึง {{ dateString(jobInfo.destinationTime) }}
              <br class="d-md-none" />(
              {{ timeString(jobInfo.destinationTime) }}
              )
            </span>
          </div>
        </b-list-group-item>
      </b-list-group>

      <nuxt-link :to="`/pre-order-jobs/${jobInfo.uuid}`"
        ><b-button variant="info" class="mt-3 w-100 prompt-font" size="lg"
          >รายละเอียดเพิ่มเติม</b-button
        ></nuxt-link
      >
    </b-card>
  </div>
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