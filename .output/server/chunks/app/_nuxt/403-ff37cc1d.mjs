import { _ as __nuxt_component_0 } from './layout-2e09b4b5.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "error" }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center"${_scopeId}><h1${_scopeId}>Erro 403</h1><h3${_scopeId}>Voc\xEA n\xE3o possui permiss\xE3o para acessar essa p\xE1gina</h3></div>`);
      } else {
        return [
          createVNode("div", { class: "text-center" }, [
            createVNode("h1", null, "Erro 403"),
            createVNode("h3", null, "Voc\xEA n\xE3o possui permiss\xE3o para acessar essa p\xE1gina")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/errors/403.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _403 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _403 as default };
//# sourceMappingURL=403-ff37cc1d.mjs.map
