const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");

export function displayTask() {
  const mainDiv = document.querySelector(".task-section");
  const projects = JSON.parse(localStorage.getItem("projects")) || {};
  const activeProjectSpan = document.querySelector(".active-project");

  taskContainer.innerHTML = "";

  if (activeProjectSpan) {
    const activeProject = projects[activeProjectSpan.textContent];
    activeProject.forEach((el) => {
      const taskWrapper = document.createElement("div");
      const taskCaller = document.createElement("p");
      taskCaller.textContent = activeProjectSpan.textContent;
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-information");
      const taskTitle = document.createElement("h3");
      taskTitle.textContent = el.title;
      const taskDate = document.createElement("time");
      taskDate.textContent = el.date;
      const taskDescription = document.createElement("p");
      taskDescription.textContent = el.description;
      const taskPriority = document.createElement("p");
      taskPriority.textContent = el.priority;

      taskWrapper.appendChild(taskDate);
      taskWrapper.appendChild(taskCaller);
      taskWrapper.appendChild(taskPriority);
      taskDiv.appendChild(taskTitle);
      taskDiv.appendChild(taskDescription);
      taskDiv.appendChild(taskWrapper);

      taskContainer.appendChild(taskDiv);
    });
    mainDiv.appendChild(taskContainer);
  }
}
