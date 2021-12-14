<template>
    <div class="settings content">
        <v-header>Настройки</v-header>
        <div v-if="!isProfileLoading" class="settings__body">
            <name-edit-form />
        </div>
        <settings-page-loader v-else />
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
import NameEditForm from '@/components/SettingsForms/NameEditForm.vue'
import SettingsPageLoader from '../components/Loaders/SettingsPageLoader.vue'
export default {
    components: { VHeader, NameEditForm, SettingsPageLoader },
    computed: {
        ...mapState({
            isProfileLoading: state => state.user.isProfileLoading,
        }),
    }
}
</script>

<style lang="scss" scoped>
.settings {
    display: flex;
    flex-direction: column;
}
</style>
<style lang="scss">
.settings-form {
    border: 1px solid var(--settings-form-border);
    border-radius: 10px;
    background: var(--background-primary);
    overflow: hidden;
    &__heading {
        border-bottom: 1px solid var(--settings-form-border);
        background: var(--settings-form-background-secandary);
        padding: 12px 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }

    &__body {
        padding: 12px;
    }

    &__form {
    }

    &__item {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &:last-of-type {
            margin-bottom: 25px;
        }
        label {
            width: 150px;
        }
        input {
            padding: 12px 40px 12px 17px;
            background: var(--settings-form-background-secandary);
            border: 1px solid var(--settings-form-border);
            border-radius: 8px;
            outline: none;
            font-size: 15px;
            line-height: 22px;
            letter-spacing: 0.323577px;
            color: #4b506d;
            &:focus,
            &:active,
            &:focus-visible {
                border: 1px solid #b0b1b3;
            }
            &.is-invalid {
                border: 1px solid #f05555;
            }
        }
    }

    &__button {
        cursor: pointer;
        background: var(--background-primary);
        border: 1px solid var(--settings-form-border);
        border-radius: 10px;
        padding: 10px 30px;
        margin-left: 150px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        &:hover {
            background: var(--settings-form-background-secandary);
        }
    }
}
</style>