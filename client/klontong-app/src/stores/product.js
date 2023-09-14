import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    url: 'http://localhost:3000',
    products: [],
    product: {}
  }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    async getProducts() {
      try {
        let products = await axios({
          method: 'get',
          url: this.url + `/products`
        })
        console.log(products)
        this.products = products.data
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
    }
  }
})
