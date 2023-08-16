<script setup>
import { defineEmits } from 'vue';

defineEmits(['update:modelValue']);
defineProps({
    placeholder: String,
    modelValue: String
})

</script>

<template>
    <div class="input__wrapper">
        <input type="text" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" class="input input__item">
        <slot />
    </div>
</template>

<style lang="scss">
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
}

.input-btn {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 15%;
    right: 5%;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.08);
}

.input::placeholder {
    font-weight: 500;
}
</style>
