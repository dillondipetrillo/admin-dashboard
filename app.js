const sidebarNavLink = document.querySelectorAll(".sidebar__nav-link");
const sidebarHelpLink = document.querySelectorAll(".sidebar__help-link");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".dark-overlay");
const burgerMenu = document.querySelector(".header__top-left-menu");
const closeBtn = document.querySelector(".close-btn");

const sidebarLinks = [...sidebarNavLink, ...sidebarHelpLink];

// Adds active class to selected sidebar item
const addActiveClass = (e) => {
  if (e.target.classList.contains("active")) return;
  if (!e.target.classList.contains("active")) {
    sidebarLinks.forEach((link) => {
      if (link.classList.contains("active")) {
        link.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  }
};

// Opens sidebar on smaller devices
const openSidebar = () => {
  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("no-scroll");
  }
};

// Closes sidebar if clicked outside of opened sidebar or close button
const closeSidebar = () => {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
};

overlay.addEventListener("click", closeSidebar);

closeBtn.addEventListener("click", closeSidebar);

sidebarLinks.forEach((link) => link.addEventListener("click", addActiveClass));

burgerMenu.addEventListener("click", openSidebar);
