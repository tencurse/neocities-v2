// 🔥🔥🔥 WELCOME TO MY CONVOLUTED JAVASCRIPT 🔥🔥🔥

document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("theme-switcher");
  const currentTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  if (currentTheme) {
    document.documentElement.dataset.theme = currentTheme;
    themeSwitcher.value = currentTheme;
  }

  themeSwitcher.onchange = (e) => {
    document.documentElement.dataset.theme = e.target.value;
    localStorage.setItem("theme", e.target.value);
  };
});
