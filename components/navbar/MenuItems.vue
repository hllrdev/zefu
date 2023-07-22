<template>
    <ul class="text-white md:text-xs font-semibold pt-8 md:pt-0">
        <li v-for="item, i in items" :key="i" @click="closeDrawer()">
            <RouterLink :to="item.to">{{ item.route }}</RouterLink>
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
            "route": "Macros",
            "to": "/macros"
        }
    ]

    function closeDrawer() {
        window.screen.width < 768 ? document.getElementById("navbar-drawer")?.click() : null;
    }

</script>

<style scoped>
    li {
        @apply hover:text-primary
    }
</style>