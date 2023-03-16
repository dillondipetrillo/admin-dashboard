const sidebarNavLink = document.querySelectorAll(".sidebar__nav-link");
const sidebarHelpLink = document.querySelectorAll(".sidebar__help-link");

const sidebarLinks = [...sidebarNavLink, ...sidebarHelpLink];

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

sidebarLinks.forEach((link) => link.addEventListener("click", addActiveClass));
