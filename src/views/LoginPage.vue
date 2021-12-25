<template>
    <div class="login">
        <div class="login__content">
            <div class="login__left">
                <login-form />
            </div>
            <div class="login__right">
                <div class="login__title">
                    Повышайте свой уровень английского языка
                    <span class="red">вместе с нами!</span>
                </div>
                <div class="login__image">
                    <img src="@/assets/pre2.png" alt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/AuthForms/LoginForm.vue'
export default {
    components: { LoginForm },
}
</script>

<style lang="scss" scoped>
.login {
    background: var(--background-secandary);
    width: 100%;
    height: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
    &__content {
        height: 100%;
        display: flex;
        max-width: 1000px;
        margin: 0 auto;
        padding: 90px 0;
    }
    &__left {
        flex: 1 0 410px;
        margin-right: 70px;
    }

    &__right {
        padding-top: 35px;
    }

    &__title {
        max-width: 500px;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.323577px;
        .red {
            font: inherit;
            color: #f05555;
        }
    }
    &__image {
        display: flex;
        justify-content: center;
        height: 330px;
        font-size: 0;
        img {
            max-width: 100%;
        }
    }
}
</style>