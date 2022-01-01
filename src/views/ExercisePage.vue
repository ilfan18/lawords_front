<template>
    <div class="exercise"></div>
</template>

<script>
export default {
    watch: {
        $route(to, from) {
            this.$store.dispatch('ui/hideRightPanel');
        }
    },
    beforeMount() {
        this.$store.dispatch('ui/showRightPanel')
        this.$store.dispatch('ui/showRightPanelExerciseInfo')
    },
}
</script>

<style>
</style>