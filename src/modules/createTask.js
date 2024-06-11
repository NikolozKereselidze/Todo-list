import { createEl } from "./createProject";
import { displayTask } from "./displayTask";
import { createIcon, projectClickHandler } from "./initial";

const taskDiv = document.createElement("div");
const taskSection = document.createElement("div");
const taskForm = document.createElement("form");
const mainSection = document.querySelector(".main-section");
let taskModalDiv;

export function selectProject() {
  const projectDivs = document.querySelectorAll(".project-div");
  if (projectDivs.length > 0) {
    projectDivs.forEach((projectDiv) => {
      const projectSpan = projectDiv.children[0];
      projectSpan.addEventListener("click", () => {
        const isActive = document.querySelector(".active-project");
        if (isActive) {
          isActive.classList.remove("active-project");
          isActive.dataset.taskDisplayed = "false";
        }
        projectSpan.classList.toggle("active-project");

        taskDiv.classList.add("task-div");
        taskSection.classList.add("task-section");
        createTask(projectSpan.textContent, taskDiv);

        if (projectSpan.dataset.taskDisplayed !== "true") {
          displayTask();
          // Set the data attribute to indicate that displayTask has been called
          projectSpan.dataset.taskDisplayed = "true";
        }
      });
    });
  }
}

export function createTask(projectName, taskDiv) {
  taskDiv.innerHTML = "";
  const taskHeader = document.createElement("span");
  taskHeader.textContent = projectName;
  taskHeader.classList.add("task-header");
  const plusIcon = createIcon("fa-plus");
  taskDiv.appendChild(taskHeader);
  taskDiv.appendChild(plusIcon);
  taskSection.appendChild(taskDiv);
  mainSection.appendChild(taskSection);

  plusIcon.addEventListener("click", () => {
    if (!taskModalDiv) {
      // Check if modal already exists
      createTaskModal();
      projectClickHandler(".task-modal");
    } else {
      taskModalDiv.innerHTML = "";
      createTaskModal();
      projectClickHandler(".task-modal");
    }
  });
}

function createTaskInput(placeholder, name, taskModalBody) {
  const taskInputDiv = document.createElement("div");
  const label = document.createElement("label");
  const radioContainer = document.createElement("div");
  taskForm.classList.add("task-form");
  label.textContent = placeholder;
  label.setAttribute("for", name);

  if (placeholder === "Description:") {
    const textarea = document.createElement("textarea");
    textarea.required = true;
    textarea.setAttribute("id", name);
    textarea.setAttribute("name", name);
    taskInputDiv.appendChild(label);
    taskInputDiv.appendChild(textarea);
  } else {
    const input = document.createElement("input");
    input.required = true;

    input.setAttribute("id", name);
    input.setAttribute("name", name);

    if (placeholder === "Date:") {
      input.type = "date";
    }

    if (placeholder === "Priority:") {
      const priorities = ["Low", "Medium", "High"];
      priorities.forEach((priority) => {
        const radioLabel = document.createElement("label");
        radioLabel.textContent = priority;

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.required = true;
        radioInput.name = name;
        radioInput.classList.add("task-priority");

        radioInput.value = priority.toLowerCase();

        radioContainer.appendChild(radioInput);
        radioContainer.appendChild(radioLabel);
      });

      taskInputDiv.appendChild(label);
      taskInputDiv.appendChild(radioContainer);
    } else {
      taskInputDiv.appendChild(label);
      taskInputDiv.appendChild(input);
    }
  }

  taskForm.appendChild(taskInputDiv);

  taskModalBody.appendChild(taskForm);

  return taskInputDiv;
}

function createTaskModal() {
  taskModalDiv = document.createElement("div");
  taskModalDiv.classList.add("task-modal");

  const taskModalHeader = document.createElement("div");
  taskModalHeader.classList.add("task-modal--header");

  const taskTitle = document.createElement("h5");
  taskTitle.textContent = "New Task";

  const closeIcon = createIcon("fa-close");

  taskModalHeader.appendChild(taskTitle);
  taskModalHeader.appendChild(closeIcon);

  closeIcon.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    projectClickHandler(".task-modal");
    taskForm.innerHTML = "";
    mainSection.removeChild(taskModalDiv);
  });

  const taskModalBody = document.createElement("div");
  taskModalBody.classList.add("task-modal--body");

  const titleInput = createTaskInput("Title:", "task-title", taskModalBody);

  const dateInput = createTaskInput("Date:", "task-date", taskModalBody);

  const descriptionInput = createTaskInput(
    "Description:",
    "task-description",
    taskModalBody
  );

  const priorityInput = createTaskInput(
    "Priority:",
    "task-priority",
    taskModalBody
  );

  const taskModalContainer = document.createElement("div");
  taskModalContainer.classList.add("modal");

  const taskmodalButtons = document.createElement("div");
  taskmodalButtons.classList.add("task-modal--buttons");

  const addButton = createEl("button", "Add Task");
  addButton.classList.add("add-task");
  addButton.type = "submit";

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const taskTitle = document.querySelector("#task-title");
    const taskDate = document.querySelector("#task-date");
    const taskDescription = document.querySelector("#task-description");
    const taskPriority = document.querySelector(".task-priority:checked"); // Get the checked radio input

    if (taskTitle && taskDate && taskPriority) {
      const task = {
        title: taskTitle.value,
        date: taskDate.value,
        description: taskDescription.value,
        priority: taskPriority.value,
      };

      const activeProjectSpan = document.querySelector(".active-project");
      if (activeProjectSpan) {
        const activeProjectName = activeProjectSpan.textContent;
        const projects = JSON.parse(localStorage.getItem("projects")) || {};
        if (!projects[activeProjectName]) {
          projects[activeProjectName] = [];
        }
        projects[activeProjectName].push(task);
        localStorage.setItem("projects", JSON.stringify(projects));

        console.log(`Task added to project ${activeProjectName}:`, task);
        taskForm.innerHTML = "";
      } else {
        console.error("No active project selected.");
      }

      displayTask();
      projectClickHandler(".task-modal");
      taskForm.reset();
      mainSection.removeChild(taskModalDiv);
      taskModalDiv = null;
    } else {
      console.error("One or more required fields are missing.");
    }
  });

  taskmodalButtons.appendChild(addButton);

  taskModalContainer.appendChild(taskModalHeader);
  taskModalContainer.appendChild(taskModalBody);
  taskForm.appendChild(taskmodalButtons);
  taskModalDiv.appendChild(taskModalContainer);
  mainSection.appendChild(taskModalDiv);
}
