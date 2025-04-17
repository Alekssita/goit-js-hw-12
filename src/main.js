import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

import iziToast from 'izitoast'; 
import 'izitoast/dist/css/iziToast.min.css'; 

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term', position: 'topRight' });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(query)
    .then((data) => {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(images);
    })
    .catch((error) => {
      iziToast.error({ message: 'Network error. Please try again later.', position: 'topRight' });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
      input.value = '';
    });
});