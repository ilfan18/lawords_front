<template>
    <div class="courses-list">
        <div v-for="index in 3" :key="index" class="courses-item">
            <div class="courses-item__header">
                <div class="courses-item__left">
                    <h2 class="courses-item__title">
                        <skeleton-loader width="100px" height="24px" />
                    </h2>
                    <h3 class="courses-item__name">
                        <skeleton-loader width="150px" height="24px" />
                    </h3>
                </div>
                <div class="courses-item__right">
                    <div class="courses-item__icon">
                        <skeleton-loader width="48px" height="48px" radius="10px" />
                    </div>
                </div>
            </div>
            <div class="courses-item__progress">
                <div class="courses-item__progress-bar">
                    <skeleton-loader width="200px" height="6px" radius="10px" />
                </div>
                <div class="courses-item__fraction">
                    <skeleton-loader width="38px" height="17px" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'courses-list'
}
</script>

<style lang="scss" scoped>
.courses-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: -13px -15px 0;
    padding-bottom: 17px;
    max-height: 420px;
    overflow-x: auto;
}
.courses-item {
    background: var(--background-primary);
    border-radius: 20px;
    padding: 25px 30px;
    flex: 1 1 355px;
    margin: 13px 15px;
    position: relative;
    border: 1px solid rgba(58, 58, 58, 0);
    &.dark {
        border: 1px solid rgba(58, 58, 58, 1);
    }
    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    &__title {
        margin-bottom: 5px;
    }

    &__icon {
        width: 48px;
        height: 48px;
    }

    &__fraction {
        text-align: right;
    }

    &__progress {
        display: flex;
        justify-content: space-between;
    }
}
</style>