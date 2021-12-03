<template>
    <div class="profile-card">
        <div class="profile-card__image">
            <img :src="profile.image" alt="Ваш аватар" />
        </div>
        <div class="profile-card__content">
            <div class="profile-card__name">{{ displayName }}</div>
            <div class="profile-card__info-item profile-card__email">
                <div class="profile-card__info-item-title">
                    <vue-feather size="24" type="mail" :stroke="stroke" />
                    <span>email</span>
                </div>
                <div class="profile-card__info-item-content">{{ profile.user.email }}</div>
            </div>
            <div class="profile-card__info-item profile-card__nick">
                <div class="profile-card__info-item-title">nickname</div>
                <div class="profile-card__info-item-content">{{ profile.user.username }}</div>
            </div>
            <!-- <div class="profile-card__info-item">
            <div class="profile-card__info-item-title"></div>
            <div class="profile-card__password"></div>
            </div>-->
            <a
                href="profile-edit/"
                class="profile-card__button"
                :class="theme"
            >Редактировать профиль</a>
        </div>
    </div>
</template>

<script>
import VueFeather from 'vue-feather';
export default {
    name: 'profile-card',
    components: { VueFeather },
    props: {
        profile: {
            type: Object,
            required: true,
        }
    },
    computed: {
        displayName() {
            if (this.profile.user.first_name) {
                return this.profile.user.first_name + ' ' + this.profile.user.last_name
            } else {
                return this.profile.user.username
            }

        },
        theme() {
            return this.$store.state.ui.theme;
        },
        stroke() {
            return this.$store.state.ui.theme == 'light' ? '#2E2E2E' : '#B8B8B8';
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
    &__image {
        max-height: 145px;
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
    &__info-item-content {
    }
    .vue-feather {
        position: absolute;
        left: 0;
        top: -3px;
    }
    &__email {
        .profile-card__info-item-title {
            padding-left: 35px;
        }
    }

    &__nick {
    }

    &__password {
    }

    &__button {
        display: inline-block;
        padding: 20px 35px;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        text-decoration: none;
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