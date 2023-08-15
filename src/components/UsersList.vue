<script setup>
import UserItem from '@/components/UserItem.vue';
import { useUsersStore } from '@/stores/users';

const store = useUsersStore();

</script>

<template>
    <div class="user__list" v-if="store.users">
        <UserItem v-for="user in store.users" :key="user.id" :user="user" />
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