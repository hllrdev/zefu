<script setup>
    import { useAuthStore } from '~/store/authStore';

    const runtimeConfig = useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;

    // const scrollControl = ref(0);
    const {data:products} = await useFetch(`${API_URL}/products`);
    const loading = ref(false);

    // onMounted(()=>{
    //     if(process.client){
    //         window.addEventListener("scroll", handleScroll);
    //     }
    // })

    // function handleScroll() {
    //     var element = document.body;
    //     if(window.innerHeight + window.scrollY >= element.clientHeight - 20){
    //         const time = Date.now();
    //         if((time > scrollControl.value + 1000 )|| (scrollControl.value == 0)){
    //             scrollControl.value = time
    //             loading.value = true;
    //                 setTimeout(function(){
    //                     products.value.push(...[7,8,9])
    //                     loading.value = false;
    //                 }, 3000)
    //         }  
    //     }
    // }

    const authStore = useAuthStore();
</script>

<template>
    <NuxtLayout name="main">
        <template #content>
            <div class="pt-24 px-4 pb-10 bg-neutral-50">
                <h1 class="text-center pb-10 text-black">Produtos</h1>
                <div class="flex justify-center">
                    <div class="md:w-4/5">
                        <div v-if="authStore.hasPermission(['ADMIN','MANAGER'])" class="flex justify-end md:pr-6 pb-6">
                            <NuxtLink to="/products/list" no-prefetch>
                                <span class="btn hover:text-primary text-white">Gerenciar
                                    <Icon class="w-6 h-auto" name="material-symbols:app-registration" color="white"></Icon>
                                </span>
                            </NuxtLink>
                        </div>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
                            <Product v-for="product in products" :key="product.id" :link="product.link" :photo="product.photo" :title="product.title" />
                        </div>
                        <div v-show="loading" class="text-center pt-8">
                            <span class="loading loading-spinner loading-md"></span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>