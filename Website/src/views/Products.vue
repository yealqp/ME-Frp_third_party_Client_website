<template>
  <div class="products-page">
    <ProductView />
  </div>
</template>

<script>
import ProductView from '../components/ProductView.vue'

export default {
  name: 'Products',
  components: {
    ProductView
  }
}
</script>

<style scoped>
.products-page {
  width: 100%;
  min-height: 100vh;
}
</style>
