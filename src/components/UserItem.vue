<script setup>
const { user } = defineProps({
    user: Object
})

function cutDate(date) {
    return date.slice(11, 16)
}
</script>

<template>
    <div class="user-item__wrapper">
        <img :src="user.image" alt="img" class="user-item__img">
        <div>
            <h3 class="user-item__name">{{ user.name }}</h3>
            <span class="user-item__last-message">{{ cutDate(user.chat[user.chat.length - 1].date) }}</span>
            <p class="user-item__message">{{ user.chat[user.chat.length - 1].message }}</p>
            <span class="user-item__border"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.user-item {
    &__wrapper {
        position: relative;
        display: flex;
        margin-bottom: 20px;
        align-items: flex-start;
        gap: 20px;
    }

    &__img {
        width: 75px;
        height: 75px;
        border-radius: 15px;
    }

    &__name {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin: 0;
        margin-bottom: 5px;
    }

    &__last-message {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        font-weight: 500;
        color: rgba($color: $primary-text-color, $alpha: 0.7);
        margin: 0;
    }

    &__message {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 14px;
        font-weight: 500;
        color: rgba($color: $primary-text-color, $alpha: 0.7);
        margin: 0;
    }

    &__border {
        display: block;
        margin-top: 30px;
        border-bottom: 1px solid rgba($color: $primary-text-color, $alpha: 0.2);
        height: 1px;
        width: 100%;
    }
}
</style>