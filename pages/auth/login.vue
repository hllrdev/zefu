<template>
    <div>
        <NuxtLayout name="auth">
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6">Login</h1>
                    <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" />
                    <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" />
                    <div class="text-end pb-6">   
                        <NuxtLink to="recovery"><span class="text-sm">Esqueceu sua senha?</span></NuxtLink>
                    </div>
                    <div class="flex justify-center flex-col">
                        <button class="btn w-full mb-4">Entrar</button>
                        <button class="btn btn-outline border-black">
                            <Icon name="flat-color-icons:google" size="1.25rem"></Icon> 
                            <span class="text-black">Entrar com Google</span>
                        </button>
                    </div>
                </form>
                <p class="text-sm text-center"> Ainda não possui uma conta? <NuxtLink to="signup"><span class="font-semibold ml-2">Cadastrar</span></NuxtLink></p>
            </div>
        </NuxtLayout>
    </div>
</template>