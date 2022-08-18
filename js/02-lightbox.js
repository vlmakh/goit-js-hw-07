import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const itemsList = createImagesMarkup(galleryItems);
const imageLink = galleryRef.querySelector(".gallery__link", onImageClick);

galleryRef.innerHTML = itemsList;
galleryRef.addEventListener("click", onImageClick);

// console.log(createImagesMarkup(galleryItems))

function createImagesMarkup(images) {
  return images
    .map(
      (item) =>
        `<a class="gallery__item" href="${item.original}">
         <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
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
    /*optons*/
  });

  // gallery.on('show.simplelightbox', function () {
  // captionsData: evt.target.alt;
  // });
  // не понятно какой синтаксис Options, использовать для дополнительный настроек
}
