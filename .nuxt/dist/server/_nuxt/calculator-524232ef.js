import { _ as __nuxt_component_0 } from "./layout-2e09b4b5.js";
import { _ as __nuxt_component_1 } from "./Input-d9d12aef.js";
import { reactive, ref, computed, watch, mergeProps, withCtx, unref, createVNode, withDirectives, vModelRadio, toDisplayString, createTextVNode, vShow, isRef, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, a as useAppStore } from "../server.mjs";
import "vue-router";
import "destr";
import "devalue";
import "klona";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "ufo";
import "ohash";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "defu";
const calculator_vue_vue_type_style_index_0_scoped_39315bf8_lang = "";
const _sfc_main = {
  __name: "calculator",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const formData = reactive({
      age: 0,
      height: 0,
      weight: 0,
      sex: ""
    });
    const quantityMacros = reactive({
      carbs: 0,
      fat: 0,
      protein: 0
    });
    const goal = ref(null);
    const results = ref(false);
    const recommendedKcal = computed(() => {
      return Math.round(quantityMacros.carbs * 4 * formData.weight + quantityMacros.protein * 4 * formData.weight + quantityMacros.fat * 9 * formData.weight);
    });
    const tmb = computed(() => {
      if (formData.age && formData.height && formData.weight && formData.sex) {
        results.value = true;
        if (formData.sex == "MALE")
          return Math.round(88.362 + 13.397 * formData.weight + 4.799 * formData.height - 5.677 * formData.age);
        return Math.round(447.593 + 9.247 * formData.weight + 3.098 * formData.height - 4.33 * formData.age);
      }
      return 0;
    });
    const imc = () => {
      const height = formData.height / 100;
      return formData.weight / (height * height);
    };
    const macrosCalc = () => {
      if (imc() >= 30)
        quantityMacros.protein = 1.6;
      else
        quantityMacros.protein = 2;
      quantityMacros.fat = 0.6;
      if (goal.value == "cutting")
        quantityMacros.carbs = 2.5;
      else if (goal.value == "bulking")
        quantityMacros.carbs = 3.5;
      else
        quantityMacros.carbs = 3;
    };
    watch(goal, () => {
      if (!formData.weight || !formData.height || !formData.age || !formData.sex) {
        appStore.setAlert(true, "warning", "Preencha todos os campos para receber a sugestão.");
        return;
      }
      macrosCalc();
    });
    const macrosSuggestion = computed(() => {
      if (goal.value && formData.weight && formData.height && formData.age && formData.sex) {
        macrosCalc();
        return true;
      }
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Input = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-24 px-4 pb-10" data-v-39315bf8${_scopeId}><h1 class="text-center" data-v-39315bf8${_scopeId}>Calculadora</h1><h2 class="text-center font-semibold uppercase text-sm pb-6" data-v-39315bf8${_scopeId}> macros, taxa metabólica basal (tmb) e gasto energético total (get) </h2><div class="flex justify-center" data-v-39315bf8${_scopeId}><div class="md:w-4/5 lg:w-3/5" data-v-39315bf8${_scopeId}><h3 data-v-39315bf8${_scopeId}>Para calcular a TMB e o GET preencha os campos a seguir.</h3><form action="" class="py-4" data-v-39315bf8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              name: "age",
              type: "number",
              label: "Qual a sua idade?",
              placeholder: "Digite aqui sua idade",
              "onUpdate:modelValue": ($event) => unref(formData).age = $event,
              class: "pb-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              name: "height",
              type: "number",
              label: "Qual a sua altura? (cm)",
              placeholder: "Digite aqui sua altura",
              "onUpdate:modelValue": ($event) => unref(formData).height = $event,
              class: "pb-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "weight",
              name: "weight",
              type: "number",
              label: "Qual o seu peso?",
              placeholder: "Digite aqui seu peso",
              "onUpdate:modelValue": ($event) => unref(formData).weight = $event,
              class: "pb-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="md:max-w-xs" data-v-39315bf8${_scopeId}><label class="label" data-v-39315bf8${_scopeId}><span class="label-text font-semibold" data-v-39315bf8${_scopeId}>Qual o seu sexo?</span></label><div class="form-control" data-v-39315bf8${_scopeId}><label class="label cursor-pointer" data-v-39315bf8${_scopeId}><span class="label-text" data-v-39315bf8${_scopeId}>Feminino</span><input type="radio" class="radio radio-primary" value="FEMALE"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formData).sex, "FEMALE")) ? " checked" : ""} data-v-39315bf8${_scopeId}></label></div><div class="form-control" data-v-39315bf8${_scopeId}><label class="label cursor-pointer" data-v-39315bf8${_scopeId}><span class="label-text" data-v-39315bf8${_scopeId}>Masculino</span><input type="radio" class="radio radio-primary" value="MALE"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formData).sex, "MALE")) ? " checked" : ""} data-v-39315bf8${_scopeId}></label></div></div></form><div style="${ssrRenderStyle(unref(results) ? null : { display: "none" })}" class="pb-4" data-v-39315bf8${_scopeId}><h2 class="text-center" data-v-39315bf8${_scopeId}>Taxa metabólica basal (TMB)</h2><p class="text-center py-4 text-lg text-neutral-50" data-v-39315bf8${_scopeId}><span class="text-8xl font-bold" data-v-39315bf8${_scopeId}>${ssrInterpolate(unref(tmb))}</span>kcal</p><p class="text-justify" data-v-39315bf8${_scopeId}>A taxa metabólica basal corresponde ao quanto de calorias você gasta apenas em repouso, sem contabilizar nenhuma atividade do seu dia. </p><h2 class="text-center py-4 text-white" data-v-39315bf8${_scopeId}>Gasto energético total (GET)</h2><p class="pb-4 text-justify" data-v-39315bf8${_scopeId}>O gasto energético total corresponde ao quanto de calorias você gasta somando a TMB + seu nível de atividade. Os níveis de atividade são apenas estimativas, sendo que a mensuração do esforço realizado é subjetivo. </p><div class="overflow-x-auto" data-v-39315bf8${_scopeId}><table class="table" data-v-39315bf8${_scopeId}><thead data-v-39315bf8${_scopeId}><tr class="text-neutral-50" data-v-39315bf8${_scopeId}><th data-v-39315bf8${_scopeId}></th><th data-v-39315bf8${_scopeId}>Nível de atividade</th><th data-v-39315bf8${_scopeId}>Calorias</th></tr></thead><tbody data-v-39315bf8${_scopeId}><tr data-v-39315bf8${_scopeId}><th data-v-39315bf8${_scopeId}>1</th><td data-v-39315bf8${_scopeId}>Sedentário</td><td data-v-39315bf8${_scopeId}><span data-v-39315bf8${_scopeId}>${ssrInterpolate(Math.round(unref(tmb) * 1.15))}</span> kcal</td></tr><tr data-v-39315bf8${_scopeId}><th data-v-39315bf8${_scopeId}>2</th><td data-v-39315bf8${_scopeId}>Moderado</td><td data-v-39315bf8${_scopeId}><span data-v-39315bf8${_scopeId}>${ssrInterpolate(Math.round(unref(tmb) * 1.3))}</span> kcal</td></tr><tr data-v-39315bf8${_scopeId}><th data-v-39315bf8${_scopeId}>3</th><td data-v-39315bf8${_scopeId}>Alto</td><td data-v-39315bf8${_scopeId}><span data-v-39315bf8${_scopeId}>${ssrInterpolate(Math.round(unref(tmb) * 1.5))}</span> kcal</td></tr></tbody></table></div></div><h2 class="text-center py-4" data-v-39315bf8${_scopeId}>Sugestão de macronutrientes</h2><p class="pb-4 text-justify" data-v-39315bf8${_scopeId}>A sugestão de macros possui valores conservadores para um início de dieta, conforme progressão deve-se atualizar a quantidade em especial dos carboidratos. Ela leva em conta apenas o peso do indivíduo e seu objetivo. Dessa forma, você pode realizar a comparação com os valores indicados pela TMB e GET e ajustar caso ache necessário. </p><h3 class="pb-2 font-semibold" data-v-39315bf8${_scopeId}>Qual seu objetivo atualmente?</h3><div class="flex flex-wrap justify-center gap-2 pt-4 pb-8" data-v-39315bf8${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(goal), "cutting")) ? " checked" : ""} class="btn w-full md:btn-wide" type="radio" value="cutting" aria-label="Perder gordura" data-v-39315bf8${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(goal), "maintenance")) ? " checked" : ""} class="btn w-full md:btn-wide" type="radio" value="maintenance" aria-label="Recomposição corporal/Manutenção" data-v-39315bf8${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(goal), "bulking")) ? " checked" : ""} class="btn w-full md:btn-wide" type="radio" value="bulking" aria-label="Ganhar massa" data-v-39315bf8${_scopeId}></div><div style="${ssrRenderStyle(unref(macrosSuggestion) ? null : { display: "none" })}" data-v-39315bf8${_scopeId}><h4 class="text-sm font-semibold pb-2" data-v-39315bf8${_scopeId}>Carboidratos - ${ssrInterpolate(unref(quantityMacros).carbs)}g/kg (${ssrInterpolate(Math.round(unref(formData).weight * unref(quantityMacros).carbs))} g)</h4><input type="range" min="0" max="8" step="0.5"${ssrRenderAttr("value", unref(quantityMacros).carbs)} class="range range-warning" data-v-39315bf8${_scopeId}><h4 class="text-sm font-semibold pb-2" data-v-39315bf8${_scopeId}>Gordura - ${ssrInterpolate(unref(quantityMacros).fat)}g/kg (${ssrInterpolate(Math.round(unref(formData).weight * unref(quantityMacros).fat))} g)</h4><input type="range" min="0" max="8" step="0.1"${ssrRenderAttr("value", unref(quantityMacros).fat)} class="range range-accent" data-v-39315bf8${_scopeId}><h4 class="text-sm font-semibold pb-2" data-v-39315bf8${_scopeId}>Proteína - ${ssrInterpolate(unref(quantityMacros).protein)}g/kg (${ssrInterpolate(Math.round(unref(formData).weight * unref(quantityMacros).protein))} g)</h4><input type="range" min="0" max="8" step="0.25"${ssrRenderAttr("value", unref(quantityMacros).protein)} class="range range-error" data-v-39315bf8${_scopeId}><p class="text-center py-4 text-lg" data-v-39315bf8${_scopeId}><span class="text-8xl font-bold" data-v-39315bf8${_scopeId}>${ssrInterpolate(unref(recommendedKcal))}</span>kcal</p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-24 px-4 pb-10" }, [
                createVNode("h1", { class: "text-center" }, "Calculadora"),
                createVNode("h2", { class: "text-center font-semibold uppercase text-sm pb-6" }, " macros, taxa metabólica basal (tmb) e gasto energético total (get) "),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "md:w-4/5 lg:w-3/5" }, [
                    createVNode("h3", null, "Para calcular a TMB e o GET preencha os campos a seguir."),
                    createVNode("form", {
                      action: "",
                      class: "py-4"
                    }, [
                      createVNode(_component_Input, {
                        name: "age",
                        type: "number",
                        label: "Qual a sua idade?",
                        placeholder: "Digite aqui sua idade",
                        "onUpdate:modelValue": ($event) => unref(formData).age = $event,
                        class: "pb-2"
                      }, null, 8, ["onUpdate:modelValue"]),
                      createVNode(_component_Input, {
                        name: "height",
                        type: "number",
                        label: "Qual a sua altura? (cm)",
                        placeholder: "Digite aqui sua altura",
                        "onUpdate:modelValue": ($event) => unref(formData).height = $event,
                        class: "pb-2"
                      }, null, 8, ["onUpdate:modelValue"]),
                      createVNode(_component_Input, {
                        id: "weight",
                        name: "weight",
                        type: "number",
                        label: "Qual o seu peso?",
                        placeholder: "Digite aqui seu peso",
                        "onUpdate:modelValue": ($event) => unref(formData).weight = $event,
                        class: "pb-2"
                      }, null, 8, ["onUpdate:modelValue"]),
                      createVNode("div", { class: "md:max-w-xs" }, [
                        createVNode("label", { class: "label" }, [
                          createVNode("span", { class: "label-text font-semibold" }, "Qual o seu sexo?")
                        ]),
                        createVNode("div", { class: "form-control" }, [
                          createVNode("label", { class: "label cursor-pointer" }, [
                            createVNode("span", { class: "label-text" }, "Feminino"),
                            withDirectives(createVNode("input", {
                              type: "radio",
                              class: "radio radio-primary",
                              value: "FEMALE",
                              "onUpdate:modelValue": ($event) => unref(formData).sex = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelRadio, unref(formData).sex]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "form-control" }, [
                          createVNode("label", { class: "label cursor-pointer" }, [
                            createVNode("span", { class: "label-text" }, "Masculino"),
                            withDirectives(createVNode("input", {
                              type: "radio",
                              class: "radio radio-primary",
                              value: "MALE",
                              "onUpdate:modelValue": ($event) => unref(formData).sex = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelRadio, unref(formData).sex]
                            ])
                          ])
                        ])
                      ])
                    ]),
                    withDirectives(createVNode("div", { class: "pb-4" }, [
                      createVNode("h2", { class: "text-center" }, "Taxa metabólica basal (TMB)"),
                      createVNode("p", { class: "text-center py-4 text-lg text-neutral-50" }, [
                        createVNode("span", { class: "text-8xl font-bold" }, toDisplayString(unref(tmb)), 1),
                        createTextVNode("kcal")
                      ]),
                      createVNode("p", { class: "text-justify" }, "A taxa metabólica basal corresponde ao quanto de calorias você gasta apenas em repouso, sem contabilizar nenhuma atividade do seu dia. "),
                      createVNode("h2", { class: "text-center py-4 text-white" }, "Gasto energético total (GET)"),
                      createVNode("p", { class: "pb-4 text-justify" }, "O gasto energético total corresponde ao quanto de calorias você gasta somando a TMB + seu nível de atividade. Os níveis de atividade são apenas estimativas, sendo que a mensuração do esforço realizado é subjetivo. "),
                      createVNode("div", { class: "overflow-x-auto" }, [
                        createVNode("table", { class: "table" }, [
                          createVNode("thead", null, [
                            createVNode("tr", { class: "text-neutral-50" }, [
                              createVNode("th"),
                              createVNode("th", null, "Nível de atividade"),
                              createVNode("th", null, "Calorias")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "1"),
                              createVNode("td", null, "Sedentário"),
                              createVNode("td", null, [
                                createVNode("span", null, toDisplayString(Math.round(unref(tmb) * 1.15)), 1),
                                createTextVNode(" kcal")
                              ])
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", null, "2"),
                              createVNode("td", null, "Moderado"),
                              createVNode("td", null, [
                                createVNode("span", null, toDisplayString(Math.round(unref(tmb) * 1.3)), 1),
                                createTextVNode(" kcal")
                              ])
                            ]),
                            createVNode("tr", null, [
                              createVNode("th", null, "3"),
                              createVNode("td", null, "Alto"),
                              createVNode("td", null, [
                                createVNode("span", null, toDisplayString(Math.round(unref(tmb) * 1.5)), 1),
                                createTextVNode(" kcal")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ], 512), [
                      [vShow, unref(results)]
                    ]),
                    createVNode("h2", { class: "text-center py-4" }, "Sugestão de macronutrientes"),
                    createVNode("p", { class: "pb-4 text-justify" }, "A sugestão de macros possui valores conservadores para um início de dieta, conforme progressão deve-se atualizar a quantidade em especial dos carboidratos. Ela leva em conta apenas o peso do indivíduo e seu objetivo. Dessa forma, você pode realizar a comparação com os valores indicados pela TMB e GET e ajustar caso ache necessário. "),
                    createVNode("h3", { class: "pb-2 font-semibold" }, "Qual seu objetivo atualmente?"),
                    createVNode("div", { class: "flex flex-wrap justify-center gap-2 pt-4 pb-8" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(goal) ? goal.value = $event : null,
                        class: "btn w-full md:btn-wide",
                        type: "radio",
                        value: "cutting",
                        "aria-label": "Perder gordura"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, unref(goal)]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(goal) ? goal.value = $event : null,
                        class: "btn w-full md:btn-wide",
                        type: "radio",
                        value: "maintenance",
                        "aria-label": "Recomposição corporal/Manutenção"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, unref(goal)]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(goal) ? goal.value = $event : null,
                        class: "btn w-full md:btn-wide",
                        type: "radio",
                        value: "bulking",
                        "aria-label": "Ganhar massa"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, unref(goal)]
                      ])
                    ]),
                    withDirectives(createVNode("div", null, [
                      createVNode("h4", { class: "text-sm font-semibold pb-2" }, "Carboidratos - " + toDisplayString(unref(quantityMacros).carbs) + "g/kg (" + toDisplayString(Math.round(unref(formData).weight * unref(quantityMacros).carbs)) + " g)", 1),
                      withDirectives(createVNode("input", {
                        type: "range",
                        min: "0",
                        max: "8",
                        step: "0.5",
                        "onUpdate:modelValue": ($event) => unref(quantityMacros).carbs = $event,
                        class: "range range-warning"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(quantityMacros).carbs]
                      ]),
                      createVNode("h4", { class: "text-sm font-semibold pb-2" }, "Gordura - " + toDisplayString(unref(quantityMacros).fat) + "g/kg (" + toDisplayString(Math.round(unref(formData).weight * unref(quantityMacros).fat)) + " g)", 1),
                      withDirectives(createVNode("input", {
                        type: "range",
                        min: "0",
                        max: "8",
                        step: "0.1",
                        "onUpdate:modelValue": ($event) => unref(quantityMacros).fat = $event,
                        class: "range range-accent"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(quantityMacros).fat]
                      ]),
                      createVNode("h4", { class: "text-sm font-semibold pb-2" }, "Proteína - " + toDisplayString(unref(quantityMacros).protein) + "g/kg (" + toDisplayString(Math.round(unref(formData).weight * unref(quantityMacros).protein)) + " g)", 1),
                      withDirectives(createVNode("input", {
                        type: "range",
                        min: "0",
                        max: "8",
                        step: "0.25",
                        "onUpdate:modelValue": ($event) => unref(quantityMacros).protein = $event,
                        class: "range range-error"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(quantityMacros).protein]
                      ]),
                      createVNode("p", { class: "text-center py-4 text-lg" }, [
                        createVNode("span", { class: "text-8xl font-bold" }, toDisplayString(unref(recommendedKcal)), 1),
                        createTextVNode("kcal")
                      ])
                    ], 512), [
                      [vShow, unref(macrosSuggestion)]
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calculator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39315bf8"]]);
export {
  calculator as default
};
//# sourceMappingURL=calculator-524232ef.js.map
