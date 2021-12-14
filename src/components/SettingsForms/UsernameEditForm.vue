<template>
    <div class="username-form settings-form">
        <div class="settings-form__heading">Логин</div>
        <div class="settings-form__body">
            <form @submit.prevent="handleUsernameSubmit" class="settings-form__form">
                <div class="settings-form__item">
                    <label for="username">Ваш логин:</label>
                    <input v-model="username" type="text" id="username" />
                </div>
                <button class="settings-form__button">Сохранить</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'username-edit-form',
    data() {
        return {
            username: this.$store.state.user.user.username,
        }
    },
    methods: {
        handleUsernameSubmit() {
            this.$store.dispatch('user/usernameEdit', this.username);
        }
    },
}
</script>

<style lang="scss">
.name-form {
}
</style>