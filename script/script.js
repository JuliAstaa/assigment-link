const darkLightModeToggle = document.getElementById("dark-light-toggle");
const darkLightModeIcon = document.getElementById("dark-light-icon");
const html = document.querySelector("html");
const linkExternal = document.getElementById("link-external");

darkLightModeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    darkLightModeIcon.src = "icon/sun.png";
    linkExternal.src = "icon/link-light.png";
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
    darkLightModeIcon.src = "icon/moon.png";
    linkExternal.src = "icon/link-dark.png";
  }
});
