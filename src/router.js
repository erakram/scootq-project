// import Vue from 'vue'
// import Router from 'vue-router'
// import Dashboard from './views/Dashboard.vue'
// import Projects from './views/Projects.vue'
// import Team from './views/Team.vue'
// import Account from './views/Account.vue'
// import Signup from './components/Signup.vue'
// import Login from './components/Login.vue'
// import firebase from 'firebase'


// Vue.use(Router)

// const router = new Router({
// // export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '*',
//       redirect: '/login'
//     },
//     {
//       path: '/',
//       redirect: '/login'
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/',
//       name: 'dashboard',
//       component: Dashboard,
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/projects',
//       name: 'Projects',
//       component: Projects
//     },
//     {
//       path: '/team',
//       name: 'Team',
//       component: Team
//     },
//     {
//       path: '/account',
//       name: 'Account',
//       component: Account
//     },
//     {
//       path: '/signup',
//       name: 'Signup',
//       component: Signup
//     }    
//   ]
// });

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some( record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next ('dashboard');
//   else next();
// });

// export default router;

import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }

  ]
})