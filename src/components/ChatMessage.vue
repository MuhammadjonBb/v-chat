<script setup>
import { computed } from 'vue';

const { user, author, msg, date, isNextReceived } = defineProps({
    user: Object,
    msg: String,
    author: Number,
    date: String,
    isNextReceived: Boolean
})

const cuttedTime = computed(() => date.slice(11, 16))
</script>

<template>
    <div class="chat__message message" :class="{ 'message--received': author === user.id }">
        <img :src="user.avatar" alt="" v-if="author === user.id && !isNextReceived" class="message__avatar">
        <div class="message__body">
            <h4 class="message__name" v-if="author === user.id">{{ user.name }}</h4>
            <div class="message__text">{{ msg }}</div>
            <span class="message__time">{{ cuttedTime }}</span>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.message {
    display: flex;
    gap: 20px;
    position: relative;

    &__body {
        position: relative;
        padding: 15px 55px 15px 15px;
        display: flex;
        max-width: 70%;
        margin: 0 0 0 auto;
        margin-top: 15px;
        flex-direction: column;
        background-color: $dark-purple;
        border: 1px solid rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        border-radius: 30px 30px 2px 30px;
    }

    &__avatar {
        position: absolute;
        object-fit: cover;
        z-index: 2;
        width: 50px;
        height: 50px;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        align-self: end;
    }

    &__name {
        margin: 0 0 5px 0;
        color: #fff;
        font-weight: 600;
    }

    &__text {
        color: $secondary-text-color;
        font-weight: 500;
        line-height: 28px;
    }

    &__time {
        position: absolute;
        bottom: 15px;
        right: 15px;
        color: $secondary-text-color;
        font-size: 12px;
        font-weight: 500;
    }
}

.message.message--received .message__body {
    margin: 5px auto 5px 70px;
    background-color: $secondary-color;
    border-radius: 30px 30px 30px 2px;
}

.message.message--received .message__text {
    color: $primary-text-color;
}

.message.message--received .message__time {
    color: $primary-text-color;
}

@media screen and (max-width: 1280px) {
    .message {
        &__text {
            font-size: 14px;
            line-height: 24px;
        }

        &__body {
            margin-top: 10px;
        }

        &__name {
            display: none;
        }
    }

}

@media screen and (max-width: 580px) {
    .message {
        gap: 10px;
        position: relative;

        &__text {
            font-size: 13px;
            line-height: 22px;
        }

        &__time {
            right: 10px;
            bottom: 10px;
        }

        &__body {
            padding: 10px 55px 10px 15px;
        }

        &__avatar {
            display: none;
        }


    }

    .message.message--received .message__body {
        margin: 10px auto 10px 0;
    }
}
</style>