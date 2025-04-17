import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  query = input.value.trim();
  page = 1;

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term', position: 'topRight' });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({ message: 'No images found. Try another keyword.', position: 'topRight' });
      return;
    }

    createGallery(data.hits);
    smoothScrollAfterNewImages();
    if (totalHits > page * 15) showLoadMoreButton();
  } catch (err) {
    iziToast.error({ message: 'Error fetching images.', position: 'topRight' });
  } finally {
    hideLoader();
    input.value = '';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page++;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    // Плавний скрол після рендеру нових зображень
        setTimeout(() => {
  const card = document.querySelector('.gallery-item');
  if (card) {
    const { height: cardHeight } = card.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}, 100);

    if (page * 15 >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (err) {
    iziToast.error({ message: 'Error loading more images.', position: 'topRight' });
  } finally {
    hideLoader();
  }
});
function smoothScrollAfterNewImages() {
  setTimeout(() => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lastItem = galleryItems[galleryItems.length - 1];

    if (lastItem) {
      const { height: cardHeight } = lastItem.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  }, 100);
}