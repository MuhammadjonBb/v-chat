import { ref } from 'vue'
import { defineStore } from 'pinia'
import usersData from '@/helpers/usersData.js'

export const useUsersStore = defineStore('users', () => {
  const users = ref(null)
  users.value = usersData

  return {
    users
  }
})
