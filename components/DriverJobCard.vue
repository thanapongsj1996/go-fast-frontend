<template>
  <div>
    <b-card :title="`${jobInfo.departurePlace} - ${jobInfo.destinationPlace}`">
      <b-card-text class="mt-1" style="font-size: 18px">
        {{ jobInfo.description }}
      </b-card-text>

      <b-list-group flush>
        <b-list-group-item class="px-0">
          <b-icon
            class="mx-3"
            icon="cash-stack"
            scale="2"
            variant="info"
          ></b-icon>
          ราคาเริ่มต้น {{ jobInfo.startPrice }}
        </b-list-group-item>
        <b-list-group-item class="px-0">
          <b-icon class="mx-3" icon="clock" scale="2" variant="info"></b-icon>
          เวลาออกเดินทาง {{ timeString(jobInfo.departureTime) }}
        </b-list-group-item>
        <b-list-group-item class="px-0">
          <b-icon
            class="mx-3"
            icon="clock-fill"
            scale="2"
            variant="info"
          ></b-icon>
          เวลาถึงปลายทาง {{ timeString(jobInfo.destinationTime) }}
        </b-list-group-item>
      </b-list-group>

      <nuxt-link :to="`/driver-jobs/${jobInfo.uuid}`"
        ><b-button variant="info" class="mt-2 mx-2 w-100" size="lg"
          >สนใจ</b-button
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
      return `วัน${day}ที่ ${d} ${months[m]} พ.ศ. ${y + 543}`
    },
    timeString(date) {
      const d = new Date(date)
      return this.formatDate(days[d.getDay()], d.getDate(), d.getMonth(), d.getFullYear())
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
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
]
</script>