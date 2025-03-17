import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showError,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    showError('Please enter a search query!');
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    showError('Failed to fetch images. Please try again later.');
  } finally {
    hideLoader();
  }
});
