<template>
  <div>
    <h2 class="pad" v-if="!cart.length">Shopping Cart is empty</h2>
    <div v-else>
      <h2 class="pad">Shopping Cart</h2>
      <!-- search bar !-->
      <b-icon-search></b-icon-search>
      <input type="text" v-model="searchIncomplete" placeholder="Search Incomplete Items" /> <br>
      <!-- loop through non-completed items first !-->
      <h3 class="text-left">Incomplete Items</h3>
      <div v-for="item in filterIncompleteItems" :key="item.id">
        <!-- insert CartItem component (cart-item because HTML tags translate it to kebab case) !-->
        <!-- pass item to the CartItem component with :item="item" !-->
        <cart-item :item="item" @incOrder="incOrder" @decOrder="decOrder" @updateComplete="updateComplete" @deleteItem="promptDelete"></cart-item>
      </div>

      <br />
      <!-- search bar !-->
      <b-icon-search></b-icon-search>
      <input type="text" v-model="searchComplete" placeholder="Search Complete Items" /> <br>
      <!-- loop through completed items !-->
      <h3 class="text-left">Completed Items</h3>
      <div v-for="item in filterCompleteItems" :key="item.id">
        <!-- insert CartItem component (cart-item because HTML tags translate it to kebab case) !-->
        <!-- pass item to the CartItem component with :item="item" !-->
        <cart-item :item="item" @incOrder="incOrder" @decOrder="decOrder" @updateComplete="updateComplete" @deleteItem="promptDelete"></cart-item>
      </div>

      <delete-modal :triggerDelete="triggerDelete" @cancelDelete="cancelDelete" @delete="removeItem"></delete-modal>

      <br />
      <!-- add button to clear cart !-->
      <button type="button" class="large-txt-dark-button btn btn-danger" @click="clearCart()">Clear Cart</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import DeleteModal from "../components/DeleteModal";
import CartItem from "../components/CartItem";

export default {
  components: {
    deleteModal: DeleteModal,
    cartItem: CartItem
  },
  data() {
    return {
      searchComplete: '',
      searchIncomplete: '',
      triggerDelete: false,
      currentItem: Object
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
    ...mapActions(["removeFromCart", "updateComplete", "clearCart", "incOrder", "decOrder"]),
    promptDelete(item) {
      this.currentItem = item;
      this.triggerDelete = true;
    },
    removeItem() {
      this.removeFromCart(this.currentItem);
      this.triggerDelete = false;
      this.currentItem = Object;
    },
    cancelDelete() {
      this.currentItem = Object;
      this.triggerDelete = false;
    }
  },
  mounted() {
    this.$store.dispatch("getCart");
  }
};
</script>

<style>
.pad-left {
  padding-left: 25px;
}
</style>
