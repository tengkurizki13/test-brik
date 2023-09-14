import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({
    url: 'http://localhost:3000',
    email: '',
    password: ''
  }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    async register() {
      try {
        await axios({
          method: 'post',
          url: this.url + `/user/register`,
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.router.push('/login')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'register successfully',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: `${error.response.data.message}`
        })
      }
    },
    async login() {
      try {
        let loginUser = await axios({
          method: 'post',
          url: this.url + `/user/login`,
          data: {
            email: this.email,
            password: this.password
          }
        })

        localStorage.setItem('access_token', loginUser.data[0].access_token)
        this.router.push('/')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'login successfully',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.data.message}`
        })
      }
    },
    logout() {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          Swal.fire('logout!', 'you Are off the page.', 'success')
          this.router.push('/login')
        }
      })
    }
  }
})
