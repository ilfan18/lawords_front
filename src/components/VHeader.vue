<template>
    <header class="header">
        <h1 class="header__title">
            <slot></slot>
        </h1>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    &__title {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
    }
}
</style>