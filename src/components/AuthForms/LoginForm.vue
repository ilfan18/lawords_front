<template>
    <div class="form form-register">
        <div class="form__title">
            Войдите в
            <span class="red">la</span>words
            <span class="red">.</span>
        </div>
        <div class="form__subtitle">Введите вашу почту и пароль ниже</div>
        <form @submit.prevent="handleLoginSubmit" class="form__form">
            <form-item
                v-model="username"
                name="username"
                label="Логин"
                type="text"
                placeholder="Введите имя пользователя"
                style="margin-bottom: 26px;"
                :submitted="submitted"
            ></form-item>
            <form-item
                v-model="password"
                name="password"
                label="Пароль"
                type="password"
                placeholder="Введите пароль"
                style="margin-bottom: 26px;"
                :submitted="submitted"
            ></form-item>
            <form-button :submitting="logingIn">Войти</form-button>
        </form>
    </div>
</template>

<script>
import FormButton from './FormButton.vue'
import FormItem from './FormItem.vue'
export default {
    components: { FormButton, FormItem },
    data() {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    methods: {
        handleLoginSubmit(e) {
            this.submitted = true;
            const { username, password } = this;
            const { dispatch } = this.$store;
            if (username && password) {
                dispatch('auth/login', { username, password });
            }
        }
    },
    computed: {
        logingIn() {
            return this.$store.state.auth.loggingIn ? true : null;
        }
    },
    created() {
        // Снять статус аутентифицированного
        this.$store.dispatch('auth/logout');
    },
}
</script>

<style lang="scss" scoped>
.form {
    width: 100%;
    background: #ffffff;
    border-radius: 16px;
    padding: 60px 34px 30px;
    &__title {
        font-weight: 700;
        font-size: 25px;
        line-height: 31px;
        text-align: center;
        letter-spacing: 0.323577px;
        margin-bottom: 13px;
        .red {
            font: inherit;
            color: #f05555;
        }
    }
    &__subtitle {
        font-size: 15px;
        text-align: center;
        line-height: 22px;
        margin-bottom: 40px;
    }
    &__form {
    }
}
.form-register {
}
</style>