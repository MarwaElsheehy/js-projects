let btns = document.querySelectorAll(".buttons");
let storeImages = document.querySelectorAll(".store-item");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;

    storeImages.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
