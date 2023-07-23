<template>
    <ul class="text-white md:text-xs font-semibold pt-8 md:pt-0">
        <li v-for="item, i in items" :key="i">
            <NuxtLink :to="item.to">{{ item.route }}</NuxtLink>
        </li>
        <li class="md:hidden mt-4">
            <NuxtLink to="auth/login"> 
                <button class="btn btn-secondary btn-wide">Entrar</button>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>

    const items = [
        {
            "route": "Início",
            "to": "/"
        },
        {
            "route": "Produtos",
            "to": "/products"
        },
        {
            "route": "Calculadora",
            "to": "/calculator"
        }
    ]

</script>

<style scoped>
    li {
        @apply hover:text-primary
    }
</style>