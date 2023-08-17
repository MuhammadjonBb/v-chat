<script setup>
const { user } = defineProps({
    user: Object
})

function cutDate(date) {
    return date.slice(11, 16)
}
</script>

<template>
    <div class="user-item__wrapper" :class="{ 'active': $route.params.id == user.id }">
        <div class="user-item__avatar-wrap">
            <img :src="user.avatar" alt="Avatar" class="user-item__img">
        </div>
        <div class="user-item__info">
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
        padding-top: 20px;
        padding: 20px 30px 0 30px;
        align-items: flex-start;
        gap: 20px;
        transition: background-color 0.3s ease;
    }

    &__img {
        width: 75px;
        height: 75px;
        border-radius: 15px;
        object-fit: cover;
    }

    &__avatar-wrap {
        width: 75px;
        height: 75px;
        display: flex;
    }

    &__info {
        display: flex;
        flex-direction: column;
        width: 100%;
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
        top: 15%;
        right: 5%;
        font-size: 14px;
        font-weight: 500;
        color: rgba($color: $primary-text-color, $alpha: 0.7);
        margin: 0;
    }

    &__message {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-width: 90%;
        overflow: hidden;
        font-size: 14px;
        height: 48px;
        font-weight: 500;
        color: rgba($color: $primary-text-color, $alpha: 0.7);
        margin: 0;
        line-height: 24px;
    }

    &__border {
        display: block;
        margin-top: 20px;
        border-bottom: 1px solid rgba($color: $primary-text-color, $alpha: 0.2);
        height: 1px;
        width: 100%;
    }
}

.user-item__wrapper:hover {
    background-color: $dark-purple;
    cursor: pointer;
}

.user-item__wrapper.active {
    background-color: $dark-purple;
}

@media screen and (max-width: 1280px) {
    .user-item {

        &__wrapper {
            padding: 20px 20px 0 20px;
        }

        &__name {
            font-size: 14px;
        }

        &__message {
            font-size: 12px;
            line-height: 20px;
            height: 40px;
        }

        &__last-message {
            font-size: 12px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .user-item {
        &__wrapper {
            padding: 10px 15px 0 15px;
        }

        &__img {
            width: 55px;
            height: 55px;
        }

        &__message {
            height: auto;
        }

        &__avatar-wrap {
            width: 55px;
            height: 55px;
        }
    }

}
</style>