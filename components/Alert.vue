<template>
    <div :class="appStore.alert.type" class="alert fixed flex left-0 right-0 mx-auto w-11/12 md:w-2/5 duration-300">
        <Icon :name="appStore.alert.icon" size="2rem" />
        <span>{{ appStore.alert.message }}</span>
    </div>
</template>

<script setup>    

    import { useAppStore } from "~/store/appStore";

    const appStore = useAppStore();

    onUpdated(() => {
        setTimeout(() => {
            appStore.alert.show = false;
            appStore.alert.icon = "";
            appStore.alert.type = "";
            appStore.alert.message = "";
        }, 3000);
    })


</script>