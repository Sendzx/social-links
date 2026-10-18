const popup = document.querySelector("#supportDialog");
const supportButton = document.querySelector("#supportButton");
const closeButton = document.querySelector(".popup__close");

function closeSupportDialog() {
  popup.classList.remove("show");
  popup.setAttribute("aria-hidden", "true");
  supportButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
  supportButton.focus();
}

supportButton.addEventListener("click", () => {
  popup.classList.add("show");
  popup.setAttribute("aria-hidden", "false");
  supportButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("no-scroll");
  closeButton.focus();
});

closeButton.addEventListener("click", closeSupportDialog);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closeSupportDialog();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popup.classList.contains("show")) {
    closeSupportDialog();
    return;
  }

  if (event.key === "Tab" && popup.classList.contains("show")) {
    const focusableElements = [...popup.querySelectorAll('a[href], button:not([disabled])')];
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!popup.contains(document.activeElement)) {
      event.preventDefault();
      (event.shiftKey ? lastElement : firstElement).focus();
    } else if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
});
