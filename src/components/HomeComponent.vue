<template>
  <h1>Daily currency exchanger rate!</h1>
  <div class="container">
    <div class="currency-box" @click="goToExchangeRate('USD')">
      EUR to USD Exchange Rate
    </div>
    <div class="currency-box" @click="goToExchangeRate('GBP')">
      EUR to GBP Exchange Rate
    </div>
    <div class="currency-box" @click="goToExchangeRate('AUD')">
      EUR to AUD Exchange Rate
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeComponent',
  methods: {
    goToExchangeRate(currency) {
      this.$router.push(`/exchange-rates/${currency}`);
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
  padding-bottom: 50px;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.currency-box {
  padding: 10px 40px;
  border: 1px solid #ccc;
  margin: 10px;
  cursor: pointer;
}
</style>