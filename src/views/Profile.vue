<template>
    <div>
        <Navbar />
        <div v-for="post in posts" :key="post.pid" class="post">
            <div class="post-body">
                <h5 class="post-title">{{ post.name }}</h5>
                <p class="post-text">{{ post.msg }}</p>
                <p class="post-text">{{ post.date }}</p>
            </div>
            <img v-if="post.img" :src="post.img" class="img"><br>
            <button @click="login($event)" type="submit" class="btn btn-primary">Login</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue'

export default {

    components: { Navbar },

    data() {
        return { posts: null };
    },

    created() {
        this.getProfile()
    },

    methods: {
        async getProfile() {
            try {
                const headers = {
                    "x-token": localStorage.getItem("token")
                }
                const name = localStorage.getItem("name")

                const { data } = await axios.get(`http://localhost:8080/api/posts/profile/${name}`, { headers })
                this.posts = data.posts;
                console.log(this.posts);

            } catch (error) {
                console.log(error)
            }
        }
    }

}
</script>

<style>
</style>