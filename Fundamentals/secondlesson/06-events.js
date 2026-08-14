// Events 
// Methods for adding and removing event listeners
button.addEventListener("click", greet);
button.removeEventListener("dblclick", greet);
button.releasePointerCapture("mouseout", greet);
button.onclick = () => {
    console.log("Button clicked!");
}; // You can add a function to an event listener using the onclick property of the button element. This is a simpler way to add an event listener, but it can only be used for one event at a time. If you want to add multiple event listeners to the same element, you should use addEventListener() instead.

// Event object
button.addEventListener("click", (event) => {
  console.log(event);
}); // Quickly explaining, the event object contains event details and properties for handling events in JavaScript.

// Event bubbling and capturing
const parent = document.querySelector("#parent");
const child = document.querySelector("#child"); 
// Assuming you have a parent element with an id of "parent" and a child element with an id of "child" in your HTML, you can add event listeners to both elements to demonstrate event bubbling and capturing.
parent.addEventListener("click", (event) => {
  console.log("Parent clicked!");
}, true); // why bubbling? because the third parameter is set to true, which means the event will be captured during the capturing phase. If it were set to false or omitted, it would default to bubbling phase.

// capture is parent to child, bubbling is child to parent. The event will first be captured by the parent element and then bubble up to the child element. If you click on the child element, the event will first be captured by the parent element and then bubble up to the child element. If you click on the parent element, the event will first be captured by the parent element and then bubble up to the child element.
