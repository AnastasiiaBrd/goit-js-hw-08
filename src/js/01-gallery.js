// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import simpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(item => {
    return `<li class="gallery__link">
            <a class="gallery__item" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            />
            </a>
            </li>`;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(galleryItems);
