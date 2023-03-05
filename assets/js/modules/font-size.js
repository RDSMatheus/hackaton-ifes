import setPreference from "./modules/set-preference.js";

export default function initFontSize() {
  const btnIncrease = document.querySelector("[data-toggle-fonte]");
  const btnDecrease = document.querySelector("[data-toggle-fonte-decrease]");
  const body = document.querySelector("body");
  const maxFontSize = 18;
  const minFontSize = 12;

  const fontSizePreference = JSON.parse(localStorage.getItem("font-size"));
  if (fontSizePreference) {
    checkFontSize(fontSizePreference.acessibilidade);
    console.log(fontSizePreference.acessibilidade);
  }

  function checkFontSize(valor) {
    if (valor >= minFontSize && valor <= maxFontSize) {
      document.documentElement.style.fontSize = valor + "px";
    }
  }

  function handleFontChange(valor) {
    const currentFontSize = parseInt(
      window.getComputedStyle(body).getPropertyValue("font-size")
    );
    console.log(currentFontSize);
    let newFontSize = currentFontSize + valor;
    if (newFontSize > maxFontSize) {
      newFontSize = maxFontSize;
    }

    if (newFontSize < minFontSize) {
      newFontSize = minFontSize;
    }
    checkFontSize(newFontSize);
    setPreference("font-size", newFontSize);
  }

  btnIncrease.addEventListener("click", () => {
    handleFontChange(2);
  });

  btnDecrease.addEventListener("click", () => {
    handleFontChange(-2);
  });
}
