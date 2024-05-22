const main = document.querySelector(".main-section");
import avatar from "../images/avatar.jpg";

function createSidebarLi(text, className) {
  const liDiv = document.createElement("div");

  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("sidebar-li");

  const icon = createIcon(className);

  liDiv.appendChild(icon);
  liDiv.appendChild(li);
  return liDiv;
}

function createIcon(className) {
  const icon = document.createElement("i");

  icon.classList.add("fa-light", className);
  return icon;
}

export function createSidebar() {
  const sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("icon-div");

  const imgIcon = document.createElement("img");
  imgIcon.classList.add("avatar-img");
  imgIcon.src = avatar;

  const iconText = document.createElement("span");
  iconText.textContent = "Welcome Back";
  iconText.classList.add("icon-text");

  iconDiv.appendChild(imgIcon);
  iconDiv.appendChild(iconText);

  const sideUl = document.createElement("ul");
  sideUl.classList.add("sidebar-ul");

  const inboxLi = createSidebarLi("Inbox", "fa-inbox");

  const calendarLi = createSidebarLi("Today", "fa-calendar");

  const projectsLi = createSidebarLi("Projects", "fa-rectangle-history");
  const addProject = document.createElement("i");
  addProject.classList.add("fa-light", "fa-plus");
  projectsLi.appendChild(addProject);

  sideUl.appendChild(inboxLi);

  sideUl.appendChild(calendarLi);

  sideUl.appendChild(projectsLi);
  sidebar.appendChild(iconDiv);
  sidebar.appendChild(sideUl);

  main.appendChild(sidebar);
}
