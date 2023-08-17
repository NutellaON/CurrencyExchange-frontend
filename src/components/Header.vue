<template>
  <header class="app-header">
        <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/eur-to-usd">EUR to USD</router-link></li>
        <li><router-link to="/eur-to-gbp">EUR to GBP</router-link></li>
        <li><router-link to="/eur-to-aud">EUR to AUD</router-link></li>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
/* Add CSS styling specific to the header component */
.navbar {
  background-color: #333;
  padding: 10px 0;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-list li {
  margin: 0 10px;
}

.nav-list li a {
  text-decoration: none;
  color: #fff;
}
</style>
