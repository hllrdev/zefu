<template>
    <div :class="appStore.alert.type" class="alert absolute flex top-16 left-0 right-0 mx-auto w-11/12 md:w-2/5 duration-300">
        <Icon :name="appStore.alert.icon" size="2rem" />
        <span>{{ appStore.alert.message }}</span>
    </div>
</template>

<script setup>    

    import { useAppStore } from "~/store/appStore";

    const appStore = useAppStore();

    onUpdated(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setTimeout(() => {
            appStore.alert.show = false;
            appStore.alert.icon = "";
            appStore.alert.type = "";
            appStore.alert.message = "";
        }, 3000);
    })


</script>