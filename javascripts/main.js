document.addEventListener("DOMContentLoaded", () => {
  let menuToggle = document.getElementsByClassName("menu-toggle")[0];

  menuToggle.addEventListener("click", (e) => {
    console.log("test")
    let display = document.getElementsByClassName("navbar")[0].style.display;
    if (display == "flex") {
      display = "none";
    } else {
      display = "flex";
    }

    document.getElementsByClassName("navbar")[0].style.display = display;
  });
});
