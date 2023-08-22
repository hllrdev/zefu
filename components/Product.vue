<script setup>
    const runtimeConfig = useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;

    const props = defineProps({
        title: { type: String, required: true },
        link: { type: String, required: true },
        photo: {type: String, required: true}
    })
</script>


<template>
    <div class="flex justify-center mb-4 md:mb-0">
        <div class="relative h-80 w-60 overflow-hidden">
            <NuxtLink :to="props.link" target="_blank" no-prefetch>
                <img class="h-full w-full object-cover rounded-t-lg hover:scale-110 duration-300" :src="`${API_URL}/static${props.photo}`" alt="Image product">
                <div class="h-1/3 w-full absolute bottom-0 z-10 bg-neutral-800 opacity-90 p-4 flex">
                    <p class="text-white font-bold opacity-100 text-sm">{{ props.title }}</p>
                    <div class="flex items-end">
                        <Icon class="w-6 h-auto" name="cil:arrow-right" color="white" />
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>