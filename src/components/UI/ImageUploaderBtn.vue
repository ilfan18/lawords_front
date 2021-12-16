<template>
    <div class="image-uploader-btn">
        <button @click.prevent="showUploadImageModal">
            <vue-feather type="edit" size="24" stroke="#000000" />
        </button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: 'image-uploader-btn',
    data() {
        return {
            isUploadImageModalVisible: false
        }
    },
    methods: {
        ...mapActions({
            showUploadImageModal: 'ui/showUploadImageModal'
        }),
    },
}
</script>

<style lang="scss" scoped>
.image-uploader-btn {
    position: absolute;
    top: 100%;
    transform: translateY(-50%);
    button {
        cursor: pointer;
        border: none;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        width: 62px;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>