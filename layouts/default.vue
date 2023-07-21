<template>
    <div>
        <Alert v-show="appStore.alert.show" />
        <Navbar />
         <slot />
        <Footer />
    </div>
</template>

<script setup>
    import { useAppStore } from "~/store/appStore";

    const appStore = useAppStore();
</script>