class Todo {
    static count = 0

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = ++this.constructor.count;
    }

    
}

export default Todo;