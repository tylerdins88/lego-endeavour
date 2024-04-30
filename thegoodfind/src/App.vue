<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="banner"
      src="@/assets/basephotos/lego-banner.jpg"
      width="400"
      height="300"
    />

    <div class="wrapper">
      <h1>LEGO Loot LAIR</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/minifigs">Minifigs</RouterLink>
        <RouterLink to="/sets">Sets</RouterLink>
        <RouterLink to="/bulklego">Bulk Lego</RouterLink>
        <RouterLink to="/unique">Unique Pieces</RouterLink>
        <RouterLink to="/instructions">Instructions</RouterLink>
        <RouterLink to="/pastitems">Past Items</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.banner {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  text-align: center;
  font-size: 48px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
