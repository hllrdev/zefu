<template>
    <div class="pt-24 px-4 pb-10">
        <h1 class="text-center">Cálculo macronutrientes</h1>
        <div class="flex justify-center">
            <div class="md:w-4/5 lg:w-3/5">
                <form action="" class="py-6">
                    <Input name="age" type="number" label="Qual a sua idade?" placeholder="Digite aqui" v-model="age" :value="age" @update:model-value="age = $event" />
                    <Input name="height" type="number" label="Qual a sua altura? (cm)" placeholder="Digite aqui" v-model="height" @update:model-value="height = $event" />
                    <Input name="weight" type="number" label="Qual o seu peso?" placeholder="Digite aqui" v-model="weight" @update:model-value="weight = $event"/>
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
                <h2 class="text-center">Taxa metabólica basal (TMB)</h2>
                <p class="text-center py-4 text-lg"><span class="text-8xl font-bold">{{ tmb }}</span>kcal</p>
                <p class="text-neutral-500">A taxa metabólica basal corresponde ao quanto de calorias
                    você gasta apenas em repouso, sem contabilizar nenhuma atividade do seu dia.
                </p>
                <h2 class="text-center py-4">Gasto energético total (GET)</h2>
                <p class="text-neutral-500 pb-4">O gasto energético total corresponde ao quanto de calorias
                    você gasta somando a TMB + seu nível de atividade. Os níveis de atividade são apenas estimativas,
                    sendo que o esforço realizado é relativo, a tabela abaixo é somente para se ter uma ideia.
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
                <h2 class="text-center py-4">Sugestão de macronutrientes</h2>
                <h3 class="pb-2">Qual seu objetivo atualmente?</h3>
                <div class="flex flex-wrap justify-center gap-2 py-4">
                    <input v-model="goal" class="btn w-full md:btn-wide" type="radio" value="cutting" aria-label="Perder gordura"/>
                    <input v-model="goal" class="btn w-full md:btn-wide" type="radio" value="manutence" aria-label="Recomposição corporal/Manutenção" />
                    <input v-model="goal" class="btn w-full md:btn-wide" type="radio" value="bulking" aria-label="Ganhar massa" />
                </div>
                <div v-show="macros">
                    <h4 class="text-sm font-semibold pb-2">Carboidratos - {{ carbs }}g/kg ({{ weight * carbs}} g)</h4>
                    <input type="range" min="0" max="8" step="0.5" v-model="carbs" class="range range-warning" />
                    <h4 class="text-sm font-semibold pb-2">Gordura - {{ fat }}g/kg ({{ weight * fat}} g)</h4>
                    <input type="range" min="0" max="8" step="0.1" v-model="fat" class="range range-accent" />
                    <h4 class="text-sm font-semibold pb-2">Proteína - {{ protein }}g/kg ({{ weight * protein }} g)</h4>
                    <input type="range" min="0" max="8" step="0.25" v-model="protein" class="range range-error" />
                </div>
                <!-- <Alert alert="alert-warning" icon="material-symbols:warning"  message="Preencha o peso para ver a sugestão" /> -->
                ALERT {{ valor }}
            </div>
        </div>
    </div>
</template>

<script setup>

    import { useAppStore } from "~/store/app";
    import { storeToRefs } from "pinia";

    const appStore = useAppStore();
    const valor = appStore.alert;

    const age = ref();
    const height = ref();
    const weight = ref();

    const sex = ref("");

    const tmb = computed(() => {
        
        if(age.value && height.value && weight.value && sex.value){

            if(sex.value == "MALE")
                return Math.round(88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value));
            
            return Math.round(447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.33 * age.value));

        }
        
        return 0;
    });

    const goal = ref("");
    const macros = ref(false);

    watch(goal, () => {
        if(!weight.value)
            alert("preencha") //ALERT AQUI
        else
            macros.value = true
    })

    const carbs = ref("3");
    const fat = ref("0.6");
    const protein = ref("2");

</script>

<style scoped>

    tbody tr td span {
        font-weight: 700;
    }

</style>