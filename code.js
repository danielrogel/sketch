const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
let size = 16;
btn.addEventListener("click", (event) => {
    size = parseInt(prompt("Enter a Value", "0"));
    if (size < 101) {
        
    
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
        for (let index = 0; index < size; index++) {
            div = document.createElement("div")
            div.setAttribute("class", "row")
            for (let j = 0; j < size; j++) {
                const element = document.createElement("div")
                element.setAttribute("class", "block")
                element.addEventListener("mouseover", (event) => {
                    element.style.backgroundColor = "blue"
                });
        
                element.addEventListener("mouseout", (event) => {
                    element.style.backgroundColor = "red"
                });
                div.appendChild(element)
            }
            
            container.appendChild(div);
        }
    }
});


for (let index = 0; index < size; index++) {
    div = document.createElement("div")
    div.setAttribute("class", "row")
    for (let j = 0; j < size; j++) {
        const element = document.createElement("div")
        element.setAttribute("class", "block")
        element.addEventListener("mouseover", (event) => {
            element.style.backgroundColor = "blue"
        });

        element.addEventListener("mouseout", (event) => {
            element.style.backgroundColor = "red"
        });
        div.appendChild(element)
    }
    container.appendChild(div);
}