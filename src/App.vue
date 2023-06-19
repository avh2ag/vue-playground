<template>
  <div class="container">
    <h1 class="title">Sample Datatables App</h1>
    <BulmaDataTable />
  </div>
</template>

<script>
import BulmaDataTable from './components/BulmaDataTable.vue';
import { provide } from 'vue';
import DataService from './services/DataService.js';

export default {
  name: 'App',
  components: {
    BulmaDataTable
  },
  setup() {
    provide('dataService', new DataService());
    return {};
  },
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
</style>
