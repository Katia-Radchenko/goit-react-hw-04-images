import axios from 'axios';

const API_KEY = '25410327-804c76ecb7647eb6416d3959a';


export async function  imgApi (query, page) {
 const baseURL ='https://pixabay.com/api/';
  const options = {
    params: {
    key: API_KEY,
    image_type: 'photo',
    q: query,
    page: page,
    per_page: 12,

  }
};


  const  data  = await axios.get(baseURL, options);
  return data;
}
