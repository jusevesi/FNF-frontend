<template>
    <div>
        <nav class="sidenav">
            <div class="container-fluid">
                <br><br>
                <div class="tweetTitle">Tweets</div><br><br>
                <div v-for="tweet in tweets" :key="tweet.id" class="tweets">
                    <ul>
                        <li>
                            <p class="post-text">{{ tweet.text }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="sidenav profilenav">
            <div class="container-fluid">
                <br><br>
                <div class="tweetTitle">Profile</div><br><br>
                <img :src="profileimg" alt="" class="profileimg"><br>
                <div class="info">
                    <p> {{ user.name }}</p><br>
                    <p> {{ user.email }}</p><br>
                </div>
            </div>
        </nav>
        <Navbar />
        <div v-for="post in posts" :key="post.pid" class="post">
            <div class="post-body">
                <h5 class="post-title">{{ post.name }}</h5>
                <p class="post-text">{{ post.msg }}</p>
                <p class="post-text">{{ post.date }}</p>
            </div>
            <img v-if="post.img" :src="post.img" class="img"><br>
            <button @click="deletePost(post.pid)" type="submit" class="btn btn-primary buttons">Delete</button>
            <!-- <button @click="showModal(post)" type="button" class="btn btn-primary buttons">Editar</button> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar.vue'

export default {

    components: { Navbar },

    data() {
        return { posts: null, tweets: null, user: {}, img: "", msg: "", profileimg: "" };
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
                const name = localStorage.getItem("name");

                const { data } = await axios.get(`http://localhost:8080/api/posts/profile/${name}`, { headers });
                console.log(data)
                this.profileimg = data.user.img || "https://previews.123rf.com/images/archivector/archivector1902/archivector190200146/117306334-abstract-sign-avatar-icon-profile-white-symbol-on-gray-circle-background-vector-illustration.jpg";
                this.user = data.user;
                this.posts = data.posts;
                this.tweets = data.tweets;

                console.log(this.posts);

            } catch (error) {
                console.log(error)
            }
        },
        async updatePost() {
            try {
                const headers = {
                    "x-token": localStorage.getItem("token")
                };
                const body = {
                    msg: this.msg,
                    img: this.img
                };
                const response = await axios.put('http://localhost:8080/api/posts', body, { headers });
                location.reload();
            } catch (error) {
                console.log(error)
            }
        },
        async deletePost(pid) {
            const headers = {
                "x-token": localStorage.getItem("token")
            };
            try {
                const response = await axios.delete(`http://localhost:8080/api/posts/${pid}`, { headers });
                location.reload();
            } catch (error) {
                console.log(error)
            }
        }
    }

}
</script>

<style>
.sidenav {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    height: 100%;
    /* 100% Full-height */
    width: 25%;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    top: 0;
    /* Stay at the top */
    right: 0;
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
    /* Place content 60px from the top */
    transition: 0.5s;
    /* 0.5 second transition effect to slide in the sidenav */
}

.profilenav {
    left: 0;
}

.tweetTitle {
    font-size: 25px;
    padding: 0px 0px 0px 20px;
    color: #1DA1F2;
}

.tweets {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
}

.buttons {
    margin-left: 10px;
    background: #1DA1F2;
    border-color: #1DA1F2
}

.profileimg {
    object-fit: cover;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: auto;
    display: block;
}

.info{
    text-align: center;
}

.post{
    max-width: 40%;
}

</style>