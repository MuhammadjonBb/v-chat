<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { users } = defineProps({
    users: Array
})
const user = ref(users.find(user => user.id == route.params.id))

watch(() => route.params.id, () => {
    user.value = users.find(user => user.id == route.params.id)
})

function calcLastActive() {
    const lastActive = new Date(user.value.lastActive);
    const now = new Date();
    const diff = now.getTime() - lastActive.getTime();
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        return 'Сегодня';
    } else if (diffDays < 2) {
        return 'Вчера';
    } else if (diffDays < 7) {
        return `неделю назад`;
    } else {
        return `давно`;
    }
}
</script>

<template>
    <header class="chat__header header" v-if="user">
        <div class="header__user">
            <img :src="user.avatar" alt="avatar" class="header__avatar">
            <div class="header__user-info">
                <h3 class="header__name">{{ user.name }}</h3>
                <span class="header__last-active">Был(а) {{ calcLastActive() }}</span>
            </div>
        </div>

        <button class="header__btn btn">Связаться с поддержкой</button>
    </header>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.header {
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    padding: 30px;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px solid rgba($color: $primary-text-color, $alpha: 0.5);
    z-index: 2;
    background-color: rgb(35, 29, 39);

    &__user {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__avatar {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    &__user-info {
        display: flex;
        flex-direction: column;
    }

    &__name {
        margin: 0;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
    }

    &__last-active {
        font-size: 14px;
        font-weight: 500;
        color: $primary-text-color;
    }

    &__btn {
        padding: 15px 20px;
        color: #fff;
        border: 1px solid rgba($color: $golden-color, $alpha: 0.80);
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
    }
}
</style>