import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};

export function displayImages(images) {
  const gallery = document.querySelector('.gallery');

  images.forEach(image => {
    console.log(image);

    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');

    const imageLink = document.createElement('a');
    imageLink.href = image.largeImageURL;
    imageLink.classList.add('gallery-link');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;

    const info = document.createElement('div');
    info.classList.add('info');

    const likes = document.createElement('p');
    likes.textContent = `Likes: ${image.likes}`;

    const views = document.createElement('p');
    views.textContent = `Views: ${image.views}`;

    const comments = document.createElement('p');
    comments.textContent = `Comments: ${image.comments}`;

    const downloads = document.createElement('p');
    downloads.textContent = `Downloads: ${image.downloads}`;

    info.appendChild(likes);
    info.appendChild(views);
    info.appendChild(comments);
    info.appendChild(downloads);

    imageLink.appendChild(img);
    galleryItem.appendChild(imageLink);
    galleryItem.appendChild(info);
    gallery.appendChild(galleryItem);
  });

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export const showErrorMessage = () => {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
};
