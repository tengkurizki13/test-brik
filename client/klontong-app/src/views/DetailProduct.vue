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
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <img :src=product.image class="card-img-top" alt="..." height="380" width="200">
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h1 class="fw-bold">{{ product.name }}</h1><hr>
<pre>
Description:
{{ product.description }}
SKU : {{ product.sku }}
WEIGHT : {{ product.weight }}
WIDTH : {{ product.width }}
LENGTH : {{ product.length}}
HEIGHT : {{ product.height }}
PRICE : Rp. {{ product.harga }}
</pre>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>
