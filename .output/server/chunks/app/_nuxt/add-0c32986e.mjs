import { _ as __nuxt_component_0 } from './layout-2e09b4b5.mjs';
import { _ as __nuxt_component_1 } from './Input-d9d12aef.mjs';
import { reactive, computed, ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { d as useRuntimeConfig } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { helpers, required, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import 'vue-router';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import 'ufo';
import 'klona';
import 'ohash';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      title: "",
      link: "",
      photo: ""
    });
    const rules = computed(() => {
      return {
        title: {
          required: helpers.withMessage("Preencha o t\xEDtulo", required),
          maxLength: helpers.withMessage("Digite no m\xE1ximo 50 caracteres", maxLength(50))
        },
        link: {
          required: helpers.withMessage("Preencha o link", required),
          maxLength: helpers.withMessage("Digite no m\xE1ximo 50 caracteres", maxLength(50))
        },
        photo: { required: helpers.withMessage("Selecione a foto", required) }
      };
    });
    const v$ = useVuelidate(rules, formData);
    const photoFilename = ref("");
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const submitForm = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        const form = new FormData();
        form.append("title", formData.title);
        form.append("link", formData.link);
        form.append("photo", formData.photo);
        await $fetch(
          `${API_URL}/products`,
          {
            method: "POST",
            body: form,
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          }
        ).then(() => {
          appStore.setAlert(true, "success", "Produto adicionado com sucesso.");
        }).catch(() => {
          appStore.setAlert(true, "error", "Houve um erro ao adicionar o produto.");
        });
      }
    };
    const changeFileInput = (event) => {
      photoFilename.value = event.target.files[0].name;
      formData.photo = event.target.files[0];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Input = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-24 px-4 pb-10"${_scopeId}><h1 class="text-center pb-6"${_scopeId}>Adicionar produto</h1><div class="flex justify-center"${_scopeId}><div class="md:w-4/5 lg:w-3/5"${_scopeId}><form action=""${_scopeId}><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              name: "title",
              label: "T\xEDtulo",
              placeholder: "Digite o t\xEDtulo do produto",
              "onUpdate:modelValue": ($event) => unref(formData).title = $event
            }, null, _parent2, _scopeId));
            if (unref(v$).title.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).title.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              class: "mb-2",
              name: "link",
              label: "Link",
              placeholder: "Digite o link de afiliado",
              "onUpdate:modelValue": ($event) => unref(formData).link = $event
            }, null, _parent2, _scopeId));
            if (unref(v$).link.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).link.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><label class="label"${_scopeId}><span class="label-text text-neutral-600"${_scopeId}>Foto do produto</span></label><div class="mt-3 md:mb-12"${_scopeId}><label class="border py-3 px-5 cursor-pointer hover:bg-neutral-100" for="photo"${_scopeId}>Selecionar arquivo</label>`);
            if (unref(v$).photo.$error) {
              _push2(`<span class="text-error font-medium text-xs mx-2"${_scopeId}>${ssrInterpolate(unref(v$).photo.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="block mt-6 mx-2 md:mt-0 md:inline"${_scopeId}>${ssrInterpolate(unref(photoFilename))}</span><input type="file" id="photo" name="photo" class="invisible"${_scopeId}></div><div class="flex justify-center"${_scopeId}><button type="button" class="btn btn-accent btn-wide"${_scopeId}>Adicionar</button></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-24 px-4 pb-10" }, [
                createVNode("h1", { class: "text-center pb-6" }, "Adicionar produto"),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "md:w-4/5 lg:w-3/5" }, [
                    createVNode("form", { action: "" }, [
                      createVNode("div", { class: "mb-2" }, [
                        createVNode(_component_Input, {
                          name: "title",
                          label: "T\xEDtulo",
                          placeholder: "Digite o t\xEDtulo do produto",
                          "onUpdate:modelValue": ($event) => unref(formData).title = $event
                        }, null, 8, ["onUpdate:modelValue"]),
                        unref(v$).title.$error ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-error font-medium text-xs"
                        }, toDisplayString(unref(v$).title.$errors[0].$message), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode(_component_Input, {
                          class: "mb-2",
                          name: "link",
                          label: "Link",
                          placeholder: "Digite o link de afiliado",
                          "onUpdate:modelValue": ($event) => unref(formData).link = $event
                        }, null, 8, ["onUpdate:modelValue"]),
                        unref(v$).link.$error ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-error font-medium text-xs"
                        }, toDisplayString(unref(v$).link.$errors[0].$message), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("label", { class: "label" }, [
                        createVNode("span", { class: "label-text text-neutral-600" }, "Foto do produto")
                      ]),
                      createVNode("div", { class: "mt-3 md:mb-12" }, [
                        createVNode("label", {
                          class: "border py-3 px-5 cursor-pointer hover:bg-neutral-100",
                          for: "photo"
                        }, "Selecionar arquivo"),
                        unref(v$).photo.$error ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-error font-medium text-xs mx-2"
                        }, toDisplayString(unref(v$).photo.$errors[0].$message), 1)) : createCommentVNode("", true),
                        createVNode("span", { class: "block mt-6 mx-2 md:mt-0 md:inline" }, toDisplayString(unref(photoFilename)), 1),
                        createVNode("input", {
                          type: "file",
                          id: "photo",
                          name: "photo",
                          class: "invisible",
                          onChange: changeFileInput
                        }, null, 32)
                      ]),
                      createVNode("div", { class: "flex justify-center" }, [
                        createVNode("button", {
                          type: "button",
                          class: "btn btn-accent btn-wide",
                          onClick: submitForm
                        }, "Adicionar")
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-0c32986e.mjs.map
