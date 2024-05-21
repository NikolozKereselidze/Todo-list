const main = document.querySelector(".main-section");

function createSidebarLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("sidebar-li");
  return li;
}

export function createSidebar() {
  const sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");

  const sideUl = document.createElement("ul");
  sideUl.classList.add("sidebar-ul");

  const inboxLi = createSidebarLi("Inbox");
  const todayLi = createSidebarLi("Today");
  const projectsLi = createSidebarLi("Projects");
  sideUl.appendChild(inboxLi);
  sideUl.appendChild(todayLi);
  sideUl.appendChild(projectsLi);
  sidebar.appendChild(sideUl);

  main.appendChild(sidebar);
}
