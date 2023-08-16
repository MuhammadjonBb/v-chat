<script setup>
import UserItem from '@/components/UserItem.vue';
import { useUsersStore } from '@/stores/users';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();
const store = useUsersStore();

function openChatWindow(id) {
    if (!route.params.id || id != route.params.id) {
        return router.push({ name: 'chat', params: { id } });
    }
    router.push({ name: 'home' });
}
</script>

<template>
    <div class="user__list" v-if="store.users">
        <UserItem v-for="user in store.users" :key="user.id" :user="user" @click="openChatWindow(user.id)" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.user {
    &__list {
        border-top: 1px solid rgba($color: $primary-text-color, $alpha: 0.2);
        display: flex;
        flex-direction: column;
    }
}
</style>