<template>
    <div>
        <Navbar />
        <div v-for="post in posts" :key="post.pid" class="post">
            <div class="post-body">
                <h5 class="post-title">{{ post.name }}</h5>
                <p class="post-text">{{ post.msg }}</p>
                <p class="post-text">{{ post.date }}</p>
            </div>
            <img src="https://previews.123rf.com/images/apoev/apoev1903/apoev190300009/124806570-persona-hombre-de-marcador-de-posici%C3%B3n-de-foto-gris-en-camiseta-sobre-fondo-gris.jpg"
                class="img">
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