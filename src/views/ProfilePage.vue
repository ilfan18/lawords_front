<template>
    <div class="profile content">
        <v-header>Мой профиль</v-header>
        <div class="profile__cover"></div>
        <div class="profile__content">
            <div class="profile__card">
                <profile-card :user="user" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
import ProfileCard from '@/components/ProfileCard.vue'
export default {
    components: { VHeader, ProfileCard },
    computed: {
        ...mapState({
            user: (state) => state.user.user,
        })
    }
}
</script>

<style lang="scss" scoped>
.profile {
    &__content {
    }
    &__card {
        margin-top: -110px;
    }
    &__cover {
        height: 170px;
        background: linear-gradient(91.18deg, #6792ff 0%, #acffeb 100%);
        margin: 0 -40px;
    }
}
</style>