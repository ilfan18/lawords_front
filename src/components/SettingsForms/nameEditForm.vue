<template>
    <div class="name-form settings-form">
        <div class="settings-form__heading">Имя</div>
        <div class="settings-form__body">
            <form @submit.prevent="handleNameSubmit" class="settings-form__form">
                <div class="settings-form__item">
                    <label for="first_name">Имя:</label>
                    <input v-model="firstName" type="text" id="first_name" />
                </div>
                <div class="settings-form__item">
                    <label for="last_name">Фамилия:</label>
                    <input v-model="lastName" type="text" id="last_name" />
                </div>
                <button class="settings-form__button">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name-edit-form',
    data() {
        return {
            firstName: this.$store.state.user.profile.user.first_name,
            lastName: this.$store.state.user.profile.user.last_name
        }
    },
    methods: {
        handleNameSubmit() {
            console.log('дада');
        }
    }
}
</script>

<style lang="scss">
.name-form {
}
</style>