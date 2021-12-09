<template>
    <div class="settings content">
        <v-header>Настройки</v-header>
        <div class="settings__body">
            <name-edit-form />
        </div>
    </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue'
import NameEditForm from '@/components/SettingsForms/nameEditForm.vue'
export default {
    components: { VHeader, NameEditForm },
}
</script>

<style lang="scss" scoped>
</style>