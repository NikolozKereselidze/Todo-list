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

function changePriority(caller, title, date, description, priority, icon) {
  const projects = JSON.parse(localStorage.getItem("projects"));
  projects[caller].forEach((project) => {
    if (
      project.title === title &&
      project.date === date &&
      project.description === description &&
      project.priority === priority
    ) {
      if (priority === "low") project.priority = "medium";
      else if (priority === "medium") project.priority = "high";
      else if (priority === "high") project.priority = "low";

      // Update the localStorage with the modified projects array
      localStorage.setItem("projects", JSON.stringify(projects));
      icon = checkPriority(project.priority);
      displayTask();
    }
  });
}

function changeCaller(currentCaller, title, date, description) {
  const projects = JSON.parse(localStorage.getItem("projects"));
  const projectNames = Object.keys(projects);
  const currentIndex = projectNames.indexOf(currentCaller);
  const nextIndex = (currentIndex + 1) % projectNames.length;
  const newCaller = projectNames[nextIndex];

  // Find the task in the current project
  const taskIndex = projects[currentCaller].findIndex(
    (task) =>
      task.title === title &&
      task.date === date &&
      task.description === description
  );

  if (taskIndex !== -1) {
    // Remove the task from the current project
    const [task] = projects[currentCaller].splice(taskIndex, 1);

    // Add the task to the new project
    projects[newCaller].push(task);

    // Update localStorage with the new projects object
    localStorage.setItem("projects", JSON.stringify(projects));
    displayTask(); // Update the displayed tasks
  }
}

function taskStatusListener(caller, title, date, description) {
  const projects = JSON.parse(localStorage.getItem("projects"));

  projects[caller].forEach((project) => {
    if (
      project.title === title &&
      project.date === date &&
      project.description === description
    ) {
      if (project.status === "incomplete") {
        project.status = "complete";
      } else {
        project.status = "incomplete";
      }
    }
  });

  localStorage.setItem("projects", JSON.stringify(projects));
  displayTask();
}

export function displayTask(today, caller, taskDivReceived, taskCont) {
  const mainDiv = document.querySelector(".task-section");
  const projects = JSON.parse(localStorage.getItem("projects")) || {};
  const activeProjectSpan = document.querySelector(".active-project");

  if (activeProjectSpan || caller) {
    let activeProject;
    taskContainer.innerHTML = "";

    if (caller) activeProject = projects[caller];
    else activeProject = projects[activeProjectSpan.textContent];

    activeProject.forEach((el) => {
      const taskWrapper = document.createElement("div");
      taskWrapper.classList.add("task-footer--container");
      const taskCaller = document.createElement("span");
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("task-header--container");
      taskCaller.textContent = activeProjectSpan
        ? activeProjectSpan.textContent
        : caller;
      const userIcon = createIcon("fa-user");
      const statusIcon = createIcon(
        el.status === "complete" ? "fa-check-to-slot" : "fa-xmark-to-slot"
      );
      statusIcon.classList.add("task-status--icon");

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

      let priorityIcon = checkPriority(el.priority);

      priorityIcon.addEventListener("click", () => {
        priorityIcon = changePriority(
          taskCaller.textContent,
          taskTitle.textContent,
          taskDate.textContent,
          taskDescription.textContent,
          taskPriority.textContent,
          priorityIcon
        );
      });

      userIcon.addEventListener("click", () => {
        changeCaller(
          taskCaller.textContent,
          taskTitle.textContent,
          taskDate.textContent,
          taskDescription.textContent
        );
      });

      statusIcon.addEventListener("click", () => {
        taskStatusListener(
          taskCaller.textContent,
          taskTitle.textContent,
          taskDate.textContent,
          taskDescription.textContent
        );
      });

      if (
        (caller && el.date === new Date().toISOString().split("T")[0]) ||
        activeProjectSpan
      ) {
        dateIcon.appendChild(taskDate);
        userIcon.appendChild(taskCaller);
        taskWrapper.appendChild(dateIcon);
        taskWrapper.appendChild(userIcon);
        taskWrapper.appendChild(priorityIcon);
        headerDiv.appendChild(taskTitle);
        headerDiv.appendChild(statusIcon);
        taskDiv.appendChild(headerDiv);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(taskWrapper);

        if (taskCont) {
          taskCont.appendChild(taskDiv);
        } else {
          taskContainer.appendChild(taskDiv);
        }
      }
    });

    if (taskDivReceived) {
      const taskMainDiv = document.querySelector(".task-section");
      if (taskMainDiv) {
        document.querySelector(".main-section").removeChild(taskMainDiv);
      }
      taskDivReceived.innerHtml = "";
      taskDivReceived.appendChild(taskCont);
    } else {
      const taskDivReceived = document.querySelector(".today-task--section");
      if (taskDivReceived) {
        document.querySelector(".main-section").removeChild(taskDivReceived);
        const activeToday = document.querySelector(".active");
        activeToday.classList.remove("active");
      }
      mainDiv.appendChild(taskContainer);
    }
  }
}
