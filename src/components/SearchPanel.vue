<script setup>
import DefaultInput from '@/components/DefaultInput.vue';

</script>

<template>
    <DefaultInput placeholder="Поиск...">
        <button class="input-btn btn" @click="$emit('onBtnClick')">
            <span class="users__input-btn-icon">F</span>
        </button>
    </DefaultInput>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.users__input-btn-icon {
    color: $golden-color;
}
</style>
