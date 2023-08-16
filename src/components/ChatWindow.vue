<script setup>
import ChatMessage from '@/components/ChatMessage.vue';
import { useUsersStore } from '@/stores/users';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useUsersStore();

const user = computed(() => store.users.find(user => user.id == route.params.id));
</script>

<template>
    <div class="chat__window" v-if="route.params.id">
        <ChatMessage v-for="(msg, index) in user.chat" :key="index" :msg="msg.message" :user="user" :author="msg.user_id"
            :date="msg.date" />
    </div>
</template>

<style lang="scss">
.chat__window {
    overflow: auto;
}
</style>