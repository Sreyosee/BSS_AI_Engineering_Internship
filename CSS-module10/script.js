// Select the navbar.
const header = document.querySelector(".header");

// Change its appearance based on the scroll position.
function toggleHeaderTransparency() {
  if (window.scrollY > 0) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
}

// Run the function whenever the user scrolls.
window.addEventListener("scroll", toggleHeaderTransparency, {
  passive: true
});

// Check the position when the page first opens.
toggleHeaderTransparency();