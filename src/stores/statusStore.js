import { defineStore } from 'pinia';
// import axios from 'axios';

export default defineStore('StatusStore', {
  state: () => ({
    isLoading: false,
    itemLoad: '',
    messages: [],
  }),
  actions: {
    pushMessage(data) {
      const { style, title, content } = data;
      this.messages.push({ style, title, content });
    },
  },
});
