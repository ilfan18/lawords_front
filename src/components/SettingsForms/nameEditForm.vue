<template>
    <div class="name-form">
        <div class="name-form__heading">Имя</div>
        <div class="name-form__body">
            <form @submit.prevent="handleNameSubmit" class="name-form__form">
                <div class="name-form__item">
                    <label for="first_name">Имя</label>
                    <input v-model="firstName" type="text" id="first_name" />
                </div>
                <div class="name-form__item">
                    <label for="last_name">Фамилия</label>
                    <input v-model="lastName" type="text" id="last_name" />
                </div>
                <button class="name-form__button">Сохранить</button>
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
    // !Похоже вся эта лабуда временная, до того как я сделаю loader
    methods: {
        handleNameSubmit() {
            console.log('дада');
        }
    }
}
</script>

<style lang="scss" scoped>
</style>