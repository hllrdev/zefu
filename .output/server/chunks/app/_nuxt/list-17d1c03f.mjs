import { _ as __nuxt_component_0 } from './layout-2e09b4b5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { _ as _export_sfc, a as useAppStore, d as useRuntimeConfig, h as __nuxt_component_1$1 } from '../server.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'vue-router';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
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
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    const appStore = useAppStore();
    const products = ref([]);
    const deleteProductId = ref("");
    const showDialogDeleteProduct = (id) => {
      deleteProductId.value = id;
      const deleteDialog = document.getElementById("delete_dialog");
      deleteDialog.showModal();
    };
    const submitDeleteProduct = async () => {
      await $fetch(
        `${API_URL}/products/${deleteProductId.value}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        }
      ).then(() => {
        products.value = products.value.filter((product) => product.id != deleteProductId.value);
        deleteProductId.value = "";
        appStore.setAlert(true, "success", "Produto exclu\xEDdo com sucesso.");
      }).catch(() => {
        appStore.setAlert(true, "error", "Houve um erro na tentativa de exclus\xE3o.");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "main" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-24 px-4 pb-10" data-v-b482803c${_scopeId}><h1 class="text-center pb-6" data-v-b482803c${_scopeId}>Gerenciamento de produtos</h1><div class="flex justify-center" data-v-b482803c${_scopeId}><div class="md:w-4/5 lg:w-3/5" data-v-b482803c${_scopeId}><div class="flex justify-end md:pr-6 pb-6" data-v-b482803c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "btn hover:text-primary",
              to: "/products/add"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-b482803c${_scopeId2}> Cadastrar `);
                  _push3(ssrRenderComponent(_component_Icon, {
                    class: "w-6 h-auto",
                    name: "gridicons:add",
                    color: "white"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createTextVNode(" Cadastrar "),
                      createVNode(_component_Icon, {
                        class: "w-6 h-auto",
                        name: "gridicons:add",
                        color: "white"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="overflow-x-auto" data-v-b482803c${_scopeId}><table class="table" data-v-b482803c${_scopeId}><thead data-v-b482803c${_scopeId}><tr data-v-b482803c${_scopeId}><th data-v-b482803c${_scopeId}>Produto</th><th data-v-b482803c${_scopeId}>A\xE7\xF5es</th></tr></thead><tbody data-v-b482803c${_scopeId}><!--[-->`);
            ssrRenderList(unref(products), (product) => {
              _push2(`<tr data-v-b482803c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: "/products/view",
                  query: {
                    title: product.title,
                    link: product.link,
                    photo: product.photo
                  }
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<td data-v-b482803c${_scopeId2}><div class="flex items-center" data-v-b482803c${_scopeId2}><div class="avatar" data-v-b482803c${_scopeId2}><div class="mask mask-squircle w-12 h-12" data-v-b482803c${_scopeId2}><img${ssrRenderAttr("src", `${unref(API_URL)}/static${product.photo}`)} alt="Photo product" data-v-b482803c${_scopeId2}></div></div><span data-v-b482803c${_scopeId2}>${ssrInterpolate(product.title)}</span></div></td>`);
                  } else {
                    return [
                      createVNode("td", null, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", { class: "avatar" }, [
                            createVNode("div", { class: "mask mask-squircle w-12 h-12" }, [
                              createVNode("img", {
                                src: `${unref(API_URL)}/static${product.photo}`,
                                alt: "Photo product"
                              }, null, 8, ["src"])
                            ])
                          ]),
                          createVNode("span", null, toDisplayString(product.title), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<td data-v-b482803c${_scopeId}><div class="flex flex-col md:flex-row justify-center items-center" data-v-b482803c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: "/products/edit",
                  query: {
                    id: product.id,
                    title: product.title,
                    link: product.link,
                    photo: product.photo
                  }
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      class: "cursor-pointer w-6 h-auto hover:text-primary",
                      name: "material-symbols:edit"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        class: "cursor-pointer w-6 h-auto hover:text-primary",
                        name: "material-symbols:edit"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div data-v-b482803c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                class: "cursor-pointer w-6 h-auto hover:text-primary",
                name: "material-symbols:delete"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><dialog id="delete_dialog" class="modal modal-bottom sm:modal-middle" data-v-b482803c${_scopeId}><form method="dialog" class="modal-box bg-neutral-100" data-v-b482803c${_scopeId}><h3 class="font-bold text-lg" data-v-b482803c${_scopeId}>Excluir produto</h3><p class="py-4" data-v-b482803c${_scopeId}>Deseja excluir esse produto?</p><div class="modal-action" data-v-b482803c${_scopeId}><button class="btn hover:bg-neutral-900" data-v-b482803c${_scopeId}>Cancelar</button><button class="btn hover:bg-red-600 hover:border-red-600" data-v-b482803c${_scopeId}>Confirmar</button></div></form></dialog></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-24 px-4 pb-10" }, [
                createVNode("h1", { class: "text-center pb-6" }, "Gerenciamento de produtos"),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "md:w-4/5 lg:w-3/5" }, [
                    createVNode("div", { class: "flex justify-end md:pr-6 pb-6" }, [
                      createVNode(_component_NuxtLink, {
                        class: "btn hover:text-primary",
                        to: "/products/add"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createTextVNode(" Cadastrar "),
                            createVNode(_component_Icon, {
                              class: "w-6 h-auto",
                              name: "gridicons:add",
                              color: "white"
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "overflow-x-auto" }, [
                      createVNode("table", { class: "table" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "Produto"),
                            createVNode("th", null, "A\xE7\xF5es")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product) => {
                            return openBlock(), createBlock("tr", {
                              key: product.id
                            }, [
                              createVNode(_component_NuxtLink, {
                                to: {
                                  path: "/products/view",
                                  query: {
                                    title: product.title,
                                    link: product.link,
                                    photo: product.photo
                                  }
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode("td", null, [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode("div", { class: "avatar" }, [
                                        createVNode("div", { class: "mask mask-squircle w-12 h-12" }, [
                                          createVNode("img", {
                                            src: `${unref(API_URL)}/static${product.photo}`,
                                            alt: "Photo product"
                                          }, null, 8, ["src"])
                                        ])
                                      ]),
                                      createVNode("span", null, toDisplayString(product.title), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              createVNode("td", null, [
                                createVNode("div", { class: "flex flex-col md:flex-row justify-center items-center" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: {
                                      path: "/products/edit",
                                      query: {
                                        id: product.id,
                                        title: product.title,
                                        link: product.link,
                                        photo: product.photo
                                      }
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        class: "cursor-pointer w-6 h-auto hover:text-primary",
                                        name: "material-symbols:edit"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode("div", {
                                    onClick: ($event) => showDialogDeleteProduct(product.id)
                                  }, [
                                    createVNode(_component_Icon, {
                                      class: "cursor-pointer w-6 h-auto hover:text-primary",
                                      name: "material-symbols:delete"
                                    })
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    createVNode("dialog", {
                      id: "delete_dialog",
                      class: "modal modal-bottom sm:modal-middle"
                    }, [
                      createVNode("form", {
                        method: "dialog",
                        class: "modal-box bg-neutral-100"
                      }, [
                        createVNode("h3", { class: "font-bold text-lg" }, "Excluir produto"),
                        createVNode("p", { class: "py-4" }, "Deseja excluir esse produto?"),
                        createVNode("div", { class: "modal-action" }, [
                          createVNode("button", {
                            class: "btn hover:bg-neutral-900",
                            onClick: ($event) => deleteProductId.value = ""
                          }, "Cancelar", 8, ["onClick"]),
                          createVNode("button", {
                            class: "btn hover:bg-red-600 hover:border-red-600",
                            onClick: submitDeleteProduct
                          }, "Confirmar")
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b482803c"]]);

export { list as default };
//# sourceMappingURL=list-17d1c03f.mjs.map
