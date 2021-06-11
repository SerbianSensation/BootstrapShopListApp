<template>
  <div class="uiv text-center">
    <!-- link to google material icons (used for cart page mainly) !-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
    <header>
      <h1 class="pad">Stefan Gligorevic's Shopping List Site</h1>
    </header>

    <navbar inverse>
      <template slot="default">
        <navbar-nav>
          <li><router-link class="large-button-txt" to="/">Home</router-link></li>
          <li><router-link class="large-button-txt" to="/items">Items</router-link></li>
          <li>
            <router-link class="large-button-txt" to="/cart">
              <b-icon-cart4 font-scale="1.25"></b-icon-cart4>
            </router-link>
          </li>
        </navbar-nav>
      </template>
    </navbar>
    <!-- adding a nav toolbar with Vuetify
    <v-toolbar class="shrink">
      <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/items" text>Items</v-btn>
        <v-spacer></v-spacer>
        use a shopping cart icon to link to the cart
        also include a badge showing the number of items in the cart
        <router-link to="/cart">
          <v-badge color="grey lighten-1" overlap right :value="cart.length">
            <template #badge>
              {{cart.length}}
            </template>
            <v-icon large class="icon">shopping_cart</v-icon>
          </v-badge>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
    !-->
    <!-- add other pages using the router !-->
    <router-view/>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState(['cart'])
  },
  mounted() {
    this.$store.dispatch("getCart");
  }
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
.text-center {
  text-align: center;
}

.pad {
  padding: 40px;
}

.large-button-txt {
  font-size: large;
}

.icon {
  position: absolute;
  padding-top: 10px;
}
</style>
