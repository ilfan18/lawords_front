<template>
    <div class="progress">
        <progress id="progress" :value="percentCompleted" max="100">{{ percentCompleted }}%</progress>
    </div>
</template>

<script>
export default {
    name: 'course-progress-bar',
    props: {
        percentCompleted: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.progress {
    progress {
        width: 100%;
        height: 6px;
        appearance: none;
        transition: all 0.2s linear;
        &[value]::-webkit-progress-bar {
            background: var(--background-fifth);
            border-radius: 10px;
        }
        &[value]::-webkit-progress-value {
            background: #3bafda;
            border-radius: 10px;
        }
    }
}
</style>