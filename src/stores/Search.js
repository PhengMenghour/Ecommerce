// stores/Search.js
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    category: '',
  }),
  actions: {
    setQuery(newQuery) {
      this.query = newQuery;
    },
    setCategory(newCategory) {
      this.category = newCategory
      console.log(this.category)
    }
  },
});