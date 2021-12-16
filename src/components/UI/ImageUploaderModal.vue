<template>
    <div class="image-uploader-modal">
        <div class="image-uploader-modal__content">
            <button @click.prevent="hideUploadImageModal" class="image-uploader-modal__close">
                <vue-feather type="x" size="24" stroke="#000000" />
            </button>
            <div class="image-uploader-modal__title">Загрузите изображение</div>
            <div class="image-uploader-modal__image">
                <img src="@/assets/upload_background.png" alt />
            </div>
            <form action class="image-uploader-modal__form">
                <input
                    @input="onImageInput"
                    type="file"
                    id="image"
                    name="image"
                    accept=".png, .jpg, .jpeg"
                />
                <div class="image-uploader-modal__file-name">{{ imageFileName }}</div>
                <label class="image-uploader-modal__choose" for="image">Обзор</label>
                <div class="image-uploader-modal__or">или перетащите файл сюда.</div>
                <!-- <button class="image-uploader-modal__submit">Загрузить</button> -->
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: 'image-uploader-modal',
    data() {
        return {
            imageFileName: ''
        }
    },
    methods: {
        ...mapActions({
            hideUploadImageModal: 'ui/hideUploadImageModal',
            imageEdit: 'user/imageEdit'
        }),
        onImageInput(event) {
            this.imageFileName = event.target.value
            this.imageEdit(event.target.files[0])
            this.hideUploadImageModal()
        }
    },
}
</script>

<style lang="scss" scoped>
.image-uploader-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
    &__content {
        width: 50%;
        min-height: 300px;
        background: var(--background-primary);
        border-radius: 10px;
        position: relative;
        padding: 28px;
    }

    &__close {
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    &__title {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
    }

    &__image {
        display: flex;
        justify-content: center;
        img {
            width: 350px;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        input[type="file"] {
            display: none;
        }
    }

    &__file-name {
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
    }

    &__choose {
        display: inline-block;
        padding: 10px 20px;
        background: #fc8451;
        border-radius: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        cursor: pointer;
    }
    &__or {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: var(--text-second);
    }
    &__submit {
    }
}
</style>