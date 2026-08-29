/*
    EDIT THIS LIST BY HAND.

    Put your actual image files in the images/ folder,
    then add one line here for each image.
*/



const board = document.getElementById("board");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

images.forEach(src => {
    const pin = document.createElement("div");
    pin.className = "pin";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";

    pin.appendChild(img);
    board.appendChild(pin);

    pin.addEventListener("click", () => {
        lightboxImage.src = src;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
    });
});

function closeViewer() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
}

closeLightbox.addEventListener("click", closeViewer);

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeViewer();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeViewer();
    }
});
