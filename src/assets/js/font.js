document.addEventListener("DOMContentLoaded", function () {
  const fontSwitcher = document.getElementById("font-switcher");

  const ficPage = document.querySelectorAll("section.content.fic-page");

  const storedFont = localStorage.getItem("font");

  if (storedFont) {
    ficPage.forEach((section) => {
      section.dataset.font = storedFont;
    });
    fontSwitcher.value = storedFont;
  }

  fontSwitcher.onchange = (e) => {
    ficPage.forEach((section) => {
      section.dataset.font = e.target.value;
    });
    localStorage.setItem("font", e.target.value);
  };
});
