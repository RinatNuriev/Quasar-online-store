const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
      { path: "/catalog/", component: () => import("src/pages/MsCatalogPage.vue") },
      { path: "/cart/", component: () => import("src/pages/MsCartPage.vue") },
      {
        path: "/:id",
        name: "productPage",
        props: true,
        component: () => import("pages/MsProductPage.vue"),
      },
      {
        path: "/add/",
        props: true,
        component: () => import("pages/MsAddProductPage.vue"),
      },
    ],
  },
  // { path: '/', component: () => import('pages/MsLoginPage.vue') },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
