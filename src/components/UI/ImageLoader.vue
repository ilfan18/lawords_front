<template>
    <img v-show="!isLoading" :src="src" :alt="alt" :title="title" @load="onImageLoad" />
    <skeleton-loader v-if="isLoading" :width="width" :height="height" :radius="radius" />
</template>

<script>
export default {
    name: 'image-loader',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '2rem'
        },
        radius: {
            type: String,
            default: '5px'
        },
    },
    data() {
        return {
            isLoading: true
        }
    },
    methods: {
        onImageLoad() {
            this.isLoading = false
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>