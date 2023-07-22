<template>
    <div>
        <NuxtLayout name="auth">
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6">Recuperar senha</h1>
                    <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" class="mb-6" />
                    <button class="btn w-full">Recuperar</button>
                </form>
                <p class="text-sm text-center">Lembrou a senha? <NuxtLink to="login"><span class="font-semibold ml-2">Entrar</span></NuxtLink></p>
            </div>
        </NuxtLayout>
    </div>
</template>