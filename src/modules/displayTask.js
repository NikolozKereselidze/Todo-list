import { createIcon } from "./initial";

const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");

function checkPriority(priority) {
  let icon;
  if (priority === "low") {
    icon = createIcon("fa-gauge-low");
  } else if (priority === "medium") {
    icon = createIcon("fa-gauge");
  } else if (priority === "high") {
    icon = createIcon("fa-gauge-high");
  } else return;
  return icon;
}

export function displayTask() {
  const mainDiv = document.querySelector(".task-section");
  const projects = JSON.parse(localStorage.getItem("projects")) || {};
  const activeProjectSpan = document.querySelector(".active-project");

  taskContainer.innerHTML = "";

  if (activeProjectSpan) {
    const activeProject = projects[activeProjectSpan.textContent];
    activeProject.forEach((el) => {
      const taskWrapper = document.createElement("div");
      const taskCaller = document.createElement("span");
      taskCaller.textContent = activeProjectSpan.textContent;
      const userIcon = createIcon("fa-user");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-information");
      const taskTitle = document.createElement("h3");
      taskTitle.textContent = el.title;
      const taskDate = document.createElement("time");
      taskDate.textContent = el.date;
      const dateIcon = createIcon("fa-calendar");
      const taskDescription = document.createElement("p");
      taskDescription.textContent = el.description;
      const taskPriority = document.createElement("p");
      taskPriority.textContent = el.priority;

      const priorityIcon = checkPriority(el.priority);

      dateIcon.appendChild(taskDate);
      userIcon.appendChild(taskCaller);
      taskWrapper.appendChild(dateIcon);
      //   taskWrapper.appendChild(taskDate);
      taskWrapper.appendChild(userIcon);
      taskWrapper.appendChild(priorityIcon);
      taskDiv.appendChild(taskTitle);
      taskDiv.appendChild(taskDescription);
      taskDiv.appendChild(taskWrapper);

      taskContainer.appendChild(taskDiv);
    });
    mainDiv.appendChild(taskContainer);
  }
}
