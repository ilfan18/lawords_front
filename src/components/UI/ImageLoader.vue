<template>
    <img v-show="!isLoading" :src="src" :alt="alt" @load="onImageLoad" />
    <skeleton-loader v-if="isLoading" width="48px" height="48px" radius="50%" />
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
        }
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