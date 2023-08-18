<template>
  <div class="exchange-rates">
    <h1 class="exchange-rates__title">1 EUR to {{ selectedCurrency }} to Exchange Rate</h1>
    <div class="exchange-rates__last-updated">Last updated at: {{lastUpdated}}</div>
    <div class="exchange-rates__pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="exchange-rates__pagination-arrow">&lt;</button>
      <span>
        <span v-for="pageNumber in visiblePageNumbers" :key="pageNumber"
            @click="changePage(pageNumber)" :class="{ active: pageNumber === currentPage }">
            {{ pageNumber }}
        </span>
      </span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="exchange-rates__pagination-arrow">&gt;</button>
    </div>
    <table class="exchange-rates__table">
      <tr class="exchange-rates__table-header">
        <th >Date <i :class="sortIcon" aria-hidden="true" @click="sortByDate"></i></th>
        <th>EUR to {{ selectedCurrency }}</th>
      </tr>
      <tr v-for="rate in exchangeRates" :key="rate" class="exchange-rates__row">
        <td>{{ rate.date }}</td>
        <td>{{ rate['rate_' + selectedCurrency] }}</td>
      </tr>
    </table>
    <div class="exchange-rates__pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="exchange-rates__pagination-arrow">&lt;</button>
      <span>
        <span v-for="pageNumber in visiblePageNumbers" :key="pageNumber"
            @click="changePage(pageNumber)" :class="{ active: pageNumber === currentPage }">
            {{ pageNumber }}
        </span>
      </span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="exchange-rates__pagination-arrow">&gt;</button>
    </div>
    <div class="exchange-rates__statistics">Minimum: {{ minRate }} {{selectedCurrency}}, Maximum: {{ maxRate }} {{selectedCurrency}}, Average: {{ averageRate }} {{selectedCurrency}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExchangeRates",
  data() {
    return {
      lastUpdated: '',
      exchangeRates: [],
      selectedCurrency: this.$route.params.currency,
      sortOrder: "desc",
      minRate: 0,
      maxRate: 0,
      averageRate: 0,
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
    };
  },
  mounted() {
    this.fetchExchangeRates();
  },
  methods: {
    async fetchExchangeRates() {
      try {
        const response = await axios.get(
          "http://localhost/CurrencyExchangeApp/public/api/exchange-rates/" +
            this.$route.params.currency +
            "?orderBy=" +
            this.sortOrder +
            "&page=" + this.currentPage +
            "&perPage=" + this.perPage
        );
        this.lastUpdated = response.data.latest_date;
        this.exchangeRates = response.data.exchange_rates.data;
        this.totalPages = Math.ceil(response.data.exchange_rates.total / this.perPage);
        this.maxRate = response.data.maxRate;
        this.minRate = response.data.minRate;
        this.averageRate = response.data.averageRate;
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    },
    sortByDate() {
      this.sortOrder = this.sortOrder === "desc" ? "asc" : "desc";
      this.fetchExchangeRates();
    },
    changePage(page) {
      this.currentPage = page;
      this.fetchExchangeRates();
    },
  },
  computed: {
    sortIcon() {
      return this.sortOrder === "desc"
        ? "fa fa-long-arrow-up"
        : "fa fa-long-arrow-down";
    },
    visiblePageNumbers() {
        const maxVisiblePages = 5;
        const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

        let startPage = Math.max(this.currentPage - halfMaxVisiblePages, 1);
        let endPage = Math.min(startPage + maxVisiblePages - 1, this.totalPages);

        if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
        }

        const visiblePageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
        visiblePageNumbers.push(i);
        }

        return visiblePageNumbers;
    },
  },
};

</script>

<style scoped>
.exchange-rates {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.exchange-rates__title{
  margin: 0px;
  padding-top: 10px;
}
.exchange-rates__last-updated{
  margin-top: 10px;
  margin-bottom: 30px;
}
.exchange-rates__table {
  border-collapse: collapse;
  margin-top: 10px;
}
td,
th {
  border: 1px solid black;
  padding: 20px 60px;
  text-align: center;
}
.fa{
  padding: 5px;
  cursor: pointer;
}
.exchange-rates__pagination{
  display: flex;
  padding-top: 10px;
}
span{
  margin-left: 2px;
  margin-right: 2px;
  cursor: pointer;
}
span.active {
  font-weight: bold;
}
.exchange-rates__pagination-arrow{
  background: none;
	border: none;
	cursor: pointer;
	outline: inherit;
}
.exchange-rates__statistics{
  margin-top: 10px;
  padding-bottom: 10px;
}
</style>