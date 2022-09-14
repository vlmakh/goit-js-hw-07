import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const itemsList = createImagesMarkup(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", itemsList);
galleryRef.addEventListener("click", onImageClick);

function createImagesMarkup(images) {
  return images
    .map(
      (image) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </div>`
    )
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", onEcsapeCloseImage);

  function onEcsapeCloseImage(evt) {
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEcsapeCloseImage);
    }
  }
}
