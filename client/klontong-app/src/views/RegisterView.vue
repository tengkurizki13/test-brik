<script >
import { mapActions,mapWritableState } from 'pinia'
import { useAuthenticationStore } from '../stores/authentication'


export default {
  methods: {
    ...mapActions(useAuthenticationStore, ['register']),
    createAccount(){
      this.register()
    },
    changePathTologin(){
      this.$router.push("/login")
    },
  },
  computed: {
    ...mapWritableState(useAuthenticationStore, ['email','password'])
  }
}
</script>

<template>
 <section id="register" class="mt-5">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h1 class="text-bold text-center mb-5"> <i class="bi bi-box-arrow-in-right"></i> REGISTER</h1>
          <form id="register-form" @submit.prevent="createAccount">
            <div class="mb-3">
              <label for="email" class="form-label text-secondary">New Email</label>
              <input type="email" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="register-email" v-model="email" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label text-secondary">New Password </label>
              <input type="password" class="form-control shadow p-3 mb-5 bg-body-tertiary rounded" id="register-password" v-model="password"/>
            </div>
            <button type="submit" class="btn btn-primary mb-5">Submit</button
            ><br />
            <div class="text-bold  fst-italic">if you  have an account,click <a href="#" @click.prevent="changePathTologin">here</a></div>
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>
    </section>
</template>
