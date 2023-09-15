<script>
import { RouterLink } from 'vue-router'
import { mapActions } from 'pinia'
import { useAuthenticationStore } from '../stores/authentication'


export default {
  data(){
    return{
      isLogin:localStorage.access_token 
    }
  },
  methods: {
    ...mapActions(useAuthenticationStore, ['logout']),
    logoutHandler(){
      this.isLogin= false
      this.logout()
    },
    changePathToHome(){
      this.$router.push("/")
    },
  }
}
</script>
<template>
   <nav
    class="navbar navbar-expand-lg bg-light shadow-lg p-3 mb-5 bg-body rounded"
  >
    <div class="container-fluid">
      <img src="@/assets/icons/logo-teacher.jpg" width="30"  @click="changePathToHome"/>
      <span class="text-bold text-primery"> My TOKO</span>
      <div class="collapse navbar-collapse ms-5" >
        <div class="ms-auto">
          <div class="navbar-nav " id="nav">
            <a id="nav-dashboard" class="nav-link active  text-bold" aria-current="page" href="#"> <RouterLink to="/"><i class="bi bi-house-add-fill"></i> Home</RouterLink></a
            >
            <a id="nav-dashboard" class="nav-link active  text-danger" aria-current="page" href="#" @click.prevent="logoutHandler"> <i class="bi bi-box-arrow-right"></i>Logout</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
