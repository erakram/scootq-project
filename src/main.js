import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// import firebase from 'firebase'

Vue.config.productionTip = false;

// let app = '';

// var config = {
//   apiKey: "AIzaSyBEQd3symGIEV9SnvdpJ7-5m2VCB1sGfn8",
//   authDomain: "vuetify-project-5d211.firebaseapp.com",
//   databaseURL: "https://vuetify-project-5d211.firebaseio.com",
//   projectId: "vuetify-project-5d211",
//   storageBucket: "vuetify-project-5d211.appspot.com",
//   messagingSenderId: "667872960512"
// };

// firebase.initializeApp(config);

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('User logged in: ', user);
//   } else {
//     console.log('User logged out');
//   } 
// });
// firebase.auth().onAuthStateChanged( user => {
//   if(user) {
//     console.log('User In if');
//     new Vue({
//       router,
//       render: h => h(App)
//     }).$mount('#app');
    
//   } else {
//     console.log('User out of if');
//   }
// });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

