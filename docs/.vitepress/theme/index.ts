// @ts-ignore: 2307
import { defineComponent, h, inject } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme as ThemeConfig } from "vitepress";

import type { Options } from "@nolebase/vitepress-plugin-enhanced-readabilities";
import { InjectionKey } from "@nolebase/vitepress-plugin-enhanced-readabilities";

import { setup } from "@css-render/vue3-ssr";
import { NConfigProvider } from "naive-ui";
import { useRoute } from "vitepress";

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

import "@nolebase/vitepress-plugin-enhanced-mark/client/style.css";

import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      "nav-screen-content-after": () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      // vitepress-plugin-highlight-targeted-heading
      "layout-top": () => [h(NolebaseHighlightTargetedHeading)],
    });
  },
  enhanceApp({ app, router }) {
    app
      .provide(InjectionKey, {
        layoutSwitch: {
          defaultMode: 1,
        },
        spotlight: {
          defaultToggle: true,
        },
      } as Options)
      .component("FA", FontAwesomeIcon);
  },
};

const { Layout } = DefaultTheme;

const CssRenderStyle = defineComponent({
  setup() {
    const collect = inject("css-render-collect");
    return {
      style: collect(),
    };
  },
  render() {
    return h("css-render-style", {
      innerHTML: this.style,
    });
  },
});

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute();
    return () => {
      return h("vitepress-path", null, [route.path]);
    };
  },
});

const NaiveUIProvider = defineComponent({
  render() {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true },
      {
        default: () => [
          h(Layout, null, { default: this.$slots.default?.() }),
          import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null,
        ],
      }
    );
  },
});

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp: ({ app }) => {
    if (import.meta.env.SSR) {
      const { collect } = setup(app);
      app.provide("css-render-collect", collect);
    }
  },
};
