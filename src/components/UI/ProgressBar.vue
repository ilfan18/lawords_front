<template>
    <div class="progress">
        <progress id="progress" :value="percentCompleted" max="100">32%</progress>
    </div>
</template>

<script>
export default {
    name: 'progress-bar',
    props: {
        percentCompleted: 0
    }
}
</script>

<style lang="scss" scoped>
.progress {
    progress {
        width: 100%;
        height: 8px;
        appearance: none;
        border-radius: 20px;
        &[value]::-webkit-progress-bar {
            background: #f1f1f1;
            border-radius: 20px;
        }
        &[value]::-webkit-progress-value {
            background: #fc8451;
            border-radius: 20px;
        }
    }
}
</style>