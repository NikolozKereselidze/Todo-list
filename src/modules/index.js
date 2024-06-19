import { createSidebar } from "./initial";
import "../css/style.css";
import { createProject } from "./createProject";
import { createTask, selectProject } from "./createTask";
import { displayTask } from "./displayTask";
import { displayToday } from "./displayToday";

createSidebar();
createProject();
selectProject();
displayTask();
displayToday();
