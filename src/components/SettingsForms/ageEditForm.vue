<template>
    <div class="age-form settings-form">
        <div class="settings-form__heading">Возраст</div>
        <div class="settings-form__body">
            <form @submit.prevent="handleAgeSubmit" class="settings-form__form">
                <edit-form-input
                    v-model="age"
                    name="age"
                    label="Ваш возраст:"
                    type="number"
                    placeholder="Введите возраст"
                    :submitted="submitted"
                    class="settings-form__item"
                    min="1"
                    max="100"
                    :required="true"
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
            age: this.$store.state.user.user.age,
            submitted: false
        }
    },
    methods: {
        handleAgeSubmit() {
            this.submitted = true;
            const property = { age: this.age }
            this.$store.dispatch('user/userPropertyEdit', property);
        }
    },
}
</script>

<style lang="scss" scoped>
.age-form {
}
</style>