/*
    EDIT THIS LIST BY HAND.

    Put your actual image files in the images/ folder,
    then add one line here for each image.
*/

const images = [
    // "images/photo01.jpg",
    // "images/photo02.jpg",
    // "images/photo03.png",
    // "images/photo04.webp"

'images/2fa7c4c2b47a3234982fc55f925ad787.jpg',
'images/584a5e97d8760365916e1a508f1b255a.jpg',
'images/5bc9c5dd3cc8dc65b2ee305f84757433.jpg',
'images/745c777a0ca86060f0f87c6ca5bb52a6.jpg',
'images/74c255f0c64097ff45d558de2a06f9d7.jpg',
'images/7a44b218112c86f2f6deb80d496c84ef.jpg',
'images/b71dc8343e5ad05030d641d411d23b84.jpg'


    
];

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
