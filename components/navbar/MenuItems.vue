<template>
    <ul class="text-white md:text-xs font-semibold pt-8 md:pt-0">
        <li class="md:hidden mb-4">
            <div v-show="props.authenticated">
                <p class="text-white">Olá, <span class="text-primary">{{props.name}}</span></p>
            </div>
        </li>
        <li v-for="item, i in items" :key="i">
            <NuxtLink :to="item.to">{{ item.route }}</NuxtLink>
        </li>
        <li class="md:hidden mt-4">
            <div v-show="!props.authenticated">
                <NuxtLink to="/auth/signin"> 
                    <button class="btn btn-secondary btn-wide">Entrar</button>
                </NuxtLink>
            </div>
        </li>
    </ul>
</template>

<script setup>

    const props  = defineProps({
        authenticated: Boolean,
        name: String
    })

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