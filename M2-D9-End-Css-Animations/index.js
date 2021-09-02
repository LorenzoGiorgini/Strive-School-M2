let removeButtons = document.getElementsByClassName("del");

Array.from(removeButtons).forEach((removeButton) => {
  removeButton.addEventListener("click", () => {
    removeButton.parentNode.parentNode.remove();
  });
});