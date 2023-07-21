<template>
    <NuxtLayout name="auth">
        <form action="" class="py-8">
            <h1 class="text-center pb-6">Login</h1>
            <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" />
            <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" />
            <div class="text-end pb-6">   
                <a class="text-xs" href="#">Esqueceu sua senha?</a>
            </div>
            <div class="flex justify-center flex-col">
                <button class="btn w-full mb-4">Entrar</button>
                <button class="btn btn-outline border-black mb-10">
                    <Icon name="flat-color-icons:google" size="1.25rem"></Icon> 
                    <span class="text-black">Entrar com Google</span>
                </button>
                <p class="text-sm text-center">Ainda não possui uma conta? <a href="#" class="font-semibold">Cadastrar</a></p>
            </div>
        </form>
    </NuxtLayout>
</template>