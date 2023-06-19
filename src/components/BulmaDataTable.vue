<template>
  <div class="container">
    <DataTable
      :data="rows"
      :columns="columns"
      :options="options"
      class="table is-striped is-bordered is-fullwidth"
    />
  </div>
  </template>
  
  <script>
  import { inject, onMounted, ref } from 'vue';
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net';
  DataTable.use(DataTablesCore);
  
  export default {
    name: 'BulmaDataTable',
    components: {
      DataTable
    },
    setup() {
      const dataService = inject('dataService');
      const rows = ref([]);
      const columns = ref([
        { title: 'Name', data: 'name' },
        { title: 'Age', data: 'age' },
        { title: 'Email', data: 'email' }
      ]);

    const fetchData = async () => {
      try {
        rows.value = await dataService.fetchData(); // Update the rows data with the response
      } catch (error) {
        console.error(error);
      }
    };

    const options = ref({
      // Configure DataTable options here
      // For example, pagination, searching, etc.
      paging: true,
      searching: true,
      select: true,
    });

    onMounted(() => {
      fetchData();
    });

    return {
      rows,
      columns,
      options
    };
    }
  };
  </script>
  
<style>
@import 'datatables.net-dt';
</style>