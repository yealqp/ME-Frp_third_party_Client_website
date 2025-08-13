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
console.log(`    __  _________   ______              ________    _          __   ____             __           _________            __ 
   /  |/  / ____/  / ____/________     /_  __/ /_  (_)________/ /  / __ \\____ ______/ /___  __   / ____/ (_)__  ____  / /_
  / /|_/ / __/    / /_  / ___/ __ \\     / / / __ \\/ / ___/ __  /  / /_/ / __ \\/ ___/ __/ / / /  / /   / / / _ \\/ __ \\/ __/
 / /  / / /___   / __/ / /  / /_/ /    / / / / / / / /  / /_/ /  / ____/ /_/ / /  / /_/ /_/ /  / /___/ / /  __/ / / / /_  
/_/  /_/_____/  /_/   /_/  / .___/    /_/ /_/ /_/_/_/   \\__,_/  /_/    \\__,_/_/   \\__/\\__, /   \\____/_/_/\\___/_/ /_/\\__/  
                          /_/                                                        /____/`);
console.log('ME-Frp Third Party Client Alliance')