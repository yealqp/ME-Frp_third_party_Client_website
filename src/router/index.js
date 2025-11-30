import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from "../views/About.vue";
import Partners from "../views/Partners.vue";
import Docs from "../views/Docs.vue";
import DocsIndex from "../components/docs/index.vue";
import XLDoc from "../components/docs/XL.vue";
import LXDoc from "../components/docs/LX.vue";
import QYFDoc from "../components/docs/QYF.vue";
import UrlProtocolView from "../components/UrlProtocolView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/partners",
    name: "Partners",
    component: Partners,
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs,
    children: [
      {
        path: "",
        name: "DocsIndex",
        component: DocsIndex,
      },
      {
        path: "xl",
        name: "XLDoc",
        component: XLDoc,
      },
      {
        path: "lx",
        name: "LXDoc",
        component: LXDoc,
      },
      {
        path: "qyf",
        name: "QYFDoc",
        component: QYFDoc,
      },
    ],
  },
  {
    path: '/start/:id',
    name: "URL Protocol Redirect",
    component: UrlProtocolView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
