const divContainer = document.querySelector("#container");
const paraComponent = document.createElement("p");
divContainer.appendChild(paraComponent);
paraComponent.style.color = "red";
paraComponent.innerText = "Hey I'm Red !"

const h3Component = document.createElement("h3");
divContainer.appendChild(h3Component);
h3Component.style.color = "blue";
h3Component.innerText = "Hey I'm Blue !"

const childDivComponent = document.createElement("div");
divContainer.appendChild(childDivComponent);
//childDivComponent.style.borderBlockColor = "black";
childDivComponent.style.backgroundColor = "pink";
childDivComponent.style["borderColor"] = "black";

const h1Component = document.createElement("h1");
childDivComponent.appendChild(h1Component);
h1Component.innerText = "I'm in a div";

const anotherParaComponent = document.createElement("p");
childDivComponent.appendChild(anotherParaComponent);
anotherParaComponent.innerText = "ME TOO !";

const buttonComponent = document.querySelector("#container>#btn");
buttonComponent.onclick = ()=>{alert("Hello World")};