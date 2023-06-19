import { provide } from 'vue';
import DataService from '../services/DataService';

const DataServicePlugin = {
  install() {
    const dataService = new DataService();
    provide('dataService', dataService);
  },
};

export default DataServicePlugin;
