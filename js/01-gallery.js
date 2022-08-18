import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const itemsList = createImagesMarkup(galleryItems);
const imageLink = galleryRef.querySelector(".gallery__link", onImageClick);

galleryRef.insertAdjacentHTML("afterbegin", itemsList);
galleryRef.addEventListener("click", onImageClick);

function createImagesMarkup(images) {
  return images
    .map(
      (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
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

  //   console.log(evt.target.dataset.source);
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", onEcsapeCloseImage, { once: true });

  function onEcsapeCloseImage(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
