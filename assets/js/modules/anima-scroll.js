export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-show]");
  console.log(sections);
  function animaScroll() {
    const distanciaWindow = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const sectionDistancia = section.getBoundingClientRect();
      const visibleScroll = sectionDistancia.top - distanciaWindow < 0;
      if (visibleScroll) {
        section.classList.add("ativo");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
}
