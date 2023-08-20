import { _ as __nuxt_component_0 } from "./layout-2e09b4b5.js";
import { _ as __nuxt_component_1 } from "./Input-d9d12aef.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-563b35af.js";
import { reactive, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { g as useAuthStore } from "../server.mjs";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
import "vue-router";
import "destr";
import "devalue";
import "klona";
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
  __name: "signin",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const formData = reactive({
      email: "",
      password: ""
    });
    const submitForm = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        await authStore.signInUser({ email: formData.email, password: formData.password });
      }
    };
    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("Preencha o e-mail", required),
          email: helpers.withMessage("Formato de e-mail inválido", email)
        },
        password: {
          required: helpers.withMessage("Preencha a senha", required)
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
            _push2(`<div${_scopeId}><form action="" class="py-6"${_scopeId}><h1 class="text-center pb-6 text-white"${_scopeId}>Login</h1><div class="mb-1"${_scopeId}>`);
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
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              name: "password",
              type: "password",
              label: "Senha",
              placeholder: "Digite aqui sua senha",
              "onUpdate:modelValue": ($event) => unref(formData).password = $event
            }, null, _parent2, _scopeId));
            if (unref(v$).password.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).password.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-end pb-4 pt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "text-xs",
              to: "/auth/recovery"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Esqueceu sua senha? `);
                } else {
                  return [
                    createTextVNode(" Esqueceu sua senha? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-center flex-col"${_scopeId}><button type="button" class="btn btn-secondary text-neutral-50 w-full mb-4"${_scopeId}>Entrar</button></div></form><p class="text-sm text-center"${_scopeId}> Ainda não possui uma conta? `);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/auth/signup" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold ml-2"${_scopeId2}>Cadastrar</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold ml-2" }, "Cadastrar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  action: "",
                  class: "py-6"
                }, [
                  createVNode("h1", { class: "text-center pb-6 text-white" }, "Login"),
                  createVNode("div", { class: "mb-1" }, [
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
                  createVNode("div", null, [
                    createVNode(_component_Input, {
                      name: "password",
                      type: "password",
                      label: "Senha",
                      placeholder: "Digite aqui sua senha",
                      "onUpdate:modelValue": ($event) => unref(formData).password = $event
                    }, null, 8, ["onUpdate:modelValue"]),
                    unref(v$).password.$error ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-error font-medium text-xs"
                    }, toDisplayString(unref(v$).password.$errors[0].$message), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "text-end pb-4 pt-1" }, [
                      createVNode(_component_NuxtLink, {
                        class: "text-xs",
                        to: "/auth/recovery"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Esqueceu sua senha? ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-center flex-col" }, [
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-secondary text-neutral-50 w-full mb-4",
                      onClick: submitForm
                    }, "Entrar")
                  ])
                ]),
                createVNode("p", { class: "text-sm text-center" }, [
                  createTextVNode(" Ainda não possui uma conta? "),
                  createVNode(_component_NuxtLink, { to: "/auth/signup" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-semibold ml-2" }, "Cadastrar")
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=signin-bf7c19e6.js.map
