import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  displayImages,
  showErrorMessage,
  toggleLoadMoreBtn,
  smoothScroll,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let searchQuery = '';
let page = 1;
const perPage = 15;

form.addEventListener('submit', async e => {
  e.preventDefault();
  searchQuery = e.target.elements['search-text'].value.trim();

  if (!searchQuery) return;

  clearGallery();
  toggleLoadMoreBtn(false);
  page = 1;
  showLoader();

  try {
    const { hits, totalHits } = await fetchImages(searchQuery, page, perPage);
    hideLoader();

    if (hits.length === 0) {
      showErrorMessage();
      return;
    }

    displayImages(hits);
    toggleLoadMoreBtn(hits.length < totalHits);
  } catch (error) {
    hideLoader();
    showErrorMessage();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const { hits, totalHits } = await fetchImages(searchQuery, page, perPage);
    hideLoader();
    displayImages(hits);
    smoothScroll();

    if (page * perPage >= totalHits) {
      toggleLoadMoreBtn(false);
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    hideLoader();
    showErrorMessage();
  }
});
