import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const itemsList = createImagesMarkup(galleryItems);

galleryRef.innerHTML = itemsList;
galleryRef.addEventListener("click", onImageClick);

function createImagesMarkup(images) {
  return images
    .map(
      (image) =>
        `<a class="gallery__item" href="${image.original}">
         <img class="gallery__image" src="${image.preview}" alt="${image.description}" title="${image.description}"/>
        </a>`
    )
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  var gallery = new SimpleLightbox(".gallery a", {
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
