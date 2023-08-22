<script setup>
    const props  = defineProps({
        authenticated: Boolean,
        name: String
    })

    const items = [
        {"route": "Início","to": "/"},
        {"route": "Produtos","to": "/products"},
        {"route": "Calculadora","to": "/calculator"}
    ]
</script>

<template>
    <ul class="text-white md:text-xs font-semibold pt-8 md:pt-0">
        <li class="md:hidden mb-4">
            <div v-show="props.authenticated">
                <p class="text-white">Olá, <span class="text-primary">{{props.name}}</span></p>
            </div>
        </li>
        <li v-for="item, i in items" :key="i">
            <NuxtLink :to="item.to" no-prefetch>{{ item.route }}</NuxtLink>
        </li>
        <li class="md:hidden mt-4">
            <div v-show="!props.authenticated">
                <NuxtLink to="/auth/signin" no-prefetch> 
                    <button class="btn btn-secondary text-neutral-50 btn-wide">Entrar</button>
                </NuxtLink>
            </div>
        </li>
    </ul>
</template>

<style scoped>
    li {
        @apply hover:text-primary
    }
</style>