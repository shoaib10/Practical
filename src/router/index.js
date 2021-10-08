import Vue from 'vue'
import VueRouter from 'vue-router'

// import login from '../pages/Login.vue';
import registration from '../pages/registration.vue';
import UserList from '../pages/UserList.vue'
import Edit from '../pages/Edit.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: login
  // },
  {
    path: '/registration',
    name: 'registration',
    component: registration
  },
  {
    path: '/',
    name: 'user',
    component: UserList
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(async(to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const currentUser = localStorage.getItem('user');
//   if (requiresAuth && !currentUser) {
//       next('/login');
//   } else {
//       next();
//   }
// });
export default router
