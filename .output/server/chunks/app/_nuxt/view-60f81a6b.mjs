import { _ as __nuxt_component_0 } from './layout-2e09b4b5.mjs';
import { _ as __nuxt_component_1 } from './Input-d9d12aef.mjs';
import { f as useRoute, b as useRouter, d as useRuntimeConfig } from '../server.mjs';
import { mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "view",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const route = useRoute();
    const values = route.query;
    const title = values.title;
    const link = values.link;
    const photo = values.photo;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_Input = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-24 px-4 pb-10"${_scopeId}><h1 class="text-center pb-6"${_scopeId}>Visualizar produto</h1><div class="flex justify-center"${_scopeId}><div class="md:w-4/5 lg:w-3/5"${_scopeId}><form action=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              disabled: "",
              value: unref(title),
              class: "mb-2",
              size: "md:max-w-2xl",
              name: "title",
              label: "T\xEDtulo",
              placeholder: "Digite o t\xEDtulo do produto"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              disabled: "",
              value: unref(link),
              class: "mb-2",
              size: "md:max-w-2xl",
              name: "link",
              label: "Link",
              placeholder: "Digite o link de afiliado"
            }, null, _parent2, _scopeId));
            _push2(`<label class="label"${_scopeId}><span class="label-text text-neutral-600"${_scopeId}>Foto do produto</span></label><div class="flex justify-center pb-6 pt-2"${_scopeId}><img class="w-72"${ssrRenderAttr("src", `${unref(API_URL)}/static${unref(photo)}`)}${_scopeId}></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-24 px-4 pb-10" }, [
                createVNode("h1", { class: "text-center pb-6" }, "Visualizar produto"),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "md:w-4/5 lg:w-3/5" }, [
                    createVNode("form", { action: "" }, [
                      createVNode(_component_Input, {
                        disabled: "",
                        value: unref(title),
                        class: "mb-2",
                        size: "md:max-w-2xl",
                        name: "title",
                        label: "T\xEDtulo",
                        placeholder: "Digite o t\xEDtulo do produto"
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        disabled: "",
                        value: unref(link),
                        class: "mb-2",
                        size: "md:max-w-2xl",
                        name: "link",
                        label: "Link",
                        placeholder: "Digite o link de afiliado"
                      }, null, 8, ["value"]),
                      createVNode("label", { class: "label" }, [
                        createVNode("span", { class: "label-text text-neutral-600" }, "Foto do produto")
                      ]),
                      createVNode("div", { class: "flex justify-center pb-6 pt-2" }, [
                        createVNode("img", {
                          class: "w-72",
                          src: `${unref(API_URL)}/static${unref(photo)}`
                        }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/view.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=view-60f81a6b.mjs.map
