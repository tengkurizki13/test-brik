<script>
import { mapActions } from 'pinia'
import { useProductStore } from '../stores/product'

export default {
  props:['product'],
  methods: {
    goToDetailProduct(){
      this.$router.push(`/products/` + this.product.id)
    },
  }
}
</script>
<template>
  <div class="col-4">
  <div class="shadow p-3 mb-5 bg-body-tertiary rounded me-3">
    <img :src=product.image class="card-img-top" alt="...">
      <h1 class="text-bold text-primery">{{ product.name }}</h1>
      <h2 class="text-bold text-secondary">Rp. {{product.harga}}</h2>
      <button class="btn btn-primary text-bold text-primery" @click="goToDetailProduct">Show  Detail</button>
    </div>
  </div>
</template>
