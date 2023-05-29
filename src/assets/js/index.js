// 🔥🔥🔥 WELCOME TO MY CONVOLUTED JAVASCRIPT 🔥🔥🔥

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".toggle-color-scheme");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = localStorage.getItem("theme");
  let theme = "";
  const darkMessage = "Turn on the lights";
  const lightMessage = "Turn off the lights";

  if (prefersDarkScheme.matches) {
    if (currentTheme === null || currentTheme === "dark") {
      theme = "dark";
      btn.innerHTML = darkMessage;
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark-theme");
    } else {
      theme = "light";
      btn.innerHTML = lightMessage;
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("light-theme");
    }
  } else {
    theme = "light";
    btn.innerHTML = lightMessage;
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light-theme");
  }

  btn.addEventListener("click", function () {
    document.documentElement.classList.toggle("light-theme");
    document.documentElement.classList.toggle("dark-theme");
    if (currentTheme === "dark" || theme === "dark") {
      theme = "light";
      btn.innerHTML = lightMessage;
    } else {
      theme = "dark";
      btn.innerHTML = darkMessage;
    }

    localStorage.setItem("theme", theme);
  });
});
