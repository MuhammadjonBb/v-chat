<script setup>
import DefaultInput from '@/components/DefaultInput.vue';

</script>

<template>
    <DefaultInput placeholder="Поиск...">
        <span class="users__input-btn-icon">F</span>
    </DefaultInput>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.users__input-btn-icon {
    color: $golden-color;
}
</style>
