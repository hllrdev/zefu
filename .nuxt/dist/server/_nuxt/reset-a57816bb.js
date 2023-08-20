import { _ as __nuxt_component_0 } from "./layout-2e09b4b5.js";
import { _ as __nuxt_component_1 } from "./Input-d9d12aef.js";
import { a as useAppStore, f as useRoute, b as useRouter, d as useRuntimeConfig, e as useFetch } from "../server.mjs";
import { reactive, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { helpers, required, minLength, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import "vue-router";
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
const _sfc_main = {
  __name: "reset",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const route = useRoute();
    const router = useRouter();
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const submitForm = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        const password = formData.password;
        await useFetch(`${API_URL}/auth/reset`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + route.query.token
          },
          body: {
            password
          },
          onResponse({ response }) {
            if (response.status == 200) {
              appStore.setAlert(true, "success", "Senha resetada com sucesso!");
              router.push("/auth/signin");
            } else {
              appStore.setAlert(true, "error", "Houve um problema. A senha não foi resetada.");
            }
          }
        }, "$CQoZh6Vzxb");
      }
    };
    const formData = reactive({
      password: "",
      confirmPassword: ""
    });
    const rules = computed(() => {
      return {
        password: {
          required: helpers.withMessage("Preencha o e-mail", required),
          minLength: helpers.withMessage("É preciso no minímo 6 caracteres", minLength(6))
        },
        confirmPassword: {
          required: helpers.withMessage("Preencha o e-mail", required),
          sameAs: helpers.withMessage("As senhas são diferentes", sameAs(formData.password))
        }
      };
    });
    const v$ = useVuelidate(rules, formData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Input = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "auth" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><form action="" class="py-6"${_scopeId}><h1 class="text-center pb-6"${_scopeId}>Resetar senha</h1><div class="mb-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              name: "password",
              type: "password",
              label: "Senha",
              placeholder: "Digite a nova senha",
              "onUpdate:modelValue": ($event) => unref(formData).password = $event
            }, null, _parent2, _scopeId));
            if (unref(v$).password.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).password.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="pb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              name: "confirmPassword",
              type: "password",
              label: "Confirmar senha",
              placeholder: "Digite a senha novamente",
              "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event
            }, null, _parent2, _scopeId));
            if (unref(v$).confirmPassword.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).confirmPassword.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><button type="button" class="btn btn-secondary w-full text-neutral-50"${_scopeId}>Resetar</button></form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  action: "",
                  class: "py-6"
                }, [
                  createVNode("h1", { class: "text-center pb-6" }, "Resetar senha"),
                  createVNode("div", { class: "mb-1" }, [
                    createVNode(_component_Input, {
                      name: "password",
                      type: "password",
                      label: "Senha",
                      placeholder: "Digite a nova senha",
                      "onUpdate:modelValue": ($event) => unref(formData).password = $event
                    }, null, 8, ["onUpdate:modelValue"]),
                    unref(v$).password.$error ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-error font-medium text-xs"
                    }, toDisplayString(unref(v$).password.$errors[0].$message), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "pb-6" }, [
                    createVNode(_component_Input, {
                      name: "confirmPassword",
                      type: "password",
                      label: "Confirmar senha",
                      placeholder: "Digite a senha novamente",
                      "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event
                    }, null, 8, ["onUpdate:modelValue"]),
                    unref(v$).confirmPassword.$error ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-error font-medium text-xs"
                    }, toDisplayString(unref(v$).confirmPassword.$errors[0].$message), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("button", {
                    type: "button",
                    class: "btn btn-secondary w-full text-neutral-50",
                    onClick: submitForm
                  }, "Resetar")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=reset-a57816bb.js.map
