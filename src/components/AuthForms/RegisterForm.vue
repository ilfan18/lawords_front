<template>
    <div class="form">
        <div class="form__title">Создайте новый аккаунт</div>
        <div class="form__subtitle">Введите ваши данные ниже</div>
        <form @submit.prevent="handleRegisterSubmit" class="form__form">
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
                v-model="email"
                name="email"
                label="Почта"
                type="email"
                placeholder="Введите почту"
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
            <form-button :submitting="regestering">Войти</form-button>
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
            email: '',
            username: '',
            password: '',
            submitted: false
        }
    },
    methods: {
        handleRegisterSubmit(e) {
            this.submitted = true;
            const { email, username, password } = this;
            const { dispatch } = this.$store;
            if (email && username && password) {
                dispatch('auth/register', { email, username, password });
            }
        }
    },
    computed: {
        regestering() {
            return this.$store.state.auth.regestering ? true : null;
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
</style>