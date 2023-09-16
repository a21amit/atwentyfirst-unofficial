let scrollContainer = document.querySelector(".galleryt-warp");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900px;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900px;
})