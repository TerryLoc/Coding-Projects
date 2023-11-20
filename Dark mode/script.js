"use srict";

let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/Dark mode/dark theme icon/sun.png";
  } else icon.src = "/Dark mode/dark theme icon/moon.png";
};
