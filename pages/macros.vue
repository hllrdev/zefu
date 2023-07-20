<template>
    <div class="pt-24 px-4 pb-10">
        <h1 class="text-center">Cálculo macronutrientes</h1>
        <div class="flex justify-center">
            <div class="md:w-4/5 lg:w-3/5 md:flex flex-col">
                <form action="" class="py-6">
                    <Input name="age" type="number" label="Qual a sua idade?" placeholder="Digite aqui" />
                    <Input name="height" type="number" label="Qual a sua altura? (cm)" placeholder="Digite aqui" />
                    <Input name="weight" type="number" label="Qual o seu peso?" placeholder="Digite aqui" />
                </form>
                <h2 class="text-center">Taxa metabólica basal (TMB)</h2>
                <p class="text-center py-4 text-lg"><span class="text-8xl font-bold">1678</span>kcal</p>
                <p class="text-neutral-500">A taxa metabólica basal corresponde ao quanto de calorias
                    você gasta apenas em repouso, sem contabilizar nenhuma atividade do seu dia.
                </p>
            </div>
        </div>
    </div>
</template>