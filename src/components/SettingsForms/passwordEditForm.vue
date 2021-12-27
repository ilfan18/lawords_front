<template>
    <div class="password-form settings-form">
        <div class="settings-form__heading">Пароль</div>
        <div class="settings-form__body">
            <form @submit.prevent="handlePasswordSubmit" class="settings-form__form">
                <edit-form-input
                    v-model="newPassword"
                    name="new_password"
                    label="Новый пароль:"
                    type="password"
                    placeholder="Введите пароль"
                    :submitted="submitted"
                    class="settings-form__item"
                    :errors="newPasswordErrors"
                    :required="true"
                />
                <edit-form-input
                    v-model="reNewPassword"
                    name="re_new_password"
                    label="Новый пароль еще раз:"
                    type="password"
                    placeholder="Введите пароль"
                    :submitted="submitted"
                    class="settings-form__item"
                    :errors="reNewPasswordErrors"
                    :required="true"
                />
                <edit-form-input
                    v-model="currentPassword"
                    name="current_password"
                    label="Текущий пароль:"
                    type="password"
                    placeholder="Введите пароль"
                    :submitted="submitted"
                    class="settings-form__item"
                    :errors="currentPasswordErrors"
                    :required="true"
                />
                <button class="settings-form__button">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import editFormInput from './SettingsFormsComponents/editFormInput.vue';
export default {
    components: { editFormInput },
    name: 'password-edit-form',
    data() {
        return {
            newPassword: '',
            reNewPassword: '',
            currentPassword: '',
            reNewPasswordErrors: [],
            submitted: false
        }
    },
    computed: {
        ...mapState({
            newPasswordErrors: state => state.alert.password_edit.new_password,
            currentPasswordErrors: state => state.alert.password_edit.current_password,
        }),
    },
    methods: {
        handlePasswordSubmit() {
            this.submitted = true;
            if (this.newPassword == this.reNewPassword) {
                const passwords = { new_password: this.newPassword, current_password: this.currentPassword }
                this.$store.dispatch('user/passwordEdit', passwords);
            } else {
                this.reNewPasswordErrors.push('Новый пароль не совпадает.')
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.password-form {
}
</style>