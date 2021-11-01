// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup (array) {
    let markup = "";
    array.forEach(e => {
       markup += `<div class="gallery__item">
       <a class="gallery__link" href=${e.original}>
       <img
       class="gallery__image"
       src=${e.preview}
       data-source=${e.original}
       alt=${e.description}
       />
       </a>
       </div>`
    });

    return markup;
};

galleryEl.innerHTML = createGalleryMarkup(galleryItems);


let gallery = new SimpleLightbox('.gallery a');
