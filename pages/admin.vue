<template>
  <div>
    <b-container>
      <div class="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
        <h2>Admin Page</h2>

        <b-form-input
          id="input-1"
          v-model="password"
          trim
          placeholder="Input password"
          type="password"
          class="my-4"
        ></b-form-input>

        <b-button variant="info" @click="showDataClicked" class="w-100"
          >Show data</b-button
        >
      </div>
    </b-container>
    <div v-if="deliveryJobResponses.length > 0" class="mt-5 mx-4">
      <h4>Delivery Job Responses</h4>
      <b-table striped hover :items="deliveryJobResponses"></b-table>
    </div>

    <div v-if="preorderJobResponses.length > 0" class="mt-5 mx-4">
      <h4>Pre-order Job Responses</h4>
      <b-table striped hover :items="preorderJobResponses"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: null,
      deliveryJobResponses: [],
      preorderJobResponses: [],
    }
  },
  methods: {
    async getAllDeliveryResponse(password) {
      return await this.$axios.$post(
        `${process.env.API_ENDPOINT}/admin/delivery-jobs/responses`,
        { password }
      )
    },
    async getAllPreOrderResponse(password) {
      return await this.$axios.$post(
        `${process.env.API_ENDPOINT}/admin/preorder-jobs/responses`,
        { password }
      )
    },
    async showDataClicked() {
      // alert('dd')
      try {
        const deliveryRes = await this.getAllDeliveryResponse(this.password)
        if (deliveryRes.status && deliveryRes.data) {
          this.deliveryJobResponses = deliveryRes.data.map((d) => {
            const p = {
              ...d,
              jobUuid: d.driverJob.driverJobUuid,
            }
            delete p.uuid
            delete p.driverJob
            return p
          })
        }

        const preorderRes = await this.getAllPreOrderResponse(this.password)
        if (preorderRes.status && preorderRes.data) {
          this.preorderJobResponses = preorderRes.data.map((d) => {
            const p = {
              ...d,
              jobUuid: d.driverJobPreOrder.preOrderJobUuid,
            }
            delete p.uuid
            delete p.driverJobPreOrder
            return p
          })
        }
      } catch (err) {
        alert('Wrong password !')
      }
    },
  },
}
</script>