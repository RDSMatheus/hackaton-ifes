export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-show]");
  sections[0].classList.add("ativo");
  console.log(sections);
  function animaScroll() {
    const distanciaWindow = window.innerHeight * 0.9;
    sections.forEach((section) => {
      const sectionDistancia = section.getBoundingClientRect();
      const visibleScroll = sectionDistancia.top - distanciaWindow < 0;
      if (visibleScroll) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
}
