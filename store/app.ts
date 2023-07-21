import { defineStore } from "pinia";


export const useAppStore = defineStore('appStore', () => {

    const alert = ref(false);

    return { alert }

});