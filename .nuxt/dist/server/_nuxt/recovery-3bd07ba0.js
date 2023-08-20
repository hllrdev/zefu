import { _ as __nuxt_component_0 } from "./layout-2e09b4b5.js";
import { _ as __nuxt_component_1 } from "./Input-d9d12aef.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-563b35af.js";
import { ref, reactive, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, withDirectives, vShow, useSSRContext } from "vue";
import { a as useAppStore, b as useRouter, d as useRuntimeConfig, e as useFetch } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { helpers, required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import "vue-router";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "ohash";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "defu";
const _sfc_main = {
  __name: "recovery",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const wait = ref(false);
    const router = useRouter();
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const submitForm = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        wait.value = true;
        const email2 = formData.email;
        await useFetch(`${API_URL}/auth/recovery`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            email: email2
          },
          onResponse({ response }) {
            if (response.status == 200) {
              appStore.setAlert(true, "success", "E-mail enviado. Vá a sua caixa de entrada, verifique o spam.");
              router.push("/auth/signin");
            } else if (response.status == 404) {
              appStore.setAlert(true, "error", "Usuário não encontrado.");
            } else {
              appStore.setAlert(true, "error", "Houve um problema. O e-mail não foi enviado.");
            }
            wait.value = false;
          }
        }, "$KhzOYStLdL");
      }
    };
    const formData = reactive({
      email: ""
    });
    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("Preencha o e-mail", required),
          email: helpers.withMessage("Formato de e-mail inválido", email)
        }
      };
    });
    const v$ = useVuelidate(rules, formData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Input = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "auth" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><form action="" class="py-6"${_scopeId}><h1 class="text-center pb-6"${_scopeId}>Recuperar senha</h1><div class="pb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              name: "email",
              type: "email",
              label: "E-mail",
              placeholder: "Digite aqui seu e-mail",
              "onUpdate:modelValue": ($event) => unref(formData).email = $event
            }, null, _parent2, _scopeId));
            if (unref(v$).email.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).email.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><button type="button" class="btn btn-secondary text-neutral-50 w-full"${_scopeId}>Recuperar</button></form><p class="text-sm text-center pb-4"${_scopeId}>Lembrou a senha? `);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/auth/signin" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold ml-2"${_scopeId2}>Entrar</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold ml-2" }, "Entrar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><div style="${ssrRenderStyle(unref(wait) ? null : { display: "none" })}" class="flex flex-col items-center"${_scopeId}><span class="loading loading-spinner loading-md mb-2"${_scopeId}></span><p class="text-xs"${_scopeId}>Aguarde um instante</p></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  action: "",
                  class: "py-6"
                }, [
                  createVNode("h1", { class: "text-center pb-6" }, "Recuperar senha"),
                  createVNode("div", { class: "pb-6" }, [
                    createVNode(_component_Input, {
                      name: "email",
                      type: "email",
                      label: "E-mail",
                      placeholder: "Digite aqui seu e-mail",
                      "onUpdate:modelValue": ($event) => unref(formData).email = $event
                    }, null, 8, ["onUpdate:modelValue"]),
                    unref(v$).email.$error ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-error font-medium text-xs"
                    }, toDisplayString(unref(v$).email.$errors[0].$message), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("button", {
                    type: "button",
                    class: "btn btn-secondary text-neutral-50 w-full",
                    onClick: submitForm
                  }, "Recuperar")
                ]),
                createVNode("p", { class: "text-sm text-center pb-4" }, [
                  createTextVNode("Lembrou a senha? "),
                  createVNode(_component_NuxtLink, { to: "/auth/signin" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-semibold ml-2" }, "Entrar")
                    ]),
                    _: 1
                  })
                ]),
                withDirectives(createVNode("div", { class: "flex flex-col items-center" }, [
                  createVNode("span", { class: "loading loading-spinner loading-md mb-2" }),
                  createVNode("p", { class: "text-xs" }, "Aguarde um instante")
                ], 512), [
                  [vShow, unref(wait)]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=recovery-3bd07ba0.js.map
