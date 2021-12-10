<template>
    <div
        class="loader"
        :class="themeClass"
        :style="{ with: loaderWith, height: loaderHeight, 'border-radius': loaderRadius }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'skeleton-loader',
    props: {
        loaderWith: {
            type: String,
            default: '100%'
        },
        loaderHeight: {
            type: String,
            default: '2rem'
        },
        loaderRadius: {
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
            background-color: rgba(28, 28, 28, 0.5);
        }
        100% {
            background-color: #1c1c1c;
        }
    }
}
</style>