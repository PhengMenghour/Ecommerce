// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: (() => {
            try {
                return JSON.parse(localStorage.getItem('user')) || { name: 'Guest', profilePicture: '' };
            } catch {
                return { name: 'Guest', profilePicture: '' };
            }
        })(),
        isLoggedIn: !!localStorage.getItem('user'),
    }),
    actions: {
        setUser(userData) {
            this.user = userData || { name: 'Guest', profilePicture: '' };
            this.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(this.user));
        },
        clearUser() {
            this.user = { name: 'Guest', profilePicture: '' };
            this.isLoggedIn = false;
            localStorage.removeItem('user');
        },
        syncUserFromStorage() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                this.user = storedUser;
                this.isLoggedIn = true;
            } else {
                this.user = { name: 'Guest', profilePicture: '' };
                this.isLoggedIn = false;
            }
        },
    },
});
