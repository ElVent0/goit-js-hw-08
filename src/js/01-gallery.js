// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox;

function createGalleryItems(images) {
  return images
    .map(item => {
      return `
  <a class="gallery__item" href="${item.original}">
    <img 
        class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}" 
        />
  </a>
`;
    })
    .join('');
}

lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
