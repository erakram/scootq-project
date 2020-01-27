<template>
  <div class="account">
    <h1 class="subheading grey--text">Account</h1>
    <v-container class="my-5">
        Content
    </v-container>
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed class="pink">Click Me</v-btn>
    <v-btn flat color="pink">Click Me</v-btn>
    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Email Me</span>
    </v-btn>
    
    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email Me</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn class="hidden-md-and-down pink white--text">Breakpoint down</v-btn>
    <v-btn class="hidden-md-and-up pink white--text">Breakpoint up</v-btn>
    <v-btn class="hidden-sm-only pink white--text">Breakpoint for SM</v-btn>
  </div>
</template>

<script>
export default {
    
}
</script>

