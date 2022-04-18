<template>
  <div>
    <h1>Movie</h1>
    <nuxt-link to="/">Back Home</nuxt-link>

    <div v-if="movie">
      <p>Title: {{ movie.title }}</p>
    </div>
  </div>
</template>

<script setup>
  const $route = useRoute()
  const { data: movie } = useAsyncData(`movie:${$route.params.id}`, () => $fetch(`/api/movie/${$route.params.id}`))

  // TODO: Display proper 404 when accessing unknown movie id

  // Requirements:
  // - Using default error page - big "404" with small "Page not found: /movie/42" - just like native nuxt 404
  // - On all types of navigation:
  //   a) Home -> Movie/42 (client)
  //   b) Home -> Movie/42 -> Home -> Movie/42 (client + cache)
  //   c) Movie/42 (server)
  //   d) Movie/42 -> Home -> Movie/42 (server into client + cache)
  // - Proper status code and status message when SSR (404, Not Found)
</script>
