const tooglebtn = document.querySelector(".toogle_btn");
const tooglebtnicon = document.querySelector(".icon");
const dropdownmenu = document.querySelector(".dropdown_menu");

tooglebtn.onclick = function () {
  dropdownmenu.classList.toggle("open");
  const isOpen = dropdownmenu.classList.contains("open");

  tooglebtnicon.classList = isOpen
    ? "fa-solid fa-regular fa-xmark"
    : "fa-solid fa-bars-staggered";
};
