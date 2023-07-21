import { defineStore } from "pinia";


export const useAppStore = defineStore('appStore', () => {

    const alert = reactive({
        show: false,
        type: "",
        message: "",
        icon: ""
    });

    return { alert }

});