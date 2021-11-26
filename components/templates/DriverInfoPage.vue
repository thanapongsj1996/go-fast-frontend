<template>
  <b-container
    class="my-4 my-md-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6"
  >
    <h2 class="mt-4 mb-3 mt-md-5 mb-md-3 mx-1 mx-md-0 prompt-font">
      รายละเอียดพาร์ทเนอร์
    </h2>
    <div v-if="driverInfo">
      <b-card
        :title="`${driverInfo.departurePlace} - ${driverInfo.destinationPlace}`"
      >
        <template #header>
          <b-avatar class="mr-3" size="lg" :src="`/default.png`"></b-avatar>
          <span class="mr-auto" style="font-size: 20px">{{
            `${driverInfo.firstName}`
          }}</span>
        </template>

        <b-card-text class="mt-1" style="font-size: 18px">
          {{ driverInfo.description }}
        </b-card-text>

        <b-list-group flush>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="geo"
              scale="1"
              variant="info"
            ></b-icon>
            จังหวัดต้นทาง
            {{ `${driverInfo.departurePlace}` }}
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-icon
              class="mx-2 mx-md-3"
              icon="geo-fill"
              scale="1"
              variant="info"
            ></b-icon>
            จังหวัดปลายทาง
            {{ `${driverInfo.destinationPlace}` }}
          </b-list-group-item>
          <b-list-group-item v-if="places && places.length > 0" class="px-0">
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
            {{ `${driverInfo.firstName}` }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    driverInfo: {
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
      loading: false,
    }
  },
  methods: {},
  computed: {
    places() {
      if (this.driverInfo && this.driverInfo.placeOnTheWay) {
        return this.driverInfo.placeOnTheWay.split(',')
      }
      return []
    },
  },
}
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