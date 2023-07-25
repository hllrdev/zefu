<template>
    <div class="p-4 md:min-h-screen">
        <Alert class="top-4" v-show="appStore.alert.show" />
        <IconLogo />
        <div class="flex justify-center">
            <div class="md:w-9/12 lg:w-4/12">
                <div class="flex flex-col">
                    <div class="h-full md:flex items-center justify-center">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { useAppStore } from "~/store/appStore";
    const appStore = useAppStore();

</script>