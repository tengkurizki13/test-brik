<script>

import Navbar from '../components/Navbar.vue'
import { mapActions,mapState } from 'pinia'
import { useProductStore } from '../stores/product'


export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(useProductStore, ['getProductDetail'])
  },
  computed: {
    ...mapState(useProductStore, ['product'])
  },
  created(){
    this.getProductDetail(this.$route.params.id)
  },

}
</script>

<template>
  <Navbar/>
  <div class="row px-3">
    <div class="container shadow p-3 mb-5 bg-body-tertiary rounded me-3 ">
      <div class="row">
      <div class="col-6">
        <img :src=product.image class="card-img-top" alt="..." >
      </div>
      <div class="col-6">
        <p>{{ product.description }}</p>
        <button class="btn btn-success text-bold text-white" @click="goToDetailCourse">Return to home</button>
      </div>
     </div>
    </div>
  </div>
</template>
