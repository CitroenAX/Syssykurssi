
if(document.readyState !== "loading") {
    console.log("Document is ready!");

} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waitin!");
        initializeCode();
})
}

let noteCounter = 0;

function initializeCode() {
    const addNoteButton = document.getElementById("add-note");
    const removeNoteButton = document.getElementById("remove-note");

    addNoteButton.addEventListener("click", function() {
        const notes = document.getElementById("notes")

        let newParagraph = document.createElement("p");

        newParagraph.innerText =  ++noteCounter + ". " + document.getElementById("message").value

        notes.appendChild(newParagraph);
    })

    removeNoteButton.addEventListener("click", function() {
        const notes = document.getElementById("notes")

        notes.removeChild(notes.lastChild);
        noteCounter--;
    })
}






/*
console.log("hello World");

let numbers = [];

numbers.push(8)
numbers.push(16)
numbers.push(256)

console.log(numbers);

numbers.unshift(666)

console.log(numbers);

let number = numbers.pop()

console.log(numbers);
console.log(number);

let student = {
    name: "David",
    id: "123123"

}

let students = [];

students.push(student)
students.push({name: "Chen", id: "32245"})
students.push({name: "Chel", id: "32645"})
students.push({name: "Bruce", id: "39685"})

console.log(students)

students.forEach(s => console.log(s))

while (students.length > 0) {
    console.log(students.pop())
}

console.log(students) 
*/