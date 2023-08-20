import { _ as __nuxt_component_0$1 } from "./layout-2e09b4b5.js";
import { mergeProps, useSSRContext, withAsyncContext, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, e as useFetch, d as useRuntimeConfig, h as __nuxt_component_1$1 } from "../server.mjs";
import { _ as __nuxt_component_3$1 } from "./Product-e132651c.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import "destr";
import "devalue";
import "klona";
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
const _imports_0 = "" + __buildAssetsURL("zeffih.d93748bc.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-neutral-50 md:flex md:justify-center px-4 md:px-0 pt-24 md:pt-14" }, _attrs))}><div class="md:w-4/5 md:flex justify-center"><div class="flex items-center"><h1 class="text-center text-neutral">Aqui você encontra a caixa de utensílios.</h1></div><div class="flex justify-center md:block"><img class="w-60"${ssrRenderAttr("src", _imports_0)} alt="Personagem Zeff do anime One Piece segurando Sanji em seus ombros."></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const Products_vue_vue_type_style_index_0_scoped_632c2855_lang = "";
const _sfc_main$2 = {
  __name: "Products",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${API_URL}/products/main`, "$fCrUzPWA2w")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Product = __nuxt_component_3$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "products",
        class: "bg-secondary md:flex md:justify-center"
      }, _attrs))} data-v-632c2855><div class="md:w-11/12 lg:w-4/5 py-10 px-4 md:px-0 grid" data-v-632c2855><h2 class="text-white text-center pb-6 md:pb-10" data-v-632c2855>Produtos</h2><div class="grid md:grid-cols-3 gap-8" data-v-632c2855><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(ssrRenderComponent(_component_Product, {
          key: product.id,
          link: product.link,
          photo: product.photo,
          title: product.title
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-grow justify-center items-end" data-v-632c2855>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn my-6 md:mt-10 btn-wide" data-v-632c2855${_scopeId}> Ver todos `);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "w-4 h-auto",
              name: "cil:arrow-right",
              color: "white"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "btn my-6 md:mt-10 btn-wide" }, [
                createTextVNode(" Ver todos "),
                createVNode(_component_Icon, {
                  class: "w-4 h-auto",
                  name: "cil:arrow-right",
                  color: "white"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Products.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-632c2855"]]);
const Group_vue_vue_type_style_index_0_scoped_597ebb8d_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "group",
    class: "flex justify-center items-center bg-black py-10 px-4"
  }, _attrs))} data-v-597ebb8d><div class="md:w-10/12 rounded-lg" data-v-597ebb8d><h2 class="text-white text-center pb-6" data-v-597ebb8d>Participe do nosso grupo no Whatsapp</h2><div class="flex justify-center mb-10" data-v-597ebb8d><p class="text-white text-justify indent-4 md:indent-0 lg:w-6/12" data-v-597ebb8d> Com a comunidade você pode ter várias conversas, trocar experiências e ainda aguardar o momento ideal para realizar suas compras com descontos da Amazon. </p></div><div class="flex justify-center" data-v-597ebb8d><a href="https://chat.whatsapp.com/IKsrJ3xScsnApKY4eqQpeE" target="_blank" class="btn btn-secondary btn-wide flex justify-around" data-v-597ebb8d><span class="text-white" data-v-597ebb8d>Entrar agora</span>`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "w-8 h-auto",
    name: "logos:whatsapp-icon"
  }, null, _parent));
  _push(`</a></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Group.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-597ebb8d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  const _component_Home = __nuxt_component_1;
  const _component_HomeProducts = __nuxt_component_2;
  const _component_HomeGroup = __nuxt_component_3;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Home, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_HomeProducts, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_HomeGroup, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Home),
          createVNode(_component_HomeProducts),
          createVNode(_component_HomeGroup)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-df37abe6.js.map
