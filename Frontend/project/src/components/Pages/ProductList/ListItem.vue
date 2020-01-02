<template>
    <div class="card">
    <div class="card-body">
      <div class="image-placeholder"></div>
      <h5 class="card-title">Product Name</h5>
      <p class="card-text">Additional info</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Price</small>
    </div>
  </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style scoped>
.image-placeholder {
    width: 100%;
    height: 20vw;
    background-color: grey;
    margin-bottom: 10px
}
</style>