<template>
    <v-card max-width="600px">
            <v-card-title >
                <h2>Let's create a new account!</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Email" v-model="email" prepend-icon="email" ></v-text-field>
                    <v-text-field label="Password" v-model="password" prepend-icon="lock" ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" @click="Signup">Sign Up</v-btn>
                    <v-spacer></v-spacer>
                    <!-- <span class="grey--text">go back to <router-link to="">login</router-link></span> -->
                </v-form>
            </v-card-text>
        </v-card>
</template>

<script>
// import db from '@/fb';
import firebase from 'firebase';
export default {
    name: 'Signup',
    data() {
        return {
            email: '',
            password:''
        }
    },
    methods: {
        Signup: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (user) {
                    alert('Your account has been created!')
                },
                function (err) {
                    alert('Oops. ', + err.message )
                }
            );
        }
    }
}
</script>
