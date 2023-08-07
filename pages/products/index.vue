<script setup>
    import { useAuthStore } from '~/store/authStore';

    const scrollControl = ref(0);
    onMounted(()=>{
        if(process.client){
            window.addEventListener("scroll", handleScroll);
        }
    })

    const products = ref([1,2,3,4,5,6]);
    const loading = ref(false);

    function handleScroll() {
        var element = document.body;
        if(window.innerHeight + window.scrollY >= element.clientHeight - 20){
            const time = Date.now();
            if((time > scrollControl.value + 1000 )|| (scrollControl.value == 0)){
                scrollControl.value = time
                loading.value = true;
                    setTimeout(function(){
                        products.value.push(...[7,8,9])
                        loading.value = false;
                    }, 3000)
            }  
        }
    }

    const authStore = useAuthStore();

</script>

<template>
    <NuxtLayout name="main">
        <template #content>
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center pb-6">Produtos</h1>
                <div class="flex justify-center">
                    <div class="md:w-4/5">
                        <ClientOnly>
                            <div v-if="authStore.hasPermission(['ADMIN','MANAGER'])" class="flex justify-end md:pr-6 pb-6">
                                <NuxtLink to="/products/list">
                                    <span class="btn hover:text-primary text-white">Gerenciar
                                        <Icon class="w-6 h-auto" name="material-symbols:app-registration" color="white"></Icon>
                                    </span>
                                </NuxtLink>
                            </div>
                        </ClientOnly>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                            <ProductsProduct v-for="product, i in products" :key="i" />
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