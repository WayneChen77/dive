import { defineStore } from 'pinia';
// import axios from 'axios';

export default defineStore('StatusStore', {
  state: () => ({
    isLoading: false,
    itemLoad: '',
    messages: [],
  }),
  actions: {
    pushMessage() {
      this.messages.push({ style: 'success', title: '已更新資料', content: '內容' });
    },
  },
});
