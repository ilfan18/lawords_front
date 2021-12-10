<template>
    <div
        class="loader"
        :class="themeClass"
        :style="{ width: width, height: height, 'border-radius': radius }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'skeleton-loader',
    props: {
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
        color: {
            type: String,
            default: '#C4C4C4'
        },
        waveColor: {
            type: String,
            default: '#C4C4C4'
        }
    },
    computed: {
        themeClass() {
            return this.$store.state.ui.theme == 'light' ? '' : 'dark';
        },
    }
}
</script>

<style lang="scss" scoped>
.loader {
    animation: skeleton-loading 1s linear infinite alternate;
    &.dark {
        animation: skeleton-loading-dark 1s linear infinite alternate;
    }
    @keyframes skeleton-loading {
        0% {
            background-color: rgba(217, 217, 217, 0.5);
        }
        100% {
            background-color: rgba(217, 217, 217, 1);
        }
    }
    @keyframes skeleton-loading-dark {
        0% {
            background-color: rgba(13, 13, 13, 0.5);
        }
        100% {
            background-color: rgba(13, 13, 13, 1);
        }
    }
}
</style>