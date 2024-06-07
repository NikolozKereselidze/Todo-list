import { selectProject } from "./createTask";
import { projectClickHandler } from "./initial";

const main = document.querySelector(".main-section");

export function createEl(el, text) {
  const element = document.createElement(el);
  element.textContent = text;
  return element;
}

export function createProject() {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("modal-overlay");

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("modal");

  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const projectMessage = createEl("h3", "New Project");

  const projectName = createEl("label", "Project Name:");
  projectName.setAttribute("for", "project-title");

  const projectInput = document.createElement("input");
  projectInput.setAttribute("id", "project-title");
  projectInput.setAttribute("name", "project-title");

  const closeButton = createEl("button", "Close");
  closeButton.classList.add("close-modal");

  closeButton.addEventListener("click", () => {
    projectClickHandler(".modal-overlay");
  });

  const addButton = createEl("button", "Add Project");
  addButton.classList.add("add-project");

  addButton.addEventListener("click", () => {
    const projectName = projectInput.value;
    if (projectName) {
      const projects = JSON.parse(localStorage.getItem("projects")) || {};
      projects[projectName] = projects[projectName] || [];
      localStorage.setItem("projects", JSON.stringify(projects));

      const createdProjectDiv = document.createElement("div");
      createdProjectDiv.classList.add("project-div");
      const createdProjectName = document.createElement("span");
      createdProjectName.textContent = projectName;

      createdProjectDiv.appendChild(createdProjectName);
      document.querySelector(".sidebar").appendChild(createdProjectDiv);

      projectClickHandler(".modal-overlay");
      projectInput.value = "";
      selectProject();
    }
  });

  projectInput.addEventListener("input", () => {
    if (projectInput.value) {
      projectInput.classList.add("filled-input");
    } else {
      projectInput.classList.remove("filled-input");
    }
  });

  modalButtons.appendChild(closeButton);
  modalButtons.appendChild(addButton);

  projectContainer.appendChild(projectMessage);
  projectContainer.appendChild(projectName);
  projectContainer.appendChild(projectInput);
  projectContainer.appendChild(modalButtons);

  projectDiv.appendChild(projectContainer);
  main.appendChild(projectDiv);
}
