<template>
<v-card max-width="600px">
            <v-card-title >
                <h2>Sign In</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Email" v-model="email" prepend-icon="email" ></v-text-field>
                    <v-text-field label="Password" v-model="password" prepend-icon="lock" ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" @click="Login">Login Here</v-btn>
                    <v-spacer></v-spacer>
                    <!-- <span class="grey--text">go back to <router-link to="">login</router-link></span> -->
                </v-form>
            </v-card-text>
        </v-card>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''

        };
    },
    methods: {
        Login: function() {
           
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    alert("Well done! You are now logged in");
                    console.log(user);
                },
                function(error) {
                    alert('Oops. ' + err.message)
                }
            );
            
        },
    }
    
}
</script>
