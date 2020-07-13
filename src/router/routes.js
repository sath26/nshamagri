const routes = [
  /* **************************list***************************/
  {
    path: "/",
    name: "main",
    component: () => import("components/list/Home.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/landing-page",
    component: () => import("layouts/LandingPage.vue")
  },
  /******************profile*********************************/
  {
    path: "/profile",
    component: () => import("components/add/Profile.vue"),
    meta: { requireAuth: true }
  },
  /* {
    path: "/profile/enterprise/create",
    name: "enterprise_create",
    component: () => import("components/add/profile/Enterprise.vue")
  },
  {
    path: "/profile/member/create",
    name: "member_list_add",
    component: () => import("components/add/profile/Member.vue")
  }, */
  {
    path: "/profile/view",
    component: () => import("components/list/Profile.vue")
  },
  /***************************************************/
  {
    path: "/unit",
    component: () => import("components/list/Measurement.vue")
  },
  /* *********************goods********************************* */
  {
    path: "/quotation",
    component: () => import("components/list/Quotation.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/invoice_good",
    component: () => import("components/list/Invoice_good.vue")
    //back to bought or sold
    //back to enterprise stock
  },

  /* *********************services********************************* */

  {
    path: "/category",
    component: () => import("components/list/Category.vue"),
    meta: { requireAuth: true }
  },

  {
    path: "/single_service",
    component: () => import("components/list/SingleService.vue") //back to my_services
  },

  {
    name: "boughtOverview",
    path: "/bought/:id",
    component: () => import("components/list/Bought.vue"),
    redirect: "/invoice/:id",

    children: [
      {
        path: "/invoice/:id",
        name: "invoice",
        component: () => import("components/list/bought/Invoice.vue")
      },
      {
        path: "/paid_by/:id",
        name: "paid_by",
        component: () => import("components/list/bought/Paid-date.vue")
      }
    ],
    meta: { requireAuth: true }
    //it also takes to invoce
  },
  {
    path: "/sold",
    component: () => import("components/list/Sold.vue"),
    meta: { requireAuth: true }
    //it also takes to invoice
  },
  {
    path: "/payment_bought",
    component: () => import("components/list/PaymentBought.vue"),
    meta: { requireAuth: true }
    //it also takes to invoce
  },
  {
    path: "/payment_sold",
    component: () => import("components/list/PaymentSold.vue"),
    meta: { requireAuth: true }
    //it also takes to invoice
  },
  {
    path: "/enterprise_stock",
    component: () => import("components/list/EnterpriseStock.vue")
    //back to single_product
    //it also takes to invoice
  },

  /***************add********************************************************/
  {
    path: "/invoice",
    component: () => import("components/add/Invoice.vue"),
    meta: { requireAuth: true }
  },

  {
    path: "/add/quotation",
    component: () => import("components/add/Quotation.vue"), //back to my_products
    meta: { requireAuth: true }
  },

  {
    path: "/add/unit",
    component: () => import("components/add/Unit.vue") //back to my_products
  },

  /* ******************************rest************************************/
  {
    path: "/search",
    component: () => import("components/consumer/Search.vue")
  },
  {
    path: "/settings",
    component: () => import("pages/Settings.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/enterprise",
    component: () => import("components/consumer/SingleEnterprise.vue")
  },
  {
    path: "/search",
    component: () => import("components/consumer/Search.vue")
  },
  {
    path: "/login",
    component: () => import("components/Login.vue"),
    meta: { alreadyAuth: true }
  },
  {
    path: "/register",
    component: () => import("components/Register.vue")
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
