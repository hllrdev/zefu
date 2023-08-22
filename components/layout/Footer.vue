<template>
    <footer class="footer footer-center p-10 bg-neutral-900 text-neutral-400">
        <div class="grid grid-flow-col gap-4">
            <NuxtLink to="/" no-prefetch><span class="link link-hover">Início</span></NuxtLink>
            <NuxtLink to="/products" no-prefetch><span class="link link-hover">Produtos</span></NuxtLink>
            <NuxtLink to="/calculator" no-prefetch><span class="link link-hover">Calculadora</span></NuxtLink>
        </div> 
        <div>
            <div class="grid grid-flow-col gap-4">
                <a href="https://www.instagram.com/perna.vermelha/" target="_blank">
                    <Icon class="w-7 h-auto" name="mdi:instagram"/>
                </a>
                <a href="https://chat.whatsapp.com/IKsrJ3xScsnApKY4eqQpeE" target="_blank">
                    <Icon class="w-7 h-auto" name="ic:baseline-whatsapp"/>
                </a>        
            </div>
        </div> 
        <div>
            <p>Desenvolvido com
                <Icon class="w-5 h-auto"  name="ph:heart-fill" color="red"></Icon> 
                 por <strong>Héuller</strong>
            </p>
        </div>
    </footer>
</template>