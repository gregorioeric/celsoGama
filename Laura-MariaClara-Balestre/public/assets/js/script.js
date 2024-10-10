const active = document.querySelectorAll("#menu-materias nav ul li a");
const activePage = window.location.pathname;

active.forEach((link) => {
  const newLink = new URL(link.href).pathname;

  if (activePage === newLink) {
    link.classList.add("active");
  }
});
