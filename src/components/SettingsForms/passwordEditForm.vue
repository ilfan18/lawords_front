<template>
    <div class="password-form settings-form">
        <div class="settings-form__heading">Пароль</div>
        <div class="settings-form__body">
            <form @submit.prevent="handlePasswordSubmit" class="settings-form__form">
                <div class="settings-form__item">
                    <label for="new_password">Новый пароль:</label>
                    <input v-model="new_password" type="password" id="new_password" />
                </div>
                <div class="settings-form__item">
                    <label for="re_new_password">Повторите новый пароль:</label>
                    <input v-model="re_new_password" type="password" id="re_new_password" />
                </div>
                <div class="settings-form__item">
                    <label for="current_password">Текущий пароль:</label>
                    <input v-model="current_password" type="password" id="current_password" />
                </div>
                <button class="settings-form__button">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'password-edit-form',
    data() {
        return {
            new_password: '',
            re_new_password: '',
            current_password: ''
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