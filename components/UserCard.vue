<template>
    <b-list-group-item class="d-flex align-items-center w-100">
        <b-avatar class="mr-3" :src="avatar"></b-avatar>
        <span class="mr-auto">{{ name }}</span>
    </b-list-group-item>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        avatar: {
            type: String,
            default: ''
        }
    }   
}
</script>

<style scoped>

</style>