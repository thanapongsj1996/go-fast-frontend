<template>
  <div>
    <b-card :title="`${driver.departurePlace} - ${driver.destinationPlace}`">
      <template #header>
        <b-avatar
          class="mr-3"
          :src="`/default.png`"
        ></b-avatar>
        <span class="mr-auto" style="font-size: 20px">{{
          `${driver.firstName}`
        }}</span>
      </template>

      <b-card-text class="mt-1" style="font-size: 18px">
        {{ driver.description }}
      </b-card-text>

      <nuxt-link :to="`/drivers/${driver.uuid}`"
        ><b-button variant="info" class="mt-2 w-100 prompt-font" size="lg"
          >รายละเอียดเพิ่มเติม</b-button
        ></nuxt-link
      >
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    driver: {
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
        days[d.getUTCDay()],
        d.getUTCDate(),
        d.getUTCMonth(),
        d.getUTCFullYear()
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