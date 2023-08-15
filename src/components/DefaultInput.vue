<script setup>
import { ref, defineEmits } from 'vue';

defineEmits(['onInput'])
defineProps({
    placeholder: String,
})

const value = ref('');
</script>

<template>
    <div class="input__wrapper">
        <input type="text" :placeholder="placeholder" v-model="value" @change="$emit('valuonInput', value)"
            class="input input__item">
        <button class="input__btn btn">
            <slot />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.input__wrapper {
    position: relative;
    width: 100%;
}

.input {
    width: 100%;
    padding: 20px 20% 20px 15px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);

    &__btn {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 15%;
        right: 5%;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.08);
    }
}
</style>
