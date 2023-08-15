<script setup>
import UserItem from '@/components/UserItem.vue';
import { useUsersStore } from '@/stores/users';

const store = useUsersStore();

</script>

<template>
    <div v-if="store.users">
        <UserItem v-for="user in store.users" :key="user.id" :user="user" />
    </div>
</template>