// Smooth scroll for nav links (optional)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Fake payment submission handler
const paymentForm = document.getElementById("payment-form");
const paymentMessage = document.getElementById("payment-message");

paymentForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;
  const amount = document.getElementById("amount").value;
  const method = document.getElementById("payment-method").value;

  paymentMessage.classList.remove("hidden");
  paymentMessage.innerHTML = `
    <strong>Thank you, ${name}!</strong><br />
    We’ve recorded your payment details:<br />
    <strong>Email:</strong> ${email}<br />
    <strong>Adults:</strong> ${adults}, <strong>Children:</strong> ${children}<br />
    <strong>Amount:</strong> $${amount}<br />
    <strong>Payment Method:</strong> ${method.toUpperCase()}<br /><br />
    Please send your payment using ${method.toUpperCase()} to the organizer’s account.
  `;

  paymentForm.reset();

  // ---------------------------
// Dynamic Carousel Setup
// ---------------------------

// ...existing code...
// ---------------------------
// Full Gallery Logic
// ---------------------------

// Load default images
let galleryImages = [
  { src: "images/IMG_4041.jpg", caption: "Family BBQ 2023" },
  { src: "images/IMG_4046.jpg", caption: "Cousins at the park" },
  { src: "images/IMG_4036.jpg", caption: "Group photo at the reunion" },
  { src: "images/IMG_4048.jpg", caption: "Kids playing games" },
  { src: "images/photo5.jpg", caption: "Evening bonfire memories" }
];

// Load uploaded images from localStorage
const stored = JSON.parse(localStorage.getItem("uploadedPhotos")) || [];
galleryImages = [...galleryImages, ...stored];

let index = 0;

// DOM elements
const carouselImage = document.getElementById("carouselImage");
const caption = document.getElementById("caption");
const thumbnailContainer = document.getElementById("thumbnailContainer");

// Render carousel
function showImage(i) {
  carouselImage.src = galleryImages[i].src;
  caption.textContent = galleryImages[i].caption || "Family Photo";
}
showImage(index);

// Buttons
document.querySelector(".next")?.addEventListener("click", () => {
  index = (index + 1) % galleryImages.length;
  showImage(index);
});

document.querySelector(".prev")?.addEventListener("click", () => {
  index = (index - 1 + galleryImages.length) % galleryImages.length;
  showImage(index);
});

// Thumbnails
function renderThumbnails() {
  thumbnailContainer.innerHTML = "";
  galleryImages.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img.src;
    thumb.className = "thumb";
    thumb.onclick = () => {
      index = i;
      showImage(i);
    };
    thumbnailContainer.appendChild(thumb);
  });
}
renderThumbnails();

});
