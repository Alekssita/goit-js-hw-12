import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images.map(img => `
  <li class="gallery-item">
    <a href="${img.largeImageURL}">
      <img src="${img.webformatURL}" alt="${img.tags}" />
    </a>
    <div class="info">
      <p><b>Likes:</b> ${img.likes}</p>
      <p><b>Views:</b> ${img.views}</p>
      <p><b>Comments:</b> ${img.comments}</p>
      <p><b>Downloads:</b> ${img.downloads}</p>
    </div>
  </li>
`).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
