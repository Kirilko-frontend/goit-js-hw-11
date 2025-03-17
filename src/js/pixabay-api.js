import axios from 'axios';

const API_KEY = '49383034-f250c1a79c2ac8474ecbb0034';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await axios.get(URL);
    console.log('Дані з Pixabay:', response.data);

    return response.data.hits;
  } catch (error) {
    console.error('Помилка запиту:', error);
    console.log('Error details:', error.response ? error.response.data : error);
    throw error;
  }
}
