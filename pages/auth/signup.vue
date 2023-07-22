<template>
    <NuxtLayout name="auth">
        <div>
            <form action="" class="py-6">
                <h1 class="text-center pb-6">Cadastro</h1>
                <Input name="name" type="text" label="Nome completo" placeholder="Digite aqui seu nome" />
                <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" />
                <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" />
                <Input name="confirmPassword" type="password" label="Confirmar senha" placeholder="Digite a senha novamente" class="mb-6" />
                <button class="btn w-full">Cadastrar</button>
            </form>
            <p class="text-sm text-center">Já possui uma conta?<a class="font-semibold ml-2"><NuxtLink to="login">Entrar</NuxtLink></a></p>
        </div>
    </NuxtLayout>
</template>