
const routes = [
  {
    path: '/choose',
    component: () => import('components/add/Choose.vue'),
  },
  {
    path: '/invoice',
    component: () => import('components/add/Sell.vue'),
  },
  {
    path: '/',
    component: () => import('components/list/Home.vue'),
  },
  {
    path: '/search',
    component: () => import('components/consumer/Search.vue'),

  },
  {
    path: '/profile',
    component: () => import('components/list/Profile.vue'),

  },
  {
    path: '/enterprise',
    component: () => import('components/consumer/SingleEnterprise.vue'),

  },
  {
    path: '/my_products',
    component: () => import('components/list/MyProducts.vue'),

  },
  {
    path: '/add_goods',
    component: () => import('components/add/Good.vue'),//back to my_products

  },
  {
    path: '/my_services',
    component: () => import('components/list/ServiceCategory.vue'),

  },
  {
    path: '/add_service',
    component: () => import('components/add/Service.vue'),//back to my_products

  },
  {
    path: '/invoice_good',
    component: () => import('components/list/Invoice_good.vue'),
    //back to bought or sold
    //back to enterprise stock

  },
  {
    path: '/invoice_service',
    component: () => import('components/list/Invoice_service.vue'),
    //back to bought or sold
    //back to enterprise stock

  },
  {
    path: '/bought',
    component: () => import('components/list/Bought.vue'),
    //it also takes to invoce
  },
  {
    path: '/sold',
    component: () => import('components/list/Sold.vue'),
    //it also takes to invoice
  },
  {
    path: '/payment_bought',
    component: () => import('components/list/PaymentBought.vue'),
    //it also takes to invoce
  },
  {
    path: '/payment_sold',
    component: () => import('components/list/PaymentSold.vue'),
    //it also takes to invoice
  },
  {
    path: '/enterprise_stock',
    component: () => import('components/list/EnterpriseStock.vue'),
    //back to single_product
    //it also takes to invoice
  },

  {
    path: '/single_product',
    component: () => import('components/list/SingleProduct.vue'),//back to my_product
  },
  {
    path: '/single_service',
    component: () => import('components/list/SingleService.vue'),//back to my_services
  },
  {
    path: '/add_good',
    component: () => import('components/add/NewGood.vue'),
  },
  {
    path: '/search',
    component: () => import('components/consumer/Search.vue'),
  },
  {
    path: '/login',
    component: () => import('components/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('components/Register.vue'),
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
