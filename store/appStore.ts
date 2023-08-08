import { defineStore } from "pinia";


export const useAppStore = defineStore('appStore', () => {

    const alert = reactive({
        show: false,
        type: "",
        message: "",
        icon: ""
    });


    const setAlert = (show:boolean, type:string, message:string) => {

        alert.show = show;
        alert.type = type; //alert-info, alert-success, alert-warning, alert-error
        alert.message = message; 

        if(alert.type == 'info')
            alert.icon = 'material-symbols:info-outline';
        else if(alert.type == 'success')
            alert.icon = 'mdi:success-circle-outline'
        else if(alert.type == 'warning')
            alert.icon = 'material-symbols:warning-outline'
        else if (alert.type == 'error')
            alert.icon = 'codicon:error'
    }

    return { alert, setAlert }

});