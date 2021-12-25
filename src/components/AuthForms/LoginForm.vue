<template>
    <div class="form">
        <div class="form__title">
            Войдите в
            <span class="red">la</span>
            <span>words</span>
            <span class="red">.</span>
        </div>
        <div class="form__subtitle">Введите вашу почту и пароль ниже</div>
        <form @submit.prevent="handleLoginSubmit" class="form__form">
            <div v-if="alert.message" :class="`alert ${alert.type}`">{{ alert.message }}</div>
            <form-item
                v-model="username"
                name="username"
                label="Логин"
                type="text"
                placeholder="Введите имя пользователя"
                style="margin-bottom: 26px;"
                :submitted="submitted"
            />
            <form-item
                v-model="password"
                name="password"
                label="Пароль"
                type="password"
                placeholder="Введите пароль"
                style="margin-bottom: 26px;"
                :submitted="submitted"
            />
            <form-button :submitting="logingIn">Войти</form-button>
        </form>
        <div class="register">
            или
            <br />
            <router-link to="/register">Зарегистрироваться</router-link>
        </div>
    </div>
</template>

<script>
import FormButton from './FormButton.vue'
import FormItem from './FormItem.vue'
export default {
    name: 'login-form',
    components: { FormButton, FormItem },
    data() {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        logingIn() {
            return this.$store.state.auth.loggingIn ? true : null;
        },
        alert() {
            return this.$store.state.alert
        }
    },
    watch: {
        $route(to, from) {
            // clear alert on location change
            this.$store.dispatch('alert/clear');
        }
    },
    created() {
        // Снять статус аутентифицированного
        this.$store.dispatch('auth/logout');
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
    .register {
        margin-top: 5px;
        color: #9fa2b4;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.323577px;
        a {
            text-decoration: none;
            font: inherit;
            color: #3751ff;
        }
    }
    .alert {
        color: #f05555;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.323577px;
        margin-bottom: 10px;
    }
}
</style>