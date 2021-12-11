<template>
    <div class="main content">
        <v-header>{{ greeting }}</v-header>
        <div class="main__content"></div>
    </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue'
export default {
    components: { VHeader },
    computed: {
        greeting() {
            const first_name = this.$store.state.user.profile.user.first_name
            if (first_name) {
                return `Привет, ${first_name}!`
            }
            return 'Привет!'

        }
    }
}
</script>

<style lang="scss" scoped>
.main {
}
</style>