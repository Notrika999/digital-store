// stores/sidebarStore.js
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isHovered: false,
  }),
  actions: {
    setHovered(value) {
      this.isHovered = value;
    },
  },
});
