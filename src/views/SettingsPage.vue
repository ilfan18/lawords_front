<template>
    <div class="settings content">
        <v-header>Настройки</v-header>
        <div v-if="!isUserLoading" class="settings__body">
            <email-edit-form />
            <username-edit-form />
            <password-edit-form />
            <name-edit-form />
            <age-edit-form />
        </div>
        <page-loader v-else />
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
import PageLoader from '@/components/Loaders/PageLoader.vue'
import NameEditForm from '@/components/SettingsForms/NameEditForm.vue'
import UsernameEditForm from '@/components/SettingsForms/UsernameEditForm.vue'
import PasswordEditForm from '@/components/SettingsForms/PasswordEditForm.vue'
import EmailEditForm from '@/components/SettingsForms/EmailEditForm.vue'
import AgeEditForm from '@/components/SettingsForms/AgeEditForm.vue'
export default {
    components: {
        VHeader,
        NameEditForm,
        UsernameEditForm,
        PasswordEditForm,
        EmailEditForm,
        AgeEditForm,
        PageLoader,
    },
    computed: {
        ...mapState({
            isUserLoading: state => state.user.isUserLoading,
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
    border: 1px solid var(--border-first);
    border-radius: 10px;
    background: var(--background-primary);
    overflow: hidden;
    margin-bottom: 30px;
    &__heading {
        border-bottom: 1px solid var(--border-first);
        background: var(--background-third);
        padding: 12px 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }

    &__body {
        padding: 12px;
    }

    &__item {
        margin-bottom: 10px;
        &:last-of-type {
            margin-bottom: 25px;
        }
    }

    &__button {
        cursor: pointer;
        background: var(--background-primary);
        border: 1px solid var(--border-first);
        border-radius: 10px;
        padding: 10px 30px;
        margin-left: 120px;
        color: inherit;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        &:hover {
            background: var(--background-third);
        }
    }
}
</style>