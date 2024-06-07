import { createSidebar } from "./initial";
import "../css/style.css";
import { createProject } from "./createProject";
import { createTask, selectProject } from "./createTask";

createSidebar();
createProject();
selectProject();
