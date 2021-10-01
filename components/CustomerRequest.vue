<template>
    <b-list-group-item class="align-items-center w-100">
        <h1 class="mr-auto"><strong>Title</strong> : {{ title }}</h1>
        <h1 class="mr-auto"><strong>Description</strong> : {{ description }}</h1>
        <h1 class="mr-auto"><strong>Price</strong> : {{ price }}</h1>
        <h1 class="mr-auto"><strong>Phone</strong> : {{ phone }}</h1>
        <h1 class="mr-auto"><strong>Pick up location</strong> : {{ pickupLocation }}</h1>
        <h1 class="mr-auto"><strong>Deliver location</strong> : {{ deliverLocation }}</h1>
    </b-list-group-item>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0
        },
        phone: {
            type: String,
            default: ''
        },
        pickupLocation: {
            type: String,
            default: ''
        },
        deliverLocation: {
            type: String,
            default: ''
        }
    }   
}
</script>

<style scoped>

</style>