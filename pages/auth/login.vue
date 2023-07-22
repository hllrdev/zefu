<template>
    <NuxtLayout name="auth">
        <div>
            <form action="" class="py-6">
                <h1 class="text-center pb-6">Login</h1>
                <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" />
                <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" />
                <div class="text-end pb-6">   
                    <a class="text-xs"><NuxtLink to="recovery">Esqueceu sua senha?</NuxtLink></a>
                </div>
                <div class="flex justify-center flex-col">
                    <button class="btn w-full mb-4">Entrar</button>
                    <button class="btn btn-outline border-black">
                        <Icon name="flat-color-icons:google" size="1.25rem"></Icon> 
                        <span class="text-black">Entrar com Google</span>
                    </button>
                </div>
            </form>
            <p class="text-sm text-center"> Ainda não possui uma conta? <a class="font-semibold"><NuxtLink to="signup">Cadastrar</NuxtLink></a></p>
        </div>
    </NuxtLayout>
</template>