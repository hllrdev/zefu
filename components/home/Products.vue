<script setup>
    const runtimeConfig = useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const {data:products} = await useFetch( `${API_URL}/products/main`);
</script>

<template>
    <div id="products" class="bg-secondary md:flex md:justify-center">
        <div class="md:w-11/12 lg:w-4/5 py-10 px-4 md:px-0 grid">
            <h2 class="text-white text-center pb-6 md:pb-10">Produtos</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <Product v-for="product in products" :key="product.id" :link="product.link" :photo="product.photo" :title="product.title"/>
            </div>
            <div class="flex flex-grow justify-center items-end">
                <NuxtLink to="/products">
                    <span class="btn my-6 md:mt-10 btn-wide">
                        Ver todos 
                        <Icon class="w-4 h-auto" name="cil:arrow-right" color="white"/>
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

    #products {
        min-height: 50vh;
    }

</style>