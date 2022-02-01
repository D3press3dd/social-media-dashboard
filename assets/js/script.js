const toggleBtn = document.querySelector("#checkbox");
const body = document.querySelector("body");

// !We add the light theme on click event
// !We add the light theme on click event

toggleBtn.addEventListener("click", e => {
  body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("light-theme", "true");
  } else {
    localStorage.setItem("light-theme", "false");
  }
});

// !We save the values in the localStorage
// !We save the values in the localStorage

if (localStorage.getItem("light-theme") === "true") {
  document.body.classList.add("light-theme");
  toggleBtn.setAttribute("checked", "checked");
} else {
  document.body.classList.remove("light-theme");
  toggleBtn.removeAttribute("checked");
}
