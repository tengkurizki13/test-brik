<script >
import { mapActions,mapWritableState } from 'pinia'
import { useAuthenticationStore } from '../stores/authentication'


export default {
  methods: {
    ...mapActions(useAuthenticationStore, ['login','sendLoginWithGoogle']),
    loginHandler(){
      this.login()
    },
    changePathToRegister(){
      this.$router.push("/register")
    },
  },
  computed: {
    ...mapWritableState(useAuthenticationStore, ['email','password'])
  }
}
</script>

<template>
 <section class="mt-md-5">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h1 class="text-bold text-center mb-md-5"><i class="bi bi-door-open-fill"></i> LOGIN</h1>
          <form id="register-form" @submit.prevent="loginHandler">
            <div class="mb-3">
              <label for="email" class="form-label text-secondary">Email</label>
              <input type="email" class="form-control shadow p-3 mb-md-5 bg-body-tertiary rounded" id="email" v-model="email" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label text-secondary">Password </label>
              <input type="password" class="form-control shadow p-3 mb-md-5 bg-body-tertiary rounded" id="password" v-model="password"/>
            </div>
            <div class="d-flex align-items-center">
            <button type="submit" class="btn btn-primary">Submit</button
          >
          <div class="text-bold ms-5 fst-italic">if you don't have an account,click <a href="#" @click.prevent="changePathToRegister">here</a></div>
          </div>
         <br />
          </form>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </section>
</template>
