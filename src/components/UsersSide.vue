<script setup>
import DefaultInput from '@/components/DefaultInput.vue';
import UserItem from '@/components/UserItem.vue';
import { useUsersStore } from '@/stores/users';
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();
const store = useUsersStore();
const searchInput = ref('');

const filteredUsers = computed(() => store.users.filter(user => user.name.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())));

function openChatWindow(id) {
    if (!route.params.id || id != route.params.id) {
        return router.push({ name: 'chat', params: { id } });
    }
    router.push({ name: 'home' });
}
</script>

<template>
    <div class="users__search-wrap">
        <DefaultInput placeholder="Поиск..." v-model="searchInput">
            <button class="input-btn btn" @click="$emit('onBtnClick')">
                <span class="users__input-btn-icon">F</span>
            </button>
        </DefaultInput>
    </div>
    <div class="users__list" v-if="store.users">
        <UserItem v-for="user in filteredUsers" :key="user.id" :user="user" @click="openChatWindow(user.id)" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.users {
    &__list {
        border-top: 1px solid rgba($color: $primary-text-color, $alpha: 0.2);
        display: flex;
        flex-direction: column;
    }


    &__search-wrap {
        position: sticky;
        top: 0;
        padding: 30px;
        width: 100%;
        z-index: 2;
        background-color: rgb(35, 29, 39);
    }


    &__input-btn-icon {
        color: $golden-color;
    }
}

@media screen and (max-width: 1024px) {
    .users__search-wrap {
        padding: 20px;
    }

}
</style>