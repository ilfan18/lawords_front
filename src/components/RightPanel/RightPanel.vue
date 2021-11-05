<template>
    <div class="right-panel"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.right-panel {
    flex: 0 0 370px;
    background: #ffffff;
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ededed;
        border-radius: 10px;
    }
}
</style>