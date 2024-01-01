// Get all the details elements
const detailsElements = document.querySelectorAll(".question-wrapper");

// Add a toggle event listener to each details element
detailsElements.forEach((details) => {
  details.addEventListener("toggle", function () {
    if (this.open) {
      detailsElements.forEach((details) => {
        if (details !== this) {
          details.open = false;
        }
      });
    }
  });
});
