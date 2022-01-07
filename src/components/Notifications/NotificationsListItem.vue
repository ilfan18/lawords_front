<template>
    <li class="notifications-list-item">
        <div class="notifications-list-item__left">
            <div class="notifications-list-item__icon">
                <image-loader
                    :src="notification.icon"
                    alt="Уведомление"
                    title="notification.title"
                    width="35px"
                    height="35px"
                />
            </div>
        </div>
        <div class="notifications-list-item__right">
            <h3 class="notifications-list-item__title">{{ notification.title }}</h3>
            <div class="notifications-list-item__text">{{ notification.text }}</div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'notifications-list-item',
    props: {
        notification: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.notifications-list-item {
    flex: 0 0 355px;
    display: flex;
    padding: 14px;
    background: var(--background-primary);
    border-radius: 15px;
    margin-right: 20px;
    &:last-of-type {
        margin-right: 0;
    }
    &__left {
        flex: 0 0 55px;
        margin-right: 13px;
    }

    &__icon {
        width: 55px;
        height: 55px;
        padding: 10px;
        border-radius: 10px;
    }

    &__right {
        flex: 1 1 100%;
    }

    &__title {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 8px;
    }

    &__text {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>