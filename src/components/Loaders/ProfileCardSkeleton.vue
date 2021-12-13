<template>
    <div class="profile-card">
        <div class="profile-card__image">
            <skeleton-loader width="340px" height="145px" radius="0px" />
        </div>
        <div class="profile-card__content">
            <div class="profile-card__name">
                <skeleton-loader width="280px" height="40px" />
            </div>
            <div class="profile-card__info-item">
                <div class="profile-card__info-item-title">Возраст</div>
                <div class="profile-card__info-item-content">
                    <skeleton-loader width="20px" height="17px" />
                </div>
            </div>
            <div class="profile-card__info-item">
                <div class="profile-card__info-item-title">Уровень</div>
                <div class="profile-card__info-item-content">
                    <skeleton-loader width="60px" height="17px" />
                </div>
            </div>
            <skeleton-loader width="280px" height="59px" radius="10px" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.profile-card {
    background: var(--background-primary);
    box-shadow: 0px 11px 40px rgba(130, 130, 130, 0.1);
    border-radius: 15px;
    overflow: hidden;
    width: 340px;
    &__image {
        max-height: 145px;
        font-size: 0;
        overflow: hidden;
    }

    &__content {
        padding: 30px;
    }

    &__name {
        margin-bottom: 30px;
    }

    &__info-item {
        display: flex;
        margin-bottom: 30px;
        position: relative;
    }

    &__info-item-title {
        width: 80px;
        margin-right: 23px;
    }

    &__button {
        width: 100%;
    }
}
</style>