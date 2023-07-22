<template>
    <div>
        <NuxtLayout name="initial">
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center pb-6">Produtos</h1>
                <div class="flex justify-center">
                    <div class="md:w-4/5">
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                            <ProductsProduct v-for="product, i in products" :key="i" />
                        </div>
                        <div v-show="loading" class="text-center pt-8">
                            <span class="loading loading-spinner loading-md"></span>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>

    onMounted(()=>{
        if(process.client){
            window.addEventListener("scroll", handleScroll);
        }
    })

    const products = ref([1,2,3,4,5,6]);

    const loading = ref(false);
    
    function handleScroll() {
        const limitScroll = document.body.offsetHeight - window.innerHeight;
        const currentScrollPosition = window.scrollY;

        if(limitScroll == currentScrollPosition){
            loading.value = true;
            setTimeout(function(){
                products.value.push(...[7,8,9])
                loading.value = false;
            }, 3000)
        }
            
    }

</script>