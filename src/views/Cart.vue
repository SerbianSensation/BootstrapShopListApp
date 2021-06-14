<template>
  <!-- <v-list> !-->
  <div>
    <h2 class="pad" v-if="!cart.length">Shopping Cart is empty</h2>
    <div v-else>
      <h2 class="pad">Shopping Cart</h2>
      <!-- search bar !-->
      <b-icon-search></b-icon-search>
      <input type="text" v-model="searchIncomplete" placeholder="Search Incomplete Items" /> <br>
      <!-- loop through non-completed items first !-->
      <h3 class="text-left">Incomplete Items</h3>
      <div v-for="item in filterIncompleteItems" :key="item.id" @click="{}">
        <div class="list-group-item text-left">
          <h3 style="display: inline-block">{{ item.name }}</h3>
          <span class="pad-left">Complete: {{ item.complete }} Quantity: {{ item.order }}</span>
          <div class="pull-right">
            <b-icon-plus-circle class="icon" @click="incOrder(item.id)"></b-icon-plus-circle>
            <b-icon-check-circle class="pad-left icon" @click="updateComplete(item.id)"></b-icon-check-circle>
            <router-link :to="{ name: 'editForm', params: { id: item.id } }">
              <b-icon-pencil-fill class="pad-left icon"></b-icon-pencil-fill>
            </router-link>
            <b-icon-trash-fill class="pad-left icon" @click="removeFromCart(item)"></b-icon-trash-fill>
          </div>
        </div>
      </div>

      <!-- search bar !-->
      <b-icon-search></b-icon-search>
      <input type="text" v-model="searchComplete" placeholder="Search Complete Items" /> <br>
      <!-- loop through completed items !-->
      <h3 class="text-left">Completed Items</h3>
      <div v-for="item in filterCompleteItems" :key="item.id" @click="{}">
        <div class="list-group-item text-left">
          <h3 style="display: inline-block">{{ item.name }}</h3>
          <span class="pad-left">Complete: {{ item.complete }} Quantity: {{ item.order }}</span>
          <div class="pull-right">
            <b-icon-plus-circle class="icon" @click="incOrder(item.id)"></b-icon-plus-circle>
            <b-icon-x-circle-fill class="pad-left icon" @click="updateComplete(item.id)"></b-icon-x-circle-fill>
            <router-link :to="{ name: 'editForm', params: { id: item.id } }">
              <b-icon-pencil-fill class="pad-left icon" font-scale="2.25"></b-icon-pencil-fill>
            </router-link>
            <b-icon-trash-fill class="pad-left icon" @click="removeFromCart(item)"></b-icon-trash-fill>
          </div>
        </div>
      </div>

      <!-- add button to clear cart !-->
      <button type="button" class="large-txt-dark-button btn btn-danger" @click="clearCart()">Clear Cart</button>
    </div>
  </div>

  <!-- </v-list> !-->
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchComplete: '',
      searchIncomplete: ''
    };
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['completedItems', 'nonCompletedItems']),
    //filter complete and incomplete items for search bar
    filterCompleteItems: function () {
      //return items matching the current filter in search bar
      return this.completedItems.filter((item) => {
        return item.name.toLowerCase().match(this.searchComplete.toLowerCase());
      })
    },
    filterIncompleteItems: function () {
      //return items matching the current filter in search bar
      return this.nonCompletedItems.filter((item) => {
        return item.name.toLowerCase().match(this.searchIncomplete.toLowerCase());
      })
    }
  },
  methods: {
    ...mapActions(["removeFromCart", "updateComplete", "updateCurrentItem", "clearCart", "incOrder"])
  },
  mounted() {
    this.$store.dispatch("getCart");
  }
};

/* Old vuetify
<v-list-item v-for="item in filterIncompleteItems" :key="item.id" @click="{}">
        <!-- Item contents !-->
        <v-list-item-content>{{ item.name }}</v-list-item-content>
        <v-list-item-content>Complete: {{ item.complete }}</v-list-item-content>
        <v-list-item-content>Quantity: {{ item.order }}</v-list-item-content>

        <v-list-item-action>
          <b-icon-plus-circle font-scale="1.25" @click="incOrder(item.id)"></b-icon-plus-circle>
        </v-list-item-action>

        <v-list-item-action>
          <b-icon-check-circle class="pad-left" font-scale="2.25" @click="updateComplete(item.id)"></b-icon-check-circle>
        </v-list-item-action>

        <v-list-item-action>
          <router-link :to="{ name: 'editForm', params: { id: item.id } }">
            <b-icon-pencil-fill class="pad-left" font-scale="2.25"></b-icon-pencil-fill>
          </router-link>
        </v-list-item-action>

        <v-list-item-action>
          <b-icon-trash-fill class="pad-left" font-scale="2.25" @click="removeFromCart(item)"></b-icon-trash-fill>
        </v-list-item-action>
      </v-list-item>

      <v-list-item v-for="item in filterCompleteItems" :key="item.id" @click="{}">
        <!-- Item contents !-->
        <v-list-item-content>{{ item.name }}</v-list-item-content>
        <v-list-item-content>Complete: {{ item.complete }}</v-list-item-content>
        <v-list-item-content>Quantity: {{ item.order }}</v-list-item-content>

        <v-list-item-action>
          <b-icon-plus-circle font-scale="1.25" @click="incOrder(item.id)"></b-icon-plus-circle>
        </v-list-item-action>

        <v-list-item-action>
          <b-icon-x-circle-fill class="pad-left" font-scale="2.25" @click="updateComplete(item.id)"></b-icon-x-circle-fill>
        </v-list-item-action>

        <v-list-item-action>
          <router-link :to="{ name: 'editForm', params: { id: item.id } }">
            <b-icon-pencil-fill class="pad-left" font-scale="2.25"></b-icon-pencil-fill>
          </router-link>
        </v-list-item-action>

        <v-list-item-action>
          <b-icon-trash-fill class="pad-left" font-scale="2.25" @click="removeFromCart(item)"></b-icon-trash-fill>
        </v-list-item-action>
      </v-list-item>
 */
</script>

<style>
.pad-left {
  padding-left: 25px;
}
</style>
