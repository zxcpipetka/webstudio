export default function menu() {
  const btn = document.querySelector(".header_right--mobile");
  const mobileMenu = document.querySelector(".header_right--mobile--list");

  btn.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(0)";
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !btn.contains(event.target)) {
      mobileMenu.style.transform = "translateX(100%)";
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mobileMenu.style.transform = "translateX(100%)";
    }
  });
}
