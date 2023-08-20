import { _ as __nuxt_component_0 } from "./layout-2e09b4b5.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-563b35af.js";
import { e as useFetch, g as useAuthStore, d as useRuntimeConfig, h as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_3 } from "./Product-e132651c.js";
import { withAsyncContext, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${API_URL}/products`, "$U48yGv7YOO")), __temp = await __temp, __restore(), __temp);
    const loading = ref(false);
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      const _component_Product = __nuxt_component_3;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-24 px-4 pb-10 bg-neutral-50"${_scopeId}><h1 class="text-center pb-10 text-black"${_scopeId}>Produtos</h1><div class="flex justify-center"${_scopeId}><div class="md:w-4/5"${_scopeId}>`);
            if (unref(authStore).hasPermission(["ADMIN", "MANAGER"])) {
              _push2(`<div class="flex justify-end md:pr-6 pb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/products/list" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="btn hover:text-primary text-white"${_scopeId2}>Gerenciar `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      class: "w-6 h-auto",
                      name: "material-symbols:app-registration",
                      color: "white"
                    }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "btn hover:text-primary text-white" }, [
                        createTextVNode("Gerenciar "),
                        createVNode(_component_Icon, {
                          class: "w-6 h-auto",
                          name: "material-symbols:app-registration",
                          color: "white"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10"${_scopeId}><!--[-->`);
            ssrRenderList(unref(products), (product) => {
              _push2(ssrRenderComponent(_component_Product, {
                key: product.id,
                link: product.link,
                photo: product.photo,
                title: product.title
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div style="${ssrRenderStyle(unref(loading) ? null : { display: "none" })}" class="text-center pt-8"${_scopeId}><span class="loading loading-spinner loading-md"${_scopeId}></span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-24 px-4 pb-10 bg-neutral-50" }, [
                createVNode("h1", { class: "text-center pb-10 text-black" }, "Produtos"),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "md:w-4/5" }, [
                    unref(authStore).hasPermission(["ADMIN", "MANAGER"]) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-end md:pr-6 pb-6"
                    }, [
                      createVNode(_component_NuxtLink, { to: "/products/list" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "btn hover:text-primary text-white" }, [
                            createTextVNode("Gerenciar "),
                            createVNode(_component_Icon, {
                              class: "w-6 h-auto",
                              name: "material-symbols:app-registration",
                              color: "white"
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product) => {
                        return openBlock(), createBlock(_component_Product, {
                          key: product.id,
                          link: product.link,
                          photo: product.photo,
                          title: product.title
                        }, null, 8, ["link", "photo", "title"]);
                      }), 128))
                    ]),
                    withDirectives(createVNode("div", { class: "text-center pt-8" }, [
                      createVNode("span", { class: "loading loading-spinner loading-md" })
                    ], 512), [
                      [vShow, unref(loading)]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-d56b659f.js.map
