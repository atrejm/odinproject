import Project from "./project";
import Todo from "./todoitem";
import { displayProject } from "./domstuff";

let project1 = new Project("Project1");
project1.addToDoItem(
  new Todo("todo item 1", "item description", "tomorrow", "low")
);
project1.addToDoItem(
  new Todo("todo item 2", "item description", "the next day", "low")
);

let project2 = new Project("Project2");
project2.addToDoItem(
  new Todo("todo item 1", "item description", "tomorrow", "low")
);
project2.addToDoItem(
  new Todo("todo item 2", "item description", "the next day", "low")
);

displayProject(project1);
displayProject(project2);

// const form = {
//     "todo-item":"text",
//     "todo-description":"text",
//     "due-date":"text",
//     "priority":"text",
//     "submit":"submit"
// }
// let formOjb = new Form(form, "project1");
