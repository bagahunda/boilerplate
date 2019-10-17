<template>
  <div class="posts">
    <h1>Posts page</h1>
    <p>Posts info from store</p>
    <div v-for="post in posts" :key="post.id">
      {{post.title}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters({
      posts: 'posts/getAllPosts'
    })
  }
}
</script>
