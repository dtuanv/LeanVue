const routes = [
  {
    path: '/',
    component: () => import('layouts/Search.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
       { path : '/customer', component:() => import('src/pages/Customer.vue')},
       { path : '/product/:id',
         name:'product',
         component:() => import('src/pages/Product.vue')},
         {
          path:'contact',
          name:'contact',
          component:() => import('src/pages/Contact.vue')

         },
    ]
  },
  // {   path: '/test',
  // component: () => import('pages/Test.vue'),

  // },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
