<template>
    <div class="profile main-content">
        <v-header>Мой профиль</v-header>
        <div class="profile__cover"></div>
        <div class="profile__content">
            <div class="profile__card"></div>
        </div>
    </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue'
export default {
    components: { VHeader },
}
</script>

<style lang="scss" scoped>
.profile {
    &__content {
    }
    &__cover {
        height: 170px;
        background: linear-gradient(91.18deg, #6792ff 0%, #acffeb 100%);
        margin: 0 -40px;
    }
}
</style>