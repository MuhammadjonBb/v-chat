<script setup>
import SearchPanel from '@/components/SearchPanel.vue';
import UsersList from '@/components/UsersList.vue';

</script>

<template>
  <main class="main">
    <div class="users">
      <SearchPanel />
      <UsersList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
