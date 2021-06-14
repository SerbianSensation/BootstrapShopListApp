<!-- CartItem component, slightly different than an item. Has the edit icons to its right. To be used in Cart.vue !-->
<!-- This reduces the amount of code and makes it cleaner and easier to understand !-->

<template>
  <div class="list-group-item text-left">
    <span class="pad-right">{{ item.name }} Complete: {{ item.complete }} Quantity: {{ item.order }}</span>
    <b-icon-plus-circle font-scale="1.25" @click="$emit('incOrder', item.id)"></b-icon-plus-circle>
    <b-icon-x-circle-fill v-if="item.complete" class="pad-left" font-scale="2.25" @click="$emit('updateComplete', item.id)"></b-icon-x-circle-fill>
    <b-icon-check-circle v-else class="pad-left" font-scale="2.25" @click="$emit('updateComplete', item.id)"></b-icon-check-circle>
    <router-link :to="{ name: 'editForm', params: { id: item.id } }">
      <b-icon-pencil-fill class="pad-left" font-scale="2.25"></b-icon-pencil-fill>
    </router-link>
    <b-icon-trash-fill class="pad-left" font-scale="2.25" @click="$emit('removeFromCart', item)"></b-icon-trash-fill>
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
</style>

