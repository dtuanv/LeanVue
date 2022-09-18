import Register from "../pages/Register.vue"
const routes = [
  {

    path: '/',
    component: () => import('layouts/Search.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
       { path : '/customer', name :'customer', component:() => import('src/pages/customer/Customer.vue')},
       { path : '/customer/:customerId', name :'detail', component:() => import('src/pages/customer/Detail.vue')},
       { path : '/product', name :'product', component:() => import('src/pages/product/Product.vue')},
       { path : '/product/1',
         name:'product_1',
         component:() => import('src/pages/product/Product_1.vue')},
         {
          path:'contact',
          name:'contact',
          component:() => import('src/pages/Contact.vue')

         },
         {path : '/admin/category/add', name : 'addCategory', component:() => import('src/pages/product/AddCategory.vue')},
         {path : '/admin/product/add', name : 'addProduct', component:() => import('src/pages/product/AddProduct.vue')},
         {path : '/admin/category/add/:id', name : 'categoryDetail', component:() => import('src/pages/product/AddCategory.vue')},
         {path : '/admin/product/add/:id', name : 'categoryDetail', component:() => import('src/pages/product/AddProduct.vue')},
         {path : '/admin/category/edit', name : 'editCategory', component:() => import('src/pages/product/EditCategory.vue')},
         {path : '/admin/product/edit', name : 'editProduct', component:() => import('src/pages/product/EditProduct.vue')},
         {path : '/category', name : 'category', component:() => import('src/pages/product/Category.vue')},

         //
         {path : '/shopping', name : 'shopping', component:() => import('src/pages/shopping/Cart.vue')},

        //  {path : '/category/box', name : 'categoryBox', component:() => import('src/pages/product/CategoryBox.vue')},


         {path : '/admin', name : 'admin', component:() => import('src/pages/admin/Admin.vue')},
         {path : '/login', name : 'login', component:() => import('src/pages/Login.vue')},
         {path : '/partner', name : 'partner', component:() => import('src/pages/Partner.vue')},
         {path : '/test', name : 'test', component:() => import('src/pages/Test.vue')},
         {path : '/test/todos', name : 'todosList', component:() => import('src/pages/storeTest/TodosList.vue')},

        //  {path : '/todosList', name : 'todosList', component:() => import('src/pages/storeTest/TodosList.vue')},
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
