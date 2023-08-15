<script setup>
import SearchPanel from '@/components/SearchPanel.vue';
import UsersList from '@/components/UsersList.vue';

</script>

<template>
  <main class="main">
    <div class="users">
      <div class="users__search-wrap">
        <SearchPanel class="users__input" />
      </div>
      <UsersList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.main {
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 5%;
  background-color: $primary-color;
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

  &__search-wrap {
    padding: 30px;
    width: 100%;
  }
}

.users::-webkit-scrollbar {
  width: 3px;
}

.users::-webkit-scrollbar-thumb {
  background-color: rgba(125, 119, 129, 0.3);
  border-radius: 2px;
}

.users::-webkit-scrollbar-thumb:hover {
  background-color: #555;
  /* Set the color of the thumb on hover */
}
</style>
