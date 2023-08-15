<script setup>
import SearchPanel from '@/components/SearchPanel.vue';
import UsersList from '@/components/UsersList.vue';

</script>

<template>
  <main class="main">
    <div class="users">
      <SearchPanel class="users__input">
      </SearchPanel>
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
  padding: 30px;
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
  background-color: rgba($color: #fff, $alpha: 0.07);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.1);
  border: 1px solid rgba($color: #fff, $alpha: 0.1);
  backdrop-filter: blur(10px);


  &__input {
    padding-bottom: 30px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba($color: $primary-text-color, $alpha: 0.2);
  }
}
</style>
