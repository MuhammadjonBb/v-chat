<script setup>
import ChatMessage from '@/components/ChatMessage.vue';
import { useUsersStore } from '@/stores/users';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ChatForm from './ChatForm.vue';

const route = useRoute();
const store = useUsersStore();

const user = computed(() => store.users.find(user => user.id == route.params.id));
</script>

<template>
    <div class="chat__wrapper" v-if="route.params.id">
        <div class="chat__window">
            <ChatMessage v-for=" (msg, index) in user.chat" :key="index" :msg="msg.message" :user="user"
                :author="msg.user_id" :date="msg.date" :isNextReceived="user.chat[index + 1]?.user_id === msg.user_id" />
        </div>
        <ChatForm class="chat__form" />
    </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.chat {
    &__wrapper {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    &__window {
        overflow: auto;
        padding: 30px;
    }

    &__form {
        padding: 30px;
        border-top: 1px solid $primary-text-color;
    }
}

@media screen and (max-width: 1280px) {
    .chat__window {
        padding: 20px;
    }

    .chat__form {
        padding: 20px;
    }

}
</style>