<template>
    <button type="submit" class="form-button">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.form-button {
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 16px 25px 13px;
    background: #262626;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.215718px;
    color: #ffffff;
}
</style>