<template>
  <header class="app-header">
        <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/exchange-rates/USD">EUR to USD</router-link></li>
        <li><router-link to="/exchange-rates/GBP">EUR to GBP</router-link></li>
        <li><router-link to="/exchange-rates/AUD">EUR to AUD</router-link></li>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>

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
  text-decoration: underline;
  color: DarkSalmon;
  font-weight: bold;
}
</style>
