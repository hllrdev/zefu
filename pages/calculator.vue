<template>
    <div>
        <NuxtLayout name="initial">
            <div class="pt-24 px-4 pb-10">
                <Alert class="top-16" v-show="appStore.alert.show" />
                <h1 class="text-center">Calculadora</h1>
                <h2 class="text-center font-semibold uppercase text-sm pb-6">
                    macros, taxa metabólica basal (tmb) e gasto energético total (get)
                </h2>
                <div class="flex justify-center">
                    <div class="md:w-4/5 lg:w-3/5">
                        <h3>Para calcular a TMB e o GET preencha os campos a seguir.</h3>
                        <form action="" class="py-4">
                            <Input name="age" type="number" label="Qual a sua idade?" placeholder="Digite aqui sua idade" v-model="age" @update:model-value="age = $event" class="pb-2" />
                            <Input name="height" type="number" label="Qual a sua altura? (cm)" placeholder="Digite aqui sua altura" v-model="height" @update:model-value="height = $event" class="pb-2" />
                            <Input id="weight" name="weight" type="number" label="Qual o seu peso?" placeholder="Digite aqui seu peso" v-model="weight" @update:model-value="weight = $event" class="pb-2"/>
                            <div class="md:max-w-xs">
                                <label class="label">
                                    <span class="label-text text-neutral-600">Qual o seu sexo?</span>
                                </label>
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-base-200">Feminino</span> 
                                        <input type="radio" class="radio checked:bg-base-200 border-neutral-600" value="FEMALE" v-model="sex" />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-base-200">Masculino</span> 
                                        <input type="radio" class="radio checked:bg-base-200 border-neutral-600" value="MALE" v-model="sex"/>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div v-show="results">
                            <h2 class="text-center">Taxa metabólica basal (TMB)</h2>
                            <p class="text-center py-4 text-lg"><span class="text-8xl font-bold">{{ tmb }}</span>kcal</p>
                            <p class="text-neutral-500 text-justify">A taxa metabólica basal corresponde ao quanto de calorias
                                você gasta apenas em repouso, sem contabilizar nenhuma atividade do seu dia.
                            </p>
                            <h2 class="text-center py-4">Gasto energético total (GET)</h2>
                            <p class="text-neutral-500 pb-4 text-justify">O gasto energético total corresponde ao quanto de calorias
                                você gasta somando a TMB + seu nível de atividade. Os níveis de atividade são apenas estimativas,
                                sendo que a mensuração do esforço realizado é subjetivo.
                            </p>
                            <!-- table -->
                            <div class="overflow-x-auto">
                                <table class="table">
                                    <thead>
                                        <tr class="text-neutral-900">
                                            <th></th>
                                            <th>Nível de atividade</th>
                                            <th>Calorias</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Sedentário</td>
                                            <td><span>{{ Math.round(tmb * 1.15) }}</span> kcal</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>Moderado</td>
                                            <td><span>{{ Math.round(tmb * 1.3) }}</span> kcal</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>Alto</td>
                                            <td><span>{{ Math.round(tmb * 1.5) }}</span> kcal</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <h2 class="text-center py-4">Sugestão de macronutrientes</h2>
                        <p class="text-neutral-500 pb-4 text-justify">A sugestão de macros possui valores conservadores para
                            um início de dieta, conforme progressão deve-se atualizar a quantidade em especial 
                            dos carboidratos. Ela leva em conta apenas o peso do indivíduo e seu objetivo. Dessa forma,
                            você pode realizar a comparação com os valores indicados pela TMB e GET e ajustar caso ache
                            necessário.
                        </p>
                        <h3 class="pb-2 font-semibold">Qual seu objetivo atualmente?</h3>
                        <div class="flex flex-wrap justify-center gap-2 pt-4 pb-8">
                            <input v-model="goal" class="btn w-full md:btn-wide" type="radio" value="cutting" aria-label="Perder gordura"/>
                            <input v-model="goal" class="btn w-full md:btn-wide" type="radio" value="maintenance" aria-label="Recomposição corporal/Manutenção" />
                            <input v-model="goal" class="btn w-full md:btn-wide" type="radio" value="bulking" aria-label="Ganhar massa" />
                        </div>
                        <div v-show="macros">
                            <h4 class="text-sm font-semibold pb-2">Carboidratos - {{ carbs }}g/kg ({{ Math.round(weight * carbs) }} g)</h4>
                            <input type="range" min="0" max="8" step="0.5" v-model="carbs" class="range range-warning" />
                            <h4 class="text-sm font-semibold pb-2">Gordura - {{ fat }}g/kg ({{ Math.round(weight * fat) }} g)</h4>
                            <input type="range" min="0" max="8" step="0.1" v-model="fat" class="range range-accent" />
                            <h4 class="text-sm font-semibold pb-2">Proteína - {{ protein }}g/kg ({{ Math.round(weight * protein) }} g)</h4>
                            <input type="range" min="0" max="8" step="0.25" v-model="protein" class="range range-error" />
                            <p class="text-center py-4 text-lg"><span class="text-8xl font-bold">{{ recommendedKcal }}</span>kcal</p>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

    definePageMeta({
        middleware: 'auth'
    })

    import { useAppStore } from "~/store/appStore";

    const appStore = useAppStore();

    const age = ref();
    const height = ref();
    const weight = ref();
    const sex = ref("");

    const results = ref(false);

    const tmb = computed(() => {
        if(age.value && height.value && weight.value && sex.value){
            results.value = true;
            if(sex.value == "MALE")
                return Math.round(88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value));
            return Math.round(447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.33 * age.value));
        }
        return 0;
    });

    const goal = ref("");
    const macros = computed(() => {
        if(weight.value && goal.value)
            return true;
        return false;
    });

    watch(goal, () => {
        if(!weight.value){
            appStore.alert.type = "alert-warning";
            appStore.alert.message = "Preencha o seu peso para receber a sugestão.";
            appStore.alert.icon = "material-symbols:warning";
            appStore.alert.show = true;
        }

        fat.value = 0.7;
        protein.value = 1.8;

        if(goal.value == "cutting")
            carbs.value = 3;
        else if (goal.value == "bulking")
            carbs.value = 4;
        else //maintenance
            carbs.value = 3.5;
    })

    const carbs = ref(0);
    const fat = ref(0);
    const protein = ref(0);

    const recommendedKcal = computed(() => {
        return Math.round((carbs.value * 4 * weight.value) + (protein.value * 4 * weight.value) + (fat.value * 9 * weight.value))
    });

</script>

<style scoped>
    tbody tr td span {
        font-weight: 700;
    }
</style>