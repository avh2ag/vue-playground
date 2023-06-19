
import { provide } from 'vue';
import DataService from '../services/DataService';

const DataServicePlugin = {
    install() {
      const dataService = new DataService();
      // const dataServiceInstance = reactive(dataService);
      provide('dataService', dataService);
    },
  };
  
  export default DataServicePlugin;