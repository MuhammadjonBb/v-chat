<script setup>
import DefaultInput from '@/components/DefaultInput.vue';
import { useUsersStore } from '@/stores/users';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const store = useUsersStore();
const route = useRoute();
const inputValue = ref('');

function onSubmit() {
    if (!inputValue.value) { return }
    const chat = store.users.find(user => user.id == route.params.id);
    console.log(chat.chat);
    chat.chat.push({
        message: inputValue.value,
        user_id: 1,
        date: convertDateFormat(new Date())
    })

    inputValue.value = '';
}

function convertDateFormat(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <DefaultInput @onBtnClick="onSubmit" v-model="inputValue" placeholder="Напишите сообщение ...">
            <button class="input-btn btn" type="submit">
                <span class="input-btn-icon"> &uarr;</span>
            </button>
        </DefaultInput>
    </form>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.input-btn-icon {
    color: $golden-color;
    font-size: 32px;
    font-weight: 300;
}
</style>