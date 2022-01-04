<template>
    <div class="progress">
        <progress id="progress" :value="percentCompleted" max="100">{{ percentCompleted }}%</progress>
    </div>
</template>

<script>
export default {
    name: 'exercise-progress-bar',
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
        height: 14px;
        appearance: none;
        transition: all 0.2s linear;
        &[value]::-webkit-progress-bar {
            background: #ffffff;
            border-radius: 20px;
        }
        &[value]::-webkit-progress-value {
            background: #ffea7b;
            border-radius: 20px;
        }
    }
}
</style>