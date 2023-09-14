import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    url: 'http://localhost:3000',
    products: [],
    totalPage: 0,
    product: {},
    categoryName: '',
    sku: '',
    name: '',
    description: '',
    weight: '',
    width: '',
    length: '',
    height: '',
    image: '',
    harga: ''
  }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    async getProducts(page = 0, search = '') {
      try {
        let products = await axios({
          method: 'get',
          url: this.url + `/products?page=${page}&search=${search}`
        })
        this.products = products.data.rows
        this.totalPage = Math.ceil(products.data.count / 6)
      } catch (error) {
        console.log(error)
      }
    },
    async getProductDetail(id) {
      try {
        let product = await axios({
          method: 'get',
          url: this.url + `/products/` + id
        })
        console.log(product.data)
        this.product = product.data
      } catch (error) {
        console.log(error)
      }
    },
    async addProduct() {
      try {
        await axios({
          method: 'post',
          url: this.url + `/products`,
          data: {
            categoryName: this.categoryName,
            sku: this.sku,
            name: this.name,
            description: this.description,
            weight: this.weight,
            width: this.width,
            length: this.length,
            height: this.height,
            image: this.image,
            harga: this.harga
          }
        })
        this.categoryName = ''
        this.sku = ''
        this.name = ''
        this.description = ''
        this.weight = ''
        this.width = ''
        this.length = ''
        this.height = ''
        this.image = ''
        this.harga = ''
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'add product successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/')
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: `${error.response.data.message}`
        })
      }
    }
  }
})
