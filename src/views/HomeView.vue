<script setup>
import UsersList from '@/components/UsersSide.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import ChatHeader from '@/components/ChatHeader.vue';
import { useUsersStore } from '@/stores/users';
import { ref, onMounted, onUnmounted } from 'vue';

const store = useUsersStore();
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="users" v-if="!$route.params.id || screenWidth > 1025">
        <UsersList />
        <div v-if="!store.users.length" class="chat-empty chat-empty--users">
          <p class="chat-empty__text">Тут пусто </p>
          <p class="chat-empty__text--small">Вы еще никому не писали</p>
        </div>
      </div>
      <div class="chat" v-if="$route.params.id || screenWidth > 1025">
        <ChatHeader v-if="store && $route.params.id" :users="store.users" />
        <ChatWindow v-if="store && $route.params.id" :users="store.users" />
        <div class="chat-empty" v-else>
          <img class="chat-empty__img" src="@/assets/img/mail.svg" alt="">
          <p class="chat-empty__text">Чат не выбран</p>
          <p class="chat-empty__text--small">Выберите чат, начните общение!</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.main {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: $primary-color;
}

.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5%;
  gap: 60px;
}

.users {
  display: flex;
  width: 40%;
  flex-direction: column;
  overflow: auto;
  background-color: rgba($color: #fff, $alpha: 0.07);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);
  border: 1px solid rgba($color: #fff, $alpha: 0.1);
  backdrop-filter: blur(10px);
}

.users::-webkit-scrollbar,
.chat__window::-webkit-scrollbar {
  width: 3px;
}

.users::-webkit-scrollbar-thumb,
.chat__window::-webkit-scrollbar-thumb {
  background-color: rgba(125, 119, 129, 0.3);
  border-radius: 2px;
}

.users::-webkit-scrollbar-thumb:hover,
.chat__window::-webkit-scrollbar-thumb:hover {
  background-color: #555;
  /* Set the color of the thumb on hover */
}

.chat {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #fff, $alpha: 0.07);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);

  &-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-empty__img {
    width: 120px;
    height: 90px;
    margin-bottom: 60px;
  }

  &-empty__text {
    margin: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  &-empty__text--small {
    margin: 0;
    color: $primary-text-color;
    font-weight: 500;
  }

  &-empty--users {
    padding: 30px;
    justify-content: start;
    align-items: flex-start;
  }
}

@media screen and (max-width: 1280px) {
  .wrapper {
    gap: 20px;
  }

  @media screen and (max-width: 1024px) {
    .wrapper {
      justify-content: center;
    }

    .chat {
      width: 100%;
    }

    .users {
      width: 100%;
    }
  }
}

@media screen and (max-width: 580px) {
  .wrapper {
    padding: 0;
    border-radius: 0;
  }

  .users {
    border-radius: 0;
  }
}
</style>
