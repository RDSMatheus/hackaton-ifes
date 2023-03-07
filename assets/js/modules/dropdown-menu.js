export default function initDropdown() {
  const btn = document.querySelector("[data-dropdown='abrir']");

  function handleDropdown(event) {
    event.preventDefault();
    const menu = document.querySelector(".dropdown-menu");
    console.log(menu);
    menu.classList.toggle("ativo");
    this.classList.toggle("ativo");
  }

  btn.addEventListener("click", handleDropdown);
}
