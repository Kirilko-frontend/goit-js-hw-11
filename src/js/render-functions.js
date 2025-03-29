import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  document.querySelector('.loader').style.display = 'block';
};

export const hideLoader = () => {
  document.querySelector('.loader').style.display = 'none';
};

export function displayImages(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </div>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  new SimpleLightbox('.gallery a').refresh();
}

export const showErrorMessage = () => {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
};

export const toggleLoadMoreBtn = isVisible => {
  loadMoreBtn.style.display = isVisible ? 'block' : 'none';
};

export const smoothScroll = () => {
  const { height } = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();
  window.scrollBy({ top: height * 2, behavior: 'smooth' });
};
