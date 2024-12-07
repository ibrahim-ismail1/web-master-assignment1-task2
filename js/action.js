const btn=document.querySelector('.SideBtn');

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    btn.classList.add("visible");
    btn.classList.remove("hidden");
   
   
})
btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  });
