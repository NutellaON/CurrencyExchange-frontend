<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set the minimum height to fill the viewport */
}
main {
  flex-grow: 1; /* Allow the main content to expand and take available space */
}
body {
  margin: 0;
  padding: 0;
}
</style>
