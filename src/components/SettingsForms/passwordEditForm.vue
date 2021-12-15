<template>
    <div class="password-form settings-form">
        <div class="settings-form__heading">Пароль</div>
        <div class="settings-form__body">
            <form @submit.prevent="handlePasswordSubmit" class="settings-form__form">
                <edit-form-input
                    v-model="new_password"
                    name="new_password"
                    label="Новый пароль:"
                    type="password"
                    placeholder="Введите пароль"
                    :submitted="submitted"
                    class="settings-form__item"
                />
                <edit-form-input
                    v-model="re_new_password"
                    name="re_new_password"
                    label="Новый пароль еще раз:"
                    type="password"
                    placeholder="Введите пароль"
                    :submitted="submitted"
                    class="settings-form__item"
                />
                <edit-form-input
                    v-model="current_password"
                    name="current_password"
                    label="Текущий пароль:"
                    type="password"
                    placeholder="Введите пароль"
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
    name: 'password-edit-form',
    data() {
        return {
            new_password: '',
            re_new_password: '',
            current_password: '',
            submitted: false
        }
    },
    methods: {
        handlePasswordSubmit() {
            if (this.new_password == this.re_new_password) {
                const passwords = { new_password: this.new_password, current_password: this.current_password }
                this.$store.dispatch('user/passwordEdit', passwords);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.password-form {
}
</style>