<template>
    <div>
        <Navbar />
        <div class="createPost">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Post Now!</label>
                <textarea v-model="msg" class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="How do you feel today?, we live in a society indeed !!!"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Put an image link here!</label>
                <input v-model="img" class="form-control" id="exampleInputName" aria-describedby="emailHelp"
                    placeholder="http://www.kittens.com/">
            </div>
            <button @click="registerPost($event)" type="submit" class="btn btn-primary">Post</button><br><br>
        </div>
        <div v-for="post in posts" :key="post.pid" class="post">
            <div class="post-body">
                <h5 class="post-title">{{ post.name }}</h5>
                <p class="post-text">{{ post.msg }}</p>
                <p class="post-text">{{ post.date.slice(0, 10) }}</p>
            </div>
            <img v-if="post.img" :src="post.img" class="img">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue'

export default {

    components: { Navbar },

    data() {
        return { msg: "", img: "", posts: null };
    },
    created() {
        this.getPosts()
    },

    methods: {

        async getPosts() {
            try {
                const headers = {
                    "x-token": localStorage.getItem("token")
                }
                const { data } = await axios.get('http://localhost:8080/api/posts', { headers })
                this.posts = data.posts;
                console.log(this.posts);

            } catch (error) {
                console.log(error)
            }
        },

        async registerPost(event) {

            if (event) event.preventDefault();

            try {
                const name = localStorage.getItem("name")
                const body = {
                    name,
                    msg: this.msg,
                    img: this.img
                }
                const headers = {
                    "x-token": localStorage.getItem("token")
                }
                const response = await axios.post('http://localhost:8080/api/posts', body, { headers });
                location.reload();
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>
.post {
    margin: 30px auto;
    background: #fff;
    max-width: 600px;
    border-radius: 15px;
    padding: 25px 25px 15px 25px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

.createPost {
    margin: 30px auto;
    background: #fff;
    max-width: 600px;
    border-radius: 15px;
    padding: 25px 25px 15px 25px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

.img {
    border-radius: 10px;
    max-height: 300px;
    display: block;
    margin: auto;
    max-width: 400px;
}
</style>