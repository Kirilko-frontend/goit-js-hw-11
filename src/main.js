import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  displayImages,
  showErrorMessage,
} from './js/render-functions.js';

document.querySelector('.form').addEventListener('submit', async e => {
  e.preventDefault();
  const searchQuery = document
    .querySelector("input[name='search-text']")
    .value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await fetchImages(searchQuery);
    hideLoader();

    if (images.length === 0) {
      showErrorMessage();
    } else {
      displayImages(images);
    }
  } catch (error) {
    hideLoader();
    showErrorMessage();
  }
});
