<script setup>    
    import { useAppStore } from "~/store/appStore";
    const appStore = useAppStore();

    const interval = ref(0);
    const progress = ref(0);

    const closeAlert = () => {
        clearInterval(interval.value);
        appStore.setAlert(false, '', '');
        progress.value = 0;
    }

    watch((appStore.alert), () => {
        if(appStore.alert.show){
            interval.value = setInterval(() => {
                if(progress.value < 100)
                    progress.value += 1;
                else{    
                    clearInterval(interval.value);
                    progress.value = 0;
                    appStore.setAlert(false, '', '');
                }
            }, 50)
        }
    })
</script>

<template>
    <div class="flex justify-center" v-show="appStore.alert.show">
        <div class="fixed bottom-4 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5">
            <div class="alert rounded-md" 
                :class="appStore.alert.type == 'success'? 'alert-success':
                    appStore.alert.type == 'warning'? 'alert-warning': 
                    appStore.alert.type == 'info'? 'alert-info': 
                    appStore.alert.type == 'error'? 'alert-error': ''" >
                <div class="absolute top-2 right-4" @click="closeAlert">
                    <Icon class="w-4 h-auto cursor-pointer" color="white" name="material-symbols:close" />
                </div>
                <Icon class="w-8 h-auto" :name="appStore.alert.icon" />
                <span>{{ appStore.alert.message }}</span>
                <progress class="progress absolute bottom-1 left-0" :value="progress" max="100"></progress>
            </div>
        </div>
    </div>
</template>