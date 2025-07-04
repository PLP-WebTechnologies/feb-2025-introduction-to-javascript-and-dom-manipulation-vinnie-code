       // Change text content dynamically
const changeTextBtn = document.getElementById("change-text-btn");
const textToChange = document.getElementById("text-to-change");

changeTextBtn.addEventListener("click", () => {
  textToChange.textContent = "The text has been changed dynamically!";
  textToChange.style.color = "darkblue"; // Modify CSS styles
  textToChange.style.fontWeight = "bold";
});

// Add or remove element on button click
const toggleBoxBtn = document.getElementById("toggle-box-btn");
const boxContainer = document.getElementById("box-container");

toggleBoxBtn.addEventListener("click", () => {
  const existingBox = document.getElementById("dynamic-box");

  if (existingBox) {
    // Remove the box if it exists
    boxContainer.removeChild(existingBox);
  } else {
    // Create and add a new box element
    const box = document.createElement("div");
    box.id = "dynamic-box";
    box.textContent = "I'm a dynamically added box!";
    box.style.width = "200px";
    box.style.height = "100px";
    box.style.backgroundColor = "lightcoral";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.marginTop = "10px";
    box.style.borderRadius = "8px";
    box.style.color = "white";
    box.style.fontWeight = "600";

    boxContainer.appendChild(box);
  }
});
