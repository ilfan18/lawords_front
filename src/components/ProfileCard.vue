<template>
    <div v-if="!isProfileLoading" class="profile-card">
        <div class="profile-card__header">
            <div class="profile-card__image">
                <image-loader
                    :src="user.image"
                    alt="Ваш аватар"
                    width="340px"
                    height="145px"
                    radius="0px"
                />
            </div>
            <image-uploader-btn />
        </div>
        <div class="profile-card__content">
            <div class="profile-card__name">{{ displayName }}</div>
            <div class="profile-card__info-item">
                <div class="profile-card__info-item-title">Возраст</div>
                <div class="profile-card__info-item-content">{{ user.age }}</div>
            </div>
            <div class="profile-card__info-item">
                <div class="profile-card__info-item-title">Уровень</div>
                <div class="profile-card__info-item-content">{{ user.level }}</div>
            </div>
            <button
                @click.prevent="editProfile"
                class="profile-card__button"
                :class="theme"
                title="Перейти в настройки"
            >Редактировать профиль</button>
        </div>
    </div>
    <profile-card-skeleton v-else />
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import router from '@/router';
import ProfileCardSkeleton from '@/components/Loaders/ProfileCardSkeleton.vue';
export default {
    components: { ProfileCardSkeleton },
    name: 'profile-card',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState({
            isProfileLoading: state => state.user.isProfileLoading,
        }),
        displayName() {
            if (this.user.first_name) {
                return this.user.first_name + ' ' + this.user.last_name
            } else {
                return this.user.username
            }

        },
        theme() {
            return this.$store.state.ui.theme;
        },
        stroke() {
            return this.$store.state.ui.theme == 'light' ? '#2E2E2E' : '#B8B8B8';
        }

    },
    methods: {
        editProfile() {
            router.push('/settings');
        }
    }
}
</script>

<style lang="scss" scoped>
.profile-card {
    background: var(--background-primary);
    box-shadow: 0px 11px 40px rgba(130, 130, 130, 0.1);
    border-radius: 15px;
    overflow: hidden;
    width: 340px;
    &__header {
        position: relative;
        .image-uploader-btn {
            right: 25px;
        }
    }
    &__image {
        max-height: 190px;
        font-size: 0;
        overflow: hidden;

        img {
            width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }

    &__content {
        padding: 30px;
    }

    &__name {
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        margin-bottom: 30px;
    }

    &__info-item {
        display: flex;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 30px;
        position: relative;
    }

    &__info-item-title {
        font-weight: 600;
        font-size: 14px;
        color: var(--text-third);
        line-height: 17px;
        width: 80px;
        margin-right: 23px;
        text-transform: uppercase;
    }

    &__button {
        padding: 20px 35px;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        border: none;
        cursor: pointer;
        &.light {
            background: linear-gradient(
                92.51deg,
                #262626 0.36%,
                #1b1651 98.43%
            );
        }
        &.dark {
            background: #fc8451;
        }
    }
}
</style>