<template>
    <div class="container">
        <div v-if="errorData" class="alert alert-danger" role="alert">
            {{ errorData.msg }}
        </div>
        <form>
            <h1 class="title">FNF</h1><br>
            <h2>FNF is Not Facebook</h2><br>
            <h4>REGISTER</h4><br>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="exampleInputName"
                    aria-describedby="emailHelp" placeholder="Name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="email@email.com">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                    placeholder="********">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Gender</label>
                <select v-model="gender" class="form-select" aria-label="Default select example">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderqueer/Non-Binary">Genderqueer/Non-Binary</option>
                    <option value="Prefer not to disclose">Prefer not to disclose</option>
                </select>
            </div>
            <button @click="register($event)" type="submit" class="btn btn-primary">Register</button><br><br>
            <router-link to="/login">I already have an account</router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return { email: "", password: "", gender: "", name: "", errorData: null };
    },
    methods: {
        async register(event) {

            if (event) event.preventDefault();

            try {
                const body = {
                    email: this.email,
                    password: this.password,
                    gender: this.gender,
                    name: this.name
                }
                const response = await axios.post('http://localhost:8080/api/users', body);
                this.$router.push('/login');
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
.container {
    margin-top: 20px;
    text-align: center;
    width: 500px;
}

.title {
    color: white;
    font-family: 'Calibri' Bold;
    font-size: 100px;
    background-color: #1877F2;
    border-radius: 20px;
}
</style>