<template>
  <div class="container">
    <div v-if="errorData" class="alert alert-danger" role="alert">
      {{ errorData.msg }}
    </div>
    <form>
      <h1 class="title">FNF</h1><br>
      <h2>FNF is Not Facebook</h2><br>
      <h4>LOGIN</h4><br>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="email@email.com">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
          placeholder="********">
      </div>
      <button @click="login($event)" type="submit" class="btn btn-primary">Login</button><br><br>
      <router-link to="/register">Register</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { email: "", password: "", errorData: null };
  },
  methods: {
    async login(event) {
      if (event) event.preventDefault();
      try {
        const body = {
          email: this.email,
          password: this.password
        }
        const { data } = await axios.post('http://localhost:8080/api/auth/login', body);

        localStorage.setItem('name', data.user.name);
        localStorage.setItem('token', data.token);

        this.$router.push("/posts");
      } catch (error) {
        const { data } = error.response;
        this.errorData = {
          msg: data.msg || data.errors[0].msg
        }
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>