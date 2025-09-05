let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  sections.forEach(sec => {
    let top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
