function Book(title, author, pages, id, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id

    this.info = function() {
        return (`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read? : ${this.read}`)
    }

    this.flagRead = function() {
        this.read = true
    }
}

let myLibrary = []
let bookLibrary = {}

const book1 = new Book("Title Wow! ", "Atrej Mak ", 250, 1, false);
const book2 = new Book("Title two! ", "Atrej Mak ", 300, 2, false);

bookLibrary[1] = book1
bookLibrary[2] = book2

let bookID = 3

function displayBooks() { 
    let library = document.getElementById("library")
    let child = library.lastElementChild
    while (child) {
        console.log("removing child")
        library.removeChild(child)
        child = library.lastElementChild
    }

    for(var key in bookLibrary) {
        const node = document.createElement("li")
        const removeButton = document.createElement("button")
        removeButton.innerText = "Delete"
        removeButton.id = bookLibrary[key].id
        removeButton.onclick = removeBook
        const readButton = document.createElement("button")
        readButton.innerText = "Read"
        readButton.id = bookLibrary[key].id
        readButton.onclick = readBook
        const textNode = document.createTextNode(bookLibrary[key].info())
        node.appendChild(removeButton)
        node.append(readButton)
        node.appendChild(textNode)
        let element = document.getElementById("library")
        element.appendChild(node)

    }

    // for(let i = 0; i < myLibrary.length; i++) {
    //     const node = document.createElement("li")
    //     const textNode = document.createTextNode(myLibrary[i].info())
    //     node.appendChild(textNode)
    //     let element = document.getElementById("library")
    //     element.appendChild(node)
    // }
}

function openForm() {
    let form = document.getElementById("bookForm")
    form.hidden = false
}

function closeForm() {
    let form = document.getElementById("bookForm")
    form.hidden = true
}

myLibrary.push(book1)
myLibrary.push(book2)

const addBookButton = document.querySelector('#addBook')
addBookButton.addEventListener('click', openForm)

const submitBookForm = document.querySelector('#bookForm')
submitBookForm.addEventListener('submit', addBookToLibrary, false)

// const removeBookButton = document.querySelector('#removeBook')
// removeBookButton.addEventListener('click', removeBook)

displayBooks()

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.getElementsByName("title")[0].value;
    let author = document.getElementsByName("author")[0].value;
    let pages = document.getElementsByName("pages")[0].value;
    let read = document.getElementsByName("read")[0].value;
    let book = new Book(title, author, pages, bookID, read)
    book.id = bookID
    bookLibrary[bookID] = book
    bookID += 1
    closeForm()
    displayBooks()
}

function removeBook(event) {
    let id = event.target.id
    delete bookLibrary[id]
    
    console.log(bookLibrary)

    displayBooks()
}

function readBook(event) {
    let id = event.target.id
    bookLibrary[id].flagRead()
    console.log(bookLibrary[id])
    console.log(bookLibrary[id].info())
    displayBooks()
}