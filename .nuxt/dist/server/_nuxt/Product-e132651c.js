import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { d as useRuntimeConfig, h as __nuxt_component_1 } from "../server.mjs";
import { mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true },
    link: { type: String, required: true },
    photo: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center mb-4 md:mb-0" }, _attrs))}><div class="relative h-80 w-60 overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.link,
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-full w-full object-cover rounded-t-lg hover:scale-110 duration-300"${ssrRenderAttr("src", `${unref(API_URL)}/static${props.photo}`)} alt="Image product"${_scopeId}><div class="h-1/3 w-full absolute bottom-0 z-10 bg-neutral-800 opacity-90 p-4 flex"${_scopeId}><p class="text-white font-bold opacity-100 text-sm"${_scopeId}>${ssrInterpolate(props.title)}</p><div class="flex items-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "w-6 h-auto",
              name: "cil:arrow-right",
              color: "white"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-full w-full object-cover rounded-t-lg hover:scale-110 duration-300",
                src: `${unref(API_URL)}/static${props.photo}`,
                alt: "Image product"
              }, null, 8, ["src"]),
              createVNode("div", { class: "h-1/3 w-full absolute bottom-0 z-10 bg-neutral-800 opacity-90 p-4 flex" }, [
                createVNode("p", { class: "text-white font-bold opacity-100 text-sm" }, toDisplayString(props.title), 1),
                createVNode("div", { class: "flex items-end" }, [
                  createVNode(_component_Icon, {
                    class: "w-6 h-auto",
                    name: "cil:arrow-right",
                    color: "white"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=Product-e132651c.js.map
