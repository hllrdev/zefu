<template>
    <div id="products" class="bg-blue-200 md:flex md:justify-center">
        <div class="md:w-11/12 lg:w-4/5 py-10 px-4 md:px-0">
            <h2 class="text-white text-center pb-6">Produtos</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <ProductsProduct />
                <ProductsProduct />
                <ProductsProduct />
            </div>
            <div class="flex justify-center">
                <RouterLink to="/products">
                    <button class="btn bg-neutral-800 my-6 md:mt-10 btn-wide">Ver todos <Icon name="cil:arrow-right" color="white"/></button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

    #products {
        min-height: 50vh;
    }

</style>