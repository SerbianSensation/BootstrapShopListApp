<!-- Item component, simplifies Items.vue because we can just call this component inside the v-for loop !-->
<!-- This reduces the amount of code and makes it cleaner and easier to understand !-->

<template>
  <div class="list-group-item text-left">
    <h3 class="pad-right">{{ item.name }}</h3>
    <button type="button" class="large-txt-dark-button btn btn-primary pull-right add-cart-btn" @click="$emit('addToCart', item)">Add to Cart</button>
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
.pad-right {
  padding-right: 12px;
}
.add-cart-btn {
  position: relative;
  bottom: 35px;
}
</style>

