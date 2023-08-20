import { _ as __nuxt_component_0 } from './layout-2e09b4b5.mjs';
import { _ as __nuxt_component_1 } from './Input-d9d12aef.mjs';
import { ref, reactive, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { f as useRoute, b as useRouter } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    const changeFileInput = (event) => {
      const selectedFile = event.target.files[0];
      formData.photo = selectedFile;
      photoFilename.value = selectedFile.name;
      const reader = new FileReader();
      reader.addEventListener("load", function() {
        imagePreview.value = reader.result;
      });
      reader.readAsDataURL(event.target.files[0]);
    };
    const imagePreview = ref("");
    const route = useRoute();
    useRouter();
    const values = route.query;
    const initialImage = values.photo;
    const photoFilename = ref("");
    const formData = reactive({
      id: values.id,
      title: values.title,
      link: values.link,
      photo: values.photo
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
        }
      };
    });
    const v$ = useVuelidate(rules, formData);
    const submitForm = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        const form = new FormData();
        if (formData.photo == initialImage)
          form.append("photo", null);
        else
          form.append("photo", formData.photo);
        form.append("title", formData.title);
        form.append("link", formData.link);
        await $fetch(
          `${API_URL}/products/${formData.id}`,
          {
            method: "PUT",
            body: form,
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          }
        ).then(() => {
          appStore.setAlert(true, "success", "Produto editado com sucesso.");
        }).catch(() => {
          appStore.setAlert(true, "error", "Houve um erro ao editar o produto.");
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Input = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-24 px-4 pb-10"${_scopeId}><h1 class="text-center pb-6"${_scopeId}>Editar produto</h1><div class="flex justify-center"${_scopeId}><div class="md:w-4/5 lg:w-3/5"${_scopeId}><form action=""${_scopeId}><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              value: unref(formData).title,
              class: "mb-2",
              size: "md:max-w-2xl",
              name: "title",
              label: "T\xEDtulo",
              placeholder: "Digite o t\xEDtulo do produto",
              modelValue: unref(formData).title,
              "onUpdate:modelValue": [($event) => unref(formData).title = $event, ($event) => unref(formData).title = $event]
            }, null, _parent2, _scopeId));
            if (unref(v$).title.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).title.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              value: unref(formData).link,
              class: "mb-2",
              size: "md:max-w-2xl",
              name: "link",
              label: "Link",
              placeholder: "Digite o link de afiliado",
              modelValue: unref(formData).link,
              "onUpdate:modelValue": [($event) => unref(formData).link = $event, ($event) => unref(formData).link = $event]
            }, null, _parent2, _scopeId));
            if (unref(v$).link.$error) {
              _push2(`<span class="text-error font-medium text-xs"${_scopeId}>${ssrInterpolate(unref(v$).link.$errors[0].$message)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><label class="label"${_scopeId}><span class="label-text text-neutral-600"${_scopeId}>Foto do produto</span></label><div class="mt-3 md:mb-12"${_scopeId}><label class="border py-3 px-5 cursor-pointer hover:bg-neutral-100" for="photo"${_scopeId}>Selecionar arquivo</label><span class="block mt-6 mx-2 md:mt-0 md:inline"${_scopeId}>${ssrInterpolate(unref(photoFilename))}</span><input type="file" id="photo" name="photo" class="invisible"${_scopeId}></div><div class="flex justify-center pb-6 pt-2"${_scopeId}><img class="w-72"${ssrRenderAttr("src", unref(imagePreview) ? unref(imagePreview) : `${_ctx.API_URL}/static${unref(initialImage)}`)}${_scopeId}></div><div class="flex justify-center"${_scopeId}><button type="button" class="btn btn-accent btn-wide"${_scopeId}>Editar</button></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-24 px-4 pb-10" }, [
                createVNode("h1", { class: "text-center pb-6" }, "Editar produto"),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "md:w-4/5 lg:w-3/5" }, [
                    createVNode("form", { action: "" }, [
                      createVNode("div", { class: "mb-2" }, [
                        createVNode(_component_Input, {
                          value: unref(formData).title,
                          class: "mb-2",
                          size: "md:max-w-2xl",
                          name: "title",
                          label: "T\xEDtulo",
                          placeholder: "Digite o t\xEDtulo do produto",
                          modelValue: unref(formData).title,
                          "onUpdate:modelValue": [($event) => unref(formData).title = $event, ($event) => unref(formData).title = $event]
                        }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                        unref(v$).title.$error ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-error font-medium text-xs"
                        }, toDisplayString(unref(v$).title.$errors[0].$message), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode(_component_Input, {
                          value: unref(formData).link,
                          class: "mb-2",
                          size: "md:max-w-2xl",
                          name: "link",
                          label: "Link",
                          placeholder: "Digite o link de afiliado",
                          modelValue: unref(formData).link,
                          "onUpdate:modelValue": [($event) => unref(formData).link = $event, ($event) => unref(formData).link = $event]
                        }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
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
                        createVNode("span", { class: "block mt-6 mx-2 md:mt-0 md:inline" }, toDisplayString(unref(photoFilename)), 1),
                        createVNode("input", {
                          type: "file",
                          id: "photo",
                          name: "photo",
                          class: "invisible",
                          onChange: changeFileInput
                        }, null, 32)
                      ]),
                      createVNode("div", { class: "flex justify-center pb-6 pt-2" }, [
                        createVNode("img", {
                          class: "w-72",
                          src: unref(imagePreview) ? unref(imagePreview) : `${_ctx.API_URL}/static${unref(initialImage)}`
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "flex justify-center" }, [
                        createVNode("button", {
                          type: "button",
                          class: "btn btn-accent btn-wide",
                          onClick: submitForm
                        }, "Editar")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-4878d4af.mjs.map
