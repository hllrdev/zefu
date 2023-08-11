<script setup>
    import { useAppStore } from "~/store/appStore";
    const appStore = useAppStore();

    const formData = reactive({ 
        age: 0,
        height: 0,
        weight: 0,
        sex: ''
    })

    const quantityMacros = reactive({
        carbs: 0,
        fat: 0,
        protein: 0
    });

    const goal = ref(null);
    const results = ref(false);

    const recommendedKcal = computed(() => {
        return Math.round((quantityMacros.carbs * 4 * formData.weight) +
         (quantityMacros.protein * 4 * formData.weight) + (quantityMacros.fat * 9 * formData.weight))
    });

    const tmb = computed(() => {
        if(formData.age && formData.height && formData.weight && formData.sex){
            results.value = true;
            if(formData.sex == "MALE")
                return Math.round(88.362 + (13.397 * formData.weight) + (4.799 * formData.height) - (5.677 * formData.age));
            return Math.round(447.593 + (9.247 * formData.weight) + (3.098 * formData.height) - (4.33 * formData.age));
        }
        return 0;
    });

    const imc = () => {
        const height = formData.height / 100;
        return formData.weight / (height * height);
    }

    const macrosCalc = () => {
        if(imc() >= 30)
            quantityMacros.protein = 1.6;
        else
            quantityMacros.protein = 2;

        quantityMacros.fat = 0.6;

        if(goal.value == "cutting")
            quantityMacros.carbs = 2.5;
        else if (goal.value == "bulking")
            quantityMacros.carbs = 3.5;
        else //maintenance
            quantityMacros.carbs = 3;
    }

    watch(goal, () => {
        
        if((!formData.weight || !formData.height || !formData.age || !formData.sex)){
            appStore.setAlert(true, 'warning', 'Preencha todos os campos para receber a sugestão.');
            return;
        }

        macrosCalc();
    })

    const macrosSuggestion = computed(() => {
        if(goal.value && formData.weight && formData.height && formData.age && formData.sex){
            macrosCalc();
            return true;
        }
        return false;
    })

</script>

<template>
    <NuxtLayout name="main">
        <template #content>
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center">Calculadora</h1>
                <h2 class="text-center font-semibold uppercase text-sm pb-6">
                    macros, taxa metabólica basal (tmb) e gasto energético total (get)
                </h2>
                <div class="flex justify-center">
                    <div class="md:w-4/5 lg:w-3/5">
                        <h3>Para calcular a TMB e o GET preencha os campos a seguir.</h3>
                        <form action="" class="py-4">
                            <Input name="age" type="number" label="Qual a sua idade?" placeholder="Digite aqui sua idade" @update:model-value="formData.age = $event" class="pb-2" />
                            <Input name="height" type="number" label="Qual a sua altura? (cm)" placeholder="Digite aqui sua altura" @update:model-value="formData.height = $event" class="pb-2" />
                            <Input id="weight" name="weight" type="number" label="Qual o seu peso?" placeholder="Digite aqui seu peso" @update:model-value="formData.weight = $event" class="pb-2"/>
                            <div class="md:max-w-xs">
                                <label class="label">
                                    <span class="label-text font-semibold">Qual o seu sexo?</span>
                                </label>
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Feminino</span> 
                                        <input type="radio" class="radio radio-primary" value="FEMALE" v-model="formData.sex" />
                                    </label>
                                </div>
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Masculino</span> 
                                        <input type="radio" class="radio radio-primary" value="MALE" v-model="formData.sex"/>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div v-show="results" class="pb-4">
                            <h2 class="text-center">Taxa metabólica basal (TMB)</h2>
                            <p class="text-center py-4 text-lg text-neutral-50"><span class="text-8xl font-bold">{{ tmb }}</span>kcal</p>
                            <p class="text-justify">A taxa metabólica basal corresponde ao quanto de calorias
                                você gasta apenas em repouso, sem contabilizar nenhuma atividade do seu dia.
                            </p>
                            <h2 class="text-center py-4 text-white">Gasto energético total (GET)</h2>
                            <p class="pb-4 text-justify">O gasto energético total corresponde ao quanto de calorias
                                você gasta somando a TMB + seu nível de atividade. Os níveis de atividade são apenas estimativas,
                                sendo que a mensuração do esforço realizado é subjetivo.
                            </p>
                            <!-- table -->
                            <div class="overflow-x-auto">
                                <table class="table">
                                    <thead>
                                        <tr class="text-neutral-50">
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
                        <p class="pb-4 text-justify">A sugestão de macros possui valores conservadores para
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
                        <div v-show="macrosSuggestion">
                            <h4 class="text-sm font-semibold pb-2">Carboidratos - {{ quantityMacros.carbs }}g/kg ({{ Math.round(formData.weight * quantityMacros.carbs) }} g)</h4>
                            <input type="range" min="0" max="8" step="0.5" v-model="quantityMacros.carbs" class="range range-warning" />
                            <h4 class="text-sm font-semibold pb-2">Gordura - {{ quantityMacros.fat }}g/kg ({{ Math.round(formData.weight * quantityMacros.fat) }} g)</h4>
                            <input type="range" min="0" max="8" step="0.1" v-model="quantityMacros.fat" class="range range-accent" />
                            <h4 class="text-sm font-semibold pb-2">Proteína - {{ quantityMacros.protein }}g/kg ({{ Math.round(formData.weight * quantityMacros.protein) }} g)</h4>
                            <input type="range" min="0" max="8" step="0.25" v-model="quantityMacros.protein" class="range range-error" />
                            <p class="text-center py-4 text-lg"><span class="text-8xl font-bold">{{ recommendedKcal }}</span>kcal</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>

<style scoped>
    tbody tr td span {
        font-weight: 700;
    }
</style>