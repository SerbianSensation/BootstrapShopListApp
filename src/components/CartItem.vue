<!-- CartItem component, slightly different than an item. Has the edit icons to its right. To be used in Cart.vue !-->
<!-- This reduces the amount of code and makes it cleaner and easier to understand !-->

<template>
  <div class="list-group-item text-left">
      <h3 class="inline-block">{{ item.name }}</h3>
      <span v-if="item.complete" class="pad-left complete inline">Complete</span>
      <span v-else class="pad-left incomplete inline">Incomplete</span>
      <span class="pad-left">Quantity: {{ item.order }}</span>
      <!-- icons off to the right !-->
      <div class="pull-right">
        <b-icon-plus-circle class="icon" @click="$emit('incOrder', item.id)"></b-icon-plus-circle>
        <b-icon-patch-minus class="icon" @click="$emit('decOrder', item.id)"></b-icon-patch-minus>
        <b-icon-x-circle-fill v-if="item.complete" class="icon" @click="$emit('updateComplete', item.id)"></b-icon-x-circle-fill>
        <b-icon-check-circle v-else class="icon" @click="$emit('updateComplete', item.id)"></b-icon-check-circle>
        <router-link :to="{ name: 'editForm', params: { id: item.id } }">
          <b-icon-pencil-fill class="icon"></b-icon-pencil-fill>
        </router-link>
        <b-icon-trash-fill class="icon" @click="$emit('deleteItem', item);"></b-icon-trash-fill>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style>
.complete {
  color: green;
}
.incomplete {
  color: red;
}
.inline {
  display: inline;
}
.inline-block {
  display: inline-block;
}
</style>
