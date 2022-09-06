import axios from 'axios';

const KEY = 'AIzaSyD4dJAQb4Vs1nxeIgL_QmrPdDQcavx7edw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});