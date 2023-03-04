export default function initDropdown() {
  const abrir = document.querySelector("[data-dropdown='abrir']");
  const eventos = ["click", "toustart"];

  function handleDropdown(event) {
    event.preventDefault();
    const menu = document.querySelector(".dropdown-menu");
    console.log(menu);
    menu.classList.toggle("ativo");
  }

  eventos.forEach((evento) => abrir.addEventListener(evento, handleDropdown));
}
