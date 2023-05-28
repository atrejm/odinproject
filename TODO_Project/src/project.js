import Todo from './todoitem'
import Form from './form';

class Project {
    static count = 0

    constructor(projectName) {
        this.todoItems = [];
        this.projectName = projectName;
        this.id = ++this.constructor.count
        this.id = "project" + this.id
    }

    get todo_list() {
        return this.todoItems;
    }

    addToDoItem(todo){  
        this.todoItems.push(todo);
    }

    sayName() {
        console.log(this.projectName)
    }

    createForm() {
        const form = {
            "todo-item":"text",
            "todo-description":"text",
            "due-date":"text",
            "priority":"text",
            "submit":"submit"
        }

        this.formObj = new Form(form, this.id);
        this.formObj.hideForm();
    }

    toDoButtonPressed( event ) {
        console.log("todobuttonpressed for " + event.target.parentNode.id)
        let projectID = event.target.parentNode.id;
        let formElement = document.getElementById(projectID + "form");
        formElement.hidden = false;
    }   
}

export default Project;