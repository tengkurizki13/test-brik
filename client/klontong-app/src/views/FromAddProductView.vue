<script >
import { mapActions,mapWritableState } from 'pinia'
import { useProductStore } from '../stores/product'
import Navbar from '../components/Navbar.vue'


export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(useProductStore, ['addProduct']),
    addProductHandler(){
      this.addProduct()
    },
    changePathToHome(){
      this.$router.push("/")
    },
  },
  computed: {
    ...mapWritableState(useProductStore, ['categoryName','sku','name','description','weight','width','length','height','image','harga'])
  }
}
</script>

<template>
  <Navbar/>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <h1 class="text-bold text-center mb-5">FORM ADD PRODUCT</h1>
          <form id="register-form" @submit.prevent="addProductHandler">
            <div class="">
              <label for="categoryName" class="form-label text-secondary">New Category Name</label>
              <input type="text" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="categoryName" v-model="categoryName" placeholder="" />
            </div>
            <div class="">
              <label for="sku" class="form-label text-secondary">
                New SKU</label>
              <input type="text" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="sku" v-model="sku" />
            </div>
            <div class="">
              <label for="name" class="form-label text-secondary">
                New Name</label>
              <input type="text" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="name" v-model="name" />
            </div>
            <div class="">
              <label for="description" class="form-label text-secondary">
                New Description</label>
              <input type="text" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="description" v-model="description" />
            </div>
            <div class="">
              <label for="weight" class="form-label text-secondary">
                New Weight</label>
              <input type="number" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="weight" v-model="weight" />
            </div>
            <div class="">
              <label for="width" class="form-label text-secondary">
                New Width</label>
              <input type="number" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="width" v-model="width" />
            </div>
            <div class="">
              <label for="length" class="form-label text-secondary">
                New Length</label>
              <input type="number" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="length" v-model="length" />
            </div>
            <div class="">
              <label for="height" class="form-label text-secondary">
                New Height</label>
              <input type="number" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="height" v-model="height" />
            </div>
            <div class="">
              <label for="image" class="form-label text-secondary">
                New Image</label>
              <input type="text" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="image" v-model="image" />
            </div>
            <div class="">
              <label for="harga" class="form-label text-secondary">
                New Price</label>
              <input type="number" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="harga" v-model="harga" />
            </div>
            <div class="d-flex align-items-center">
            <button type="text" class="btn btn-primary">Submit</button
          >
          <button type="text" class="btn btn-danger" @click="changePathToHome">Cancel</button
          >
          </div>
         <br />
          </form>
        </div>
        <div class="col-4">
        </div>
      </div>
</template>
