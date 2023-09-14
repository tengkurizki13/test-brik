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
      search: "",
    }
  },
  methods: {
    ...mapActions(useProductStore, ['getProducts']),
    changePaginationAndSearch(page){
      this.currentPagination = page
      this.getProducts(page,this.search)
    },
    changePathToForm(){
      this.$router.push("/from-add")
    },
  },
  computed: {
    ...mapState(useProductStore, ['products','totalPage'])
  },
  created(){
    this.getProducts(0)
  }
}
</script>

<template>
  <Navbar/>
  <div class="container">
    <div class="row mb-5">
      <div class="col-5"> 
        <form class="d-flex" role="search" @submit.prevent="changePaginationAndSearch()">
        <input v-model="search" class="form-control me-2" type="search" placeholder="search" aria-label="Search">
        <button class="btn btn-outline-success me-5" type="submit">Search</button>
      </form>
    </div>
    <div class="col-3">
      <button class="btn btn-primary" type="submit"><i class="bi bi-plus-circle" @click.prevent="changePathToForm"> add product</i></button>
    </div>
    </div>
    <div class="">
      <div class="row d-flex flex-wrap justify-content-start">
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
          <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" v-if="currentPagination !== 0 && totalPage !== 1"><a class="page-link" href="#" @click.prevent="changePaginationAndSearch(currentPagination - 1)">Previous</a></li>
            <li class="page-item" v-for="n in totalPage"><a class="page-link" href="#" @click.prevent="changePaginationAndSearch(n - 1)">{{n}}</a></li>
            <li class="page-item" v-if="currentPagination + 1 !== totalPage && totalPage !== 1"  @click.prevent="changePaginationAndSearch(currentPagination + 1)"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
          <div class="row mb-5" v-if="products.length === 0">
            <div class="col-12">
              <h1 class="text-bold" >DATA NOT FOUND</h1>
            </div>
          </div>
      </div>
  </div>
  </div>
</template>
