import axios from 'axios';

class DataService {
  async fetchData() {
    try {
      const response = await axios.get(
        'https://my.api.mockaroo.com/users.json?key=e6ac1da0',
      );
      // Process the response data
      return response.data;
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  }
}

export default DataService;
