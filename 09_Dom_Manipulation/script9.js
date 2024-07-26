//activity-1- selecting and manuplating element
//task-1

let text = document.getElementById("text")
text.textContent = "This is changed paragraph"

//task-2
let bgColorElements = document.getElementsByClassName("bgColor");
for (let i = 0; i < bgColorElements.length; i++) {
    bgColorElements[i].style.backgroundColor = "yellow";
}

//activity-2- creating and appending elements
//task-3
const div = document.createElement("div")
div.textContent = "This is content inside div"
document.body.appendChild(div)

//task-4
let unorderdList = document.querySelector("ul")
let list = document.createElement("li")
list.textContent = "L3(appended)"
unorderdList.appendChild(list)

//activity-3- Removing elements
//task-5
let remove = document.getElementById("remove")
remove.remove()


//task-6
unorderdList.removeChild(unorderdList.lastElementChild);

//activity-4-Modifying attribute and class
//task-7
let image = document.querySelector("img")
image.src = "changed_link.jpg"

//task-8
let addedClass = document.getElementsByClassName("Added_class");
for (let i = 0; i < addedClass.length; i++) {
    addedClass[i].classList.add("newClass");
}
let removeClass = document.getElementsByClassName("Remove_class");
for (let i = 0; i < removeClass.length; i++) {
    removeClass[i].classList.remove("Remove_class");
}

//activity-5-Event handling
//task-9
let para = document.querySelector("p");
let button = document.querySelector("button")

button.addEventListener("click", ()=>{
    para.textContent = "This is new para content"
})


//task-10
const div1 = document.getElementById("div1");

div1.addEventListener("mouseover", () => {
    div1.style.border = "2px solid yellow";
});