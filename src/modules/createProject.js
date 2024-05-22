const main = document.querySelector(".main-section");

function createEl(el, text) {
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

  const addButton = createEl("button", "Add Project");

  modalButtons.appendChild(closeButton);
  modalButtons.appendChild(addButton);

  projectContainer.appendChild(projectMessage);
  projectContainer.appendChild(projectName);
  projectContainer.appendChild(projectInput);
  projectContainer.appendChild(modalButtons);

  projectDiv.appendChild(projectContainer);
  main.appendChild(projectDiv);
}
