// Описаний в документації
import { images } from './const.js';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Отримуємо посилання на елементи DOM
const domGallery = document.querySelector('.gallery');

// генеруємо шаблонні строки до кожного item of items
function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${item.original}">
           <img 
          class="gallery-image" 
          src="${item.preview}" 
          data-source="${item.original}"
          alt="${item.description}" 
          />
          </a>
        </li>`
    )
    .join('');
}

// додаю змінну для отримання шаблонних строк
const addGalleryMarkup = createGalleryMarkup(images);

// додаємо шаблонну строку addGalleryMarkup до DOM - ".gallery"
domGallery.insertAdjacentHTML('beforeend', addGalleryMarkup);

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlayOpacity: 0.8,
  widthRatio: 0.77,
  heightRatio: 0.919,
});
