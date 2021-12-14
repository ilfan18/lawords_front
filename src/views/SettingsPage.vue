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