<template>
  <div class="pt-5 relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <p class="title"><span style="font-size: 25px">ข</span>นส่งรายวันจำกัด</p>
      <b-list-group style="max-width: 300px;">
        <b-list-group-item v-for="u in users" :key="u.name" class="d-flex align-items-center">
          <user-card :name="u.name" :avatar="u.avatar"/>
        </b-list-group-item>
      </b-list-group>
      <b-button v-b-modal.modal-center variant="light" class="mt-3 w-100">Click me</b-button>

      <b-modal id="modal-center" centered title="สวัสดี">
        <p class="my-4 text-center">อีบาส อีง่วง !</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'
export default {
  components: { UserCard },
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    show() {
      alert()
    }
  }
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
