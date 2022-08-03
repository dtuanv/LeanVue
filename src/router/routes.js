import Register from "../pages/Register.vue"
const routes = [
  {

    path: '/',
    component: () => import('layouts/Search.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
       { path : '/customer', name :'customer', component:() => import('src/pages/Customer.vue')},
       { path : '/product/:id',
         name:'product',
         component:() => import('src/pages/Product.vue')},
         {
          path:'contact',
          name:'contact',
          component:() => import('src/pages/Contact.vue')

         },
         {path : '/login', name : 'login', component:() => import('src/pages/Login.vue')},
         {path : '/test', name : 'test', component:() => import('src/pages/Test.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
