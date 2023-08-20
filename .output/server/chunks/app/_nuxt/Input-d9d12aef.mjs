import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
    type: { type: String, default: "text" },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    value: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    size: { type: String, required: false }
  },
  emits: [
    "update:modelValue"
  ],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["form-control w-full", props.size ? props.size : "md:max-w-xs"]
      }, _attrs))}><label class="label"><span class="label-text text-white font-semibold">${ssrInterpolate(props.label)}</span></label><input${ssrRenderAttr("value", props.value)}${ssrRenderAttr("name", props.name)}${ssrRenderAttr("type", props.type)}${ssrRenderAttr("placeholder", props.placeholder)}${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""} class="input placeholder:text-sm border border-neutral-300 text-neutral-content focus:outline-none focus:border-secondary disabled:bg-neutral-50 disabled:border-neutral-100 disabled:text-neutral-400"><span>${ssrInterpolate(props.error)}</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Input-d9d12aef.mjs.map
