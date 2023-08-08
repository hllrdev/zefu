<template>
    <div id="products" class="bg-secondary md:flex md:justify-center">
        <div class="md:w-11/12 lg:w-4/5 py-10 px-4 md:px-0">
            <h2 class="text-white text-center pb-6 md:pb-10">Produtos</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <Product />
                <Product />
                <Product />
            </div>
            <div class="flex justify-center">
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