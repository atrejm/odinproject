import Todo from "./todoitem";
import Project from "./project";

export function displayProject(project){
    let element = document.createElement("div");
    
    element.id = project.id;
    element.classList = "project container";
    let projectHeader = document.createElement("h1");
    projectHeader.classList = "projectheader";
    projectHeader.innerText = project.projectName;
    element.appendChild(projectHeader);
    appendToDoButton(element, project)

    for (let i = 0; i < project.todo_list.length; i++) {
        element.appendChild(appendTodoItem(project.todo_list[i]))
    }

    let content = document.getElementById("content");
    content.appendChild(element);
    project.createForm()
}

function appendToDoButton ( element, project ) {
    let button = document.createElement("button");
    button.innerText = "Add TODO Item";
    button.id = "todobutton" + project.id;
    console.log("button for " + project.id)
    button.onclick = project.toDoButtonPressed
    element.appendChild(button);
}

function appendTodoItem ( todo ) {
    let element = document.createElement("div");
    element.classList = "todo";
    element.id = todo.id;
    element.innerText = `Title: ${todo.title}
                        \tDescription: ${todo.description}
                        \tDuedate: ${todo.dueDate}
                        \tID: ${todo.id}\n\n`;

    return element
}

export function displayTodo(todo) {

}
