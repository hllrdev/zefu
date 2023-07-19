<template>
    <ul class="text-white md:text-xs font-semibold pt-8 md:pt-0">
        <li><RouterLink to="/products">Produtos</RouterLink></li>
        <li><RouterLink to="/macros">Macros</RouterLink></li>
        <li class="md:hidden flex items-center mt-4"><Button class="btn-wide" content="Entrar" /></li>
    </ul>
</template>

<script setup>

</script>

<style scoped>
    li {
        @apply hover:text-primary
    }
</style>