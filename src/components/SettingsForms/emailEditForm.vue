<template>
    <div class="email-form settings-form">
        <div class="settings-form__heading">Почта</div>
        <div class="settings-form__body">
            <form @submit.prevent="handleEmailSubmit" class="settings-form__form">
                <edit-form-input
                    v-model="email"
                    name="email"
                    label="Ваша почта:"
                    type="email"
                    placeholder="Введите логин"
                    :submitted="submitted"
                    :errors="emailError"
                    class="settings-form__item"
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
    name: 'username-edit-form',
    data() {
        return {
            email: this.$store.state.user.user.email,
            submitted: false
        }
    },
    computed: {
        ...mapState({
            emailError: state => state.alert.email_edit,
        })

    },
    methods: {
        handleEmailSubmit() {
            this.submitted = true;
            this.$store.dispatch('user/emailEdit', this.email);
        }
    },
}
</script>

<style lang="scss" scoped>
.email-form {
}
</style>