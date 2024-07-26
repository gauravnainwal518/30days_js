//Topic- Event handling
//Activity-1- Basic Event handling
//task1- 
//add a click event listner to a button that changes the text content of a paragraph.
const button = document.getElementById("myButton");
  const paragraph = document.getElementById("myParagraph");

  button.addEventListener("click", () => {
    paragraph.textContent = "The text has been changed!";
  });

  //task-2-add a double-click event listner to an image that toggles its visibility

  const image = document.getElementById("myImage");

  image.addEventListener ('dblclick', ()=>{
   if(image.style.display==="none"){
    image.style.display = "block";
   }else{
    image.style.display = "none";
   }
  })

  //Activity-2- Mouse Events
  //task-3- Add a mouseover event listner to an element that change its background color
   //task-4- add a mouseout event listner to an element that reset its background color

   const element = document.getElementById("myElement")

  element.addEventListener ("mouseover", () =>{
    element.style.backgroundColor = "yellow"
  });

  element.addEventListener ("mouseout", () =>{
    element.style.backgroundColor = "lightblue"
  });

  //Activity-3- Keyboard Events
  //task-5- add a keydown event listner to an input field that logs the key pressed to the console
  //task-6- add a keyup event listner to an input field that display the current value in paragraph

  const inputField = document.getElementById("myInput");
  const outputParagraph = document.getElementById("outputParagraph");

  inputField.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
  });

  inputField.addEventListener("keyup", () => {
    outputParagraph.textContent = inputField.value;
  });

  //Activity-4- Form Events
  //task-7- Add a shortcut event listner to a form that prevents the default submisson and logs the form data to the console
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log("Form Data:", formObject);
  });

  //task-8-Add a change event listner to a selct dropdown that displays the selected value in  a paragraph
  const selectDropdown = document.getElementById("mySelect");
  const displayParagraph = document.getElementById("displayParagraph");

  selectDropdown.addEventListener("change", () => {
    displayParagraph.textContent = `Selected: ${selectDropdown.value}`;
  });

  //Activity-5- Event Deligation
  //task-9- Add a click event listner to a list that logs the text content of the clicked list item using event deligation.
  const list = document.getElementById("myList");

  list.addEventListener("click", (event) => {
    // Check if the clicked element is a list item
    if (event.target && event.target.nodeName === "LI") {
      console.log(`List item clicked: ${event.target.textContent}`);
    }
  });


  //task-10- Add a event listner to a parent element that listens for events from dynamically added child elements.
  const parentElement = document.getElementById("parentElement");
  const addElementButton = document.getElementById("addElementButton");

  parentElement.addEventListener("click", (event) => {
    // Check if the clicked element is a dynamically added child element
    if (event.target && event.target.classList.contains("childElement")) {
      console.log(`Child element clicked: ${event.target.textContent}`);
    }
  });

  // Function to add a new child element to the parent element
  const addChildElement = () => {
    const newChild = document.createElement("div");
    newChild.classList.add("childElement");
    newChild.textContent = `Child Element ${parentElement.children.length}`;
    parentElement.appendChild(newChild);
  };

  // Event listener to add a new child element when the button is clicked
  addElementButton.addEventListener("click", addChildElement);