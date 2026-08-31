// LVN License Manager
// Common JavaScript

console.log("LVN License Manager loaded successfully.");

// Prevent accidental form submission
document.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Mobile-friendly button feedback
document.addEventListener("click", function (event) {

  const button = event.target.closest("button");

  if (!button) return;

  button.style.transform = "scale(0.98)";

  setTimeout(() => {
    button.style.transform = "";
  }, 100);
});
