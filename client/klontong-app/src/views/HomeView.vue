<script>
import ProductCard from '../components/ProductCard.vue'
import Navbar from '../components/Navbar.vue'
import { mapActions,mapState } from 'pinia'
import { useProductStore } from '../stores/product'


export default {
  components: {
    ProductCard,
    Navbar
  },
  data() {
    return {
      currentPagination: 0,
      search: ""
    }
  },
  methods: {
    ...mapActions(useProductStore, ['getProducts']),
    findByFilter(){
      this.getProducts(this.search)
    }
  },
  computed: {
    ...mapState(useProductStore, ['products'])
  },
  created(){
    this.getProducts()
  }
}
</script>

<template>
  <Navbar/>
  <div class="container">
    <div class="row mb-5">
      <div class="col-5"> 
        <form class="d-flex" role="search" @submit.prevent="findByFilter">
        <input v-model="search" class="form-control me-2" type="search" placeholder="filter by title" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
       </form>
      </div>
    </div>
    <div class="">
      <div class="row d-flex flex-wrap justify-content-between">
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
          <div class="row mb-5" v-if="products.length === 0">
            <div class="col-12">
              <h1 class="text-bold" >DATA NOT FOUND</h1>
            </div>
          </div>
      </div>
  </div>
  </div>
</template>
