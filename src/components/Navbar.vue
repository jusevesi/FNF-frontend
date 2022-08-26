<template>
    <nav class="navbar navbar-expand-lg bg-light" style="box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">FNF</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/profile">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/posts">Posts</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
</style>