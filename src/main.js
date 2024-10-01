import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixabay-api';
import { renderImages, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
let lightbox = null;

// Функція для показу повідомлення про помилки
function showError(message) {
  iziToast.error({
    title: '',
    message,
    position: 'topRight',
    backgroundColor: '#EF4040',
    maxWidth: '432px',
    messageColor: '#fff',
    iconColor: '#fff'
  });
}

// Функція для попереднього завантаження зображень
function preloadImages(images) {
  images.hits.forEach(image => {
    const img = new Image();
    img.src = image.largeImageURL;
  });
}

// Основна логіка обробки події 'submit'
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputValue = form.elements.searchQuery.value.trim().toLowerCase(); // Очищення пробілів

  if (inputValue === '') {
    showError('Sorry, there are no images matching your search query. Please try again!');
    return;
  }

  gallery.innerHTML = ''; // Очищення галереї

  showLoader(); // Показуємо індикатор завантаження

  fetchImages(inputValue)
    .then(images => {
      if (images.hits.length === 0) {
        showError('Sorry, there are no images matching your search query. Please try again!');
        return;
      }

      renderImages(images); // Відображаємо зображення
      preloadImages(images); // Попереднє завантаження зображень

      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
      } else {
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error(error);
      showError('An error occurred while fetching images. Please try again.');
    })
    .finally(() => {
      hideLoader(); // Приховуємо індикатор завантаження
      form.reset(); // Очищуємо форму
    });
});