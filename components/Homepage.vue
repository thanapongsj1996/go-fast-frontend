<template>
  <div
    class="
      pt-5
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center
      sm:pt-0
    "
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <p class="title"><span style="font-size: 25px">ข</span>นส่งรายวันจำกัด</p>

      <div>
        <b-form-input
          class="my-1"
          v-model="title"
          placeholder="Title"
        ></b-form-input>
        <b-form-input
          class="my-1"
          v-model="description"
          placeholder="Description"
        ></b-form-input>
        <b-form-input
          class="my-1"
          v-model="price"
          placeholder="Price"
          type="number"
        ></b-form-input>
        <b-form-input
          class="my-1"
          v-model="phone"
          placeholder="Phone"
        ></b-form-input>
        <b-form-input
          class="my-1"
          v-model="pickupLocation"
          placeholder="Pick up location"
        ></b-form-input>
        <b-form-input
          class="my-1"
          v-model="deliverLocation"
          placeholder="Deliver location"
        ></b-form-input>

        <b-button
          @click="save"
          variant="primary"
          :disabled="loading"
          class="w-100 my-2"
        >
          <b-icon
            v-if="loading"
            icon="three-dots"
            animation="cylon"
            font-scale="1"
          ></b-icon>
          <div v-else>SAVE</div>
        </b-button>
      </div>

      <b-list-group class="my-4" style="max-width: 400px">
        <b-list-group-item v-for="j in jobs" :key="j.title" class="d-flex">
          <customer-request
            :title="j.title"
            :description="j.description"
            :price="j.price"
            :phone="j.phone"
            :pickupLocation="j.pickupLocation"
            :deliverLocation="j.deliverLocation"
          />
        </b-list-group-item>
      </b-list-group>

      <b-modal id="response-modal" ref="my-modal" hide-footer hide-header-close>
        <template #modal-title>ขนส่งรายวัน</template>
        <div class="d-block text-center">
          <h3>บันทึกข้อมูลสำเร็จ</h3>
        </div>
        <b-button class="mt-3" block @click="closeModal(true)"
          >Close</b-button
        >
      </b-modal>

      <b-modal id="response-modal" ref="my-modal2" hide-footer hide-header-close>
        <template #modal-title>ขนส่งรายวัน</template>
        <div class="d-block text-center">
          <h3>บันทึกข้อมูลล้มเหลว</h3>
        </div>
        <b-button class="mt-3" block @click="closeModal(false)"
          >Close</b-button
        >
      </b-modal>
    </div>
  </div>
</template>

<script>
import CustomerRequest from './CustomerRequest.vue'
export default {
  components: { CustomerRequest },
  props: {
    jobs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
      title: '',
      description: '',
      price: null,
      phone: '',
      pickupLocation: '',
      deliverLocation: '',
    }
  },
  methods: {
    show() {
      alert()
    },
    async save() {
      this.loading = true

      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('phone', this.phone)
      formData.append('pickupLocation', this.pickupLocation)
      formData.append('deliverLocation', this.deliverLocation)

      try {
        const response = await this.$axios.$post(
          `https://polar-tundra-74605.herokuapp.com/api/v1/jobs/customer-requests`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        if (response.status) {
          this.$refs['my-modal'].show()
        } else {
          this.$refs['my-modal2'].show()
        }
      } catch (err) {
        this.$refs['my-modal2'].show()
      }
    },
    closeModal(isSuccess) {
      this.$bvModal.hide('response-modal')
      this.loading = false
      if (isSuccess) {
        window.location.reload()
      }
    }
  },
}
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
