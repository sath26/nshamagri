
const routes = [
  
  /* **************************list***************************/
  {
    path: '/',
    component: () => import('components/list/Home.vue'),
  },
  {
    path: '/landing_page',
    component: () => import('layouts/LandingPage.vue'),
  },
  {
    path: '/profile',
    component: () => import('components/list/Profile.vue'),

  },
  {
    path: '/unit',
    component: () => import('components/list/Measurement.vue'),

  },
  /* *********************goods********************************* */
  {
    path: '/quotation',
    component: () => import('components/list/Quotation.vue'),

  },
  {
    path: '/invoice_good',
    component: () => import('components/list/Invoice_good.vue'),
    //back to bought or sold
    //back to enterprise stock

  },

  /* *********************services********************************* */

  {
    path: '/category',
    component: () => import('components/list/Category.vue'),

  },
  
  
  {
    path: '/single_service',
    component: () => import('components/list/SingleService.vue'),//back to my_services
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

 

  
  /***************add********************************************************/
  {
    path: '/invoice',
    component: () => import('components/add/Invoice.vue'),
  },


  {
    path: '/add/quotation',
    component: () => import('components/add/Quotation.vue'),//back to my_products

  },
  
  {
    path: '/add/unit',
    component: () => import('components/add/Unit.vue'),//back to my_products

  },

 
  /* ******************************rest************************************/
  {
    path: '/search',
    component: () => import('components/consumer/Search.vue'),

  },
  {
    path: '/settings',
    component: () => import('pages/Settings.vue'),

  },
  {
    path: '/enterprise',
    component: () => import('components/consumer/SingleEnterprise.vue'),

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
