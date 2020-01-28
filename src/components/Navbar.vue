<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Aladdin</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" enable-resize-watcher app dark class="dark">
      <v-layout>
        <v-flex class="mt-3">
          <div class="grey--text subheading  ml-3">SCOOTQ DASHBOARD</div>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// import Popup from './Popup.vue'
// import firebase from 'firebase';
export default {
    // components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "desktop_windows", text: "Dashboard", route: "/"},
        { icon: "storefront", text: "Retail", route: "/" },
        { icon: "shopping_cart", text: "Sales", route: "/" },
        { icon: "call_to_action", text: "Inventory", route: "/" },
        { icon: "money", text: "Payments", route: "/" },
        // { icon: "person", text: "Dashboard", route: "/admin"}
      ],
      snackbar: false
    };
  },
  // methods: {
  //       Signout: function() {
  //           firebase.auth().signOut().then(() => {
  //             // console.log('User signed out');
  //           });
  //       }
  //   }
};
</script>
