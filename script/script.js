const darkLightModeToggle = document.getElementById("dark-light-toggle");
const darkLightModeIcon = document.getElementById("dark-light-icon");
const html = document.querySelector("html");
const linkExternal = document.querySelectorAll(".link-external");

console.log(linkExternal);

darkLightModeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    darkLightModeIcon.src = "icon/sun.png";
    linkExternal.forEach((element) => {
      element.src = "icon/link-light.png";
    });
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
    darkLightModeIcon.src = "icon/moon.png";
    linkExternal.forEach((element) => {
      element.src = "icon/link-dark.png";
    });
  }
});
