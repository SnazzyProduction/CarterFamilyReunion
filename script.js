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

// Add your images + captions here
const galleryImages = [
  { src: "images/Fence1.jpg", caption: "Family BBQ 2023" },
  { src: "images/Fence2.jpg", caption: "Cousins at the park" },
  { src: "images/Fence3.jpg", caption: "Group photo at the reunion" },
  { src: "images/Fence4.jpg", caption: "Kids playing games" },
  { src: "images/Fence5.jpg", caption: "Evening bonfire memories" }
];
});