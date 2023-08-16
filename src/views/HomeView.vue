<script setup>
import UsersList from '@/components/UsersSide.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import ChatHeader from '@/components/ChatHeader.vue';
import { useUsersStore } from '@/stores/users';

const store = useUsersStore();
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="users">
        <UsersList />
      </div>
      <div class="chat">
        <ChatHeader v-if="store" :users="store.users" />
        <ChatWindow v-if="store" :users="store.users" />
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
  align-items: center;
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
  background-color: rgba($color: #fff, $alpha: 0.07);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);
}
</style>
