<template>
  <!-- Delete Modal !-->
  <div class="text-center" v-if="triggerDelete">
    <div class="modal fade show in" id="myModal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" @click="$emit('cancelDelete')">&times;</button>
            <h4 class="modal-title">Are you sure?</h4>
          </div>
          <div class="modal-body">
            <p>Deleting an item from the cart cannot be undone.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="$emit('cancelDelete')">No</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" @click="$emit('delete')">Yes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: {
    triggerDelete: {
      type: Boolean
    }
  }
}
</script>

