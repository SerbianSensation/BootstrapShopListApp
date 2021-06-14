<template>
  <div class="uiv text-center">
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
              <span>{{ cart.length }}</span>
            </router-link>
          </li>
        </navbar-nav>
      </template>
    </navbar>
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
.text-center {
  text-align: center;
}

.pad {
  padding: 40px;
}

.text-left {
  text-align: left;
  padding: 20px;
}

.large-txt-dark-button {
  font-size: large;
  background-color: black;
  color: white;
}

.icon {
  width: 25px;
  height: 25px;
  position: relative;
  top: 20px;
  cursor: pointer;
}
</style>
