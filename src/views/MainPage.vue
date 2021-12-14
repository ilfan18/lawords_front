<template>
    <div class="main content">
        <v-header>{{ greeting }}</v-header>
        <div class="main__content"></div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
export default {
    components: { VHeader },
    computed: {
        ...mapState({
            first_name: (state) => state.user.user.first_name,
        }),
        greeting() {
            if (this.first_name) {
                return `Привет, ${this.first_name}!`
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