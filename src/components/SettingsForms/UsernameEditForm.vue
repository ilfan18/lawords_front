<template>
    <div class="username-form settings-form">
        <div class="settings-form__heading">Логин</div>
        <div class="settings-form__body">
            <form @submit.prevent="handleUsernameSubmit" class="settings-form__form">
                <edit-form-input
                    v-model="username"
                    name="username"
                    label="Ваш логин:"
                    type="text"
                    placeholder="Введите логин"
                    :submitted="submitted"
                    class="settings-form__item"
                />
                <button class="settings-form__button">Сохранить</button>
            </form>
        </div>
    </div>
</template>
<script>
import editFormInput from './SettingsFormsComponents/editFormInput.vue';
export default {
    components: { editFormInput },
    name: 'username-edit-form',
    data() {
        return {
            username: this.$store.state.user.user.username,
            submitted: false
        }
    },
    methods: {
        handleUsernameSubmit() {
            this.submitted = true;
            this.$store.dispatch('user/usernameEdit', this.username);
        }
    },
}
</script>

<style lang="scss">
.name-form {
}
</style>