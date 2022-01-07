<template>
    <ul class="notifications-list">
        <notifications-list-item
            v-for="(notification, index) in notifications"
            :key="index"
            :notification="notification"
        />
    </ul>
</template>

<script>
import NotificationsListItem from './NotificationsListItem.vue'
export default {
    components: { NotificationsListItem },
    name: 'notifications-list',
    props: {
        notifications: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.notifications-list {
    display: flex;
}
</style>