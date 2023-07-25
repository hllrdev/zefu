<template>
    <div>
        <footer class="footer footer-center p-10 bg-neutral-900 text-neutral-400">
            <div class="grid grid-flow-col gap-4">
                <RouterLink to="/"><span class="link link-hover">Início</span></RouterLink>
                <RouterLink to="/products/all"><span class="link link-hover">Produtos</span></RouterLink>
                <RouterLink to="/calculator"><span class="link link-hover">Calculadora</span></RouterLink>
            </div> 
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/perna.vermelha/" target="_blank"><Icon name="mdi:instagram" size="2rem"/></a>
                    <a href="https://chat.whatsapp.com/IKsrJ3xScsnApKY4eqQpeE" target="_blank"><Icon name="ic:baseline-whatsapp" size="2rem"/></a>
                </div>
            </div> 
            <div>
                <p>Desenvolvido com <Icon class="mb-1" name="ph:heart-fill" color="red" size="1.5rem"></Icon> por <strong>Héuller</strong></p>
            </div>
        </footer>
    </div>
</template>