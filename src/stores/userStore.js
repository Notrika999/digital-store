// src/stores/userStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'کاربر نمونه',
    email: 'user@example.com',
    avatar: '../../../public/images/user/avater.jpg',
  });

  const updateUser = (newUser) => {
    user.value = { ...user.value, ...newUser };
  };

  return { user, updateUser };
});
