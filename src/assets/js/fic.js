document.addEventListener("DOMContentLoaded", function () {
  let explicitContent = localStorage.getItem("explicitContent");

  if (explicitContent == null || explicitContent == "false") {
    explicitContent = window.confirm(
      "This page contains mature or explicit content. If you are a minor or if you do not want to read such content, please click Cancel.\n\nThis is a site-wide setting. If you click OK, it will not ask you again.\n\nWould you like to continue?"
    );

    localStorage.setItem("explicitContent", explicitContent);

    if (!explicitContent) {
      window.history.back();
    }
  }
});
