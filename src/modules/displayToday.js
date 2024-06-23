import { displayTask } from "./displayTask";
let display = false;

export function displayToday() {
  const sidebarLi = document.querySelectorAll(".sidebar-li");
  const mainSection = document.querySelector(".main-section");
  let calledProject;
  let todayLi;
  sidebarLi.forEach((el) => {
    if (el.textContent === "Today") {
      todayLi = el;
    } else return;
  });

  todayLi.addEventListener("click", (el) => {
    const activeProject = document.querySelector(".active-project");
    if (activeProject) {
      activeProject.dataset.taskDisplayed = false;
      activeProject.classList.remove("active-project");
    }

    if (!todayLi.classList.contains("active")) {
      const taskDiv = document.createElement("div");
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task-container");
      const projects = JSON.parse(localStorage.getItem("projects"));
      for (let project in projects) {
        if (projects[project].length > 0) {
          todayLi.classList.add("active");

          taskDiv.classList.add("today-task--section");
          const today = new Date().toISOString().split("T")[0];
          projects[project].forEach((task) => {
            if (task.date === today && calledProject != project) {
              
              displayTask(today, project, taskDiv, taskContainer);
              calledProject = project;
              display = true;
              
            }
          });
          calledProject = "";
        }
      }

      if (display) {
        mainSection.appendChild(taskDiv);
        display = false;
      }
    }
  });
}
