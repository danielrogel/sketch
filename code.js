const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
let size = 16;



function createGrid(size) {
    for (let index = 0; index < size; index++) {
        div = document.createElement("div")
        div.setAttribute("class", "row")
        for (let j = 0; j < size; j++) {
            const element = document.createElement("div")
            element.setAttribute("class", "block")
            element.addEventListener("mouseover", (event) => {
                let op = window.getComputedStyle(element).getPropertyValue("opacity");
                element.style.opacity = parseFloat(op) + 0.2;
            });
            div.appendChild(element)
        }
        
        container.appendChild(div);
    }
}
btn.addEventListener("click", (event) => {
    size = parseInt(prompt("Enter a Value", "0"));
    if (size < 101) {
        
    
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
        createGrid(size)
    }
});

createGrid(size)
