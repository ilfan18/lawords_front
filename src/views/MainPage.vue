<template>
    <div class="main content">
        <v-header>Привет, {{ user_name }}!</v-header>
        <div class="main__content"></div>
    </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue'
export default {
    components: { VHeader },
    computed: {
        user_name() {
            return this.$store.state.user.profile.user.first_name
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
}
</style>