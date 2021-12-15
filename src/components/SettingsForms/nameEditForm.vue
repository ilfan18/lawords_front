<template>
    <div class="name-form settings-form">
        <div class="settings-form__heading">Имя</div>
        <div class="settings-form__body">
            <form @submit.prevent="handleNameSubmit" class="settings-form__form">
                <edit-form-input
                    v-model="firstName"
                    name="first_name"
                    label="Имя:"
                    type="text"
                    placeholder="Введите имя"
                    :submitted="submitted"
                    class="settings-form__item"
                />
                <edit-form-input
                    v-model="lastName"
                    name="last_name"
                    label="Фамилия:"
                    type="text"
                    placeholder="Введите фамилию"
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
    name: 'name-edit-form',
    data() {
        return {
            firstName: this.$store.state.user.user.first_name,
            lastName: this.$store.state.user.user.last_name,
            submitted: false
        }
    },
    methods: {
        handleNameSubmit() {
            this.submitted = true;
            this.$store.dispatch('user/nameEdit', this.firstName);
        }
    },
}
</script>

<style lang="scss">
.name-form {
}
</style>