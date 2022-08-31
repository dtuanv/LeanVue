import Register from "../pages/Register.vue"
const routes = [
  {

    path: '/',
    component: () => import('layouts/Search.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
       { path : '/customer', name :'customer', component:() => import('src/pages/customer/Customer.vue')},
       { path : '/customer/:customerId', name :'detail', component:() => import('src/pages/customer/Detail.vue')},
       { path : '/product/:id',
         name:'product',
         component:() => import('src/pages/product/Product.vue')},
         {
          path:'contact',
          name:'contact',
          component:() => import('src/pages/Contact.vue')

         },
         {path : '/admin/category/add', name : 'addCategory', component:() => import('src/pages/product/AddCategory.vue')},
         {path : '/category', name : 'category', component:() => import('src/pages/product/Category.vue')},
        //  {path : '/category/box', name : 'categoryBox', component:() => import('src/pages/product/CategoryBox.vue')},


         {path : '/admin', name : 'admin', component:() => import('src/pages/admin/Admin.vue')},
         {path : '/login', name : 'login', component:() => import('src/pages/Login.vue')},
         {path : '/partner', name : 'partner', component:() => import('src/pages/Partner.vue')},
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
