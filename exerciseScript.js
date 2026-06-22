var count = 0;
var incrementCount = 0,decrementCount = 0;

const mainContainer = document.querySelector("#container");

const pageHeader = document.createElement("h1");
pageHeader.innerText = "Counter Dashboard";
mainContainer.append(pageHeader);


const currentCount = document.createElement("p");
currentCount.innerText = `Current Count:0`;
mainContainer.append(currentCount);


const incrementButton = document.createElement("button");
incrementButton.setAttribute("id","btn1");
const decrementButton = document.createElement("button");
decrementButton.setAttribute("id","btn2");
const resetButton = document.createElement("button");
resetButton.setAttribute("id","btn3");

mainContainer.append(incrementButton);
mainContainer.append(decrementButton);
mainContainer.append(resetButton);

incrementButton.innerText = "[ + Increment ]";
decrementButton.innerText = "[ - Decrement ]";
resetButton.innerText = "[ Reset ]";

incrementButton.style.display="block";
decrementButton.style.display="block";
resetButton.style.display="block";

const incrementCountInfo = document.createElement("p");
const decrementCountInfo = document.createElement("p");

mainContainer.append(incrementCountInfo);
mainContainer.append(decrementCountInfo);

incrementCountInfo.innerText = `You clicked increment 0 times`;
decrementCountInfo.innerText = `You clicked decrement 0 times`;

const specialMessage = document.createElement("h3");
specialMessage.innerText=`🎉 Count reached 10!`;
mainContainer.append(specialMessage);

specialMessage.hidden = count<10;


const incrementButtonFunc = document.querySelector("#btn1");
const decrementButtonFunc = document.querySelector("#btn2");
const resetButtonFunc = document.querySelector("#btn3");

function render(){
    currentCount.innerText = `Current count:${count}`;
    incrementCountInfo.innerText = `You clicked increment ${incrementCount} times`;
    decrementCountInfo.innerText = `You clicked decrement ${decrementCount} times`;

    if(count === 0)currentCount.style.color = "black";
    else currentCount.style.color = count > 0 ? "green" : "red";
    specialMessage.hidden = count<10;


}

incrementButtonFunc.addEventListener("click",()=>{
    count++;
    incrementCount++;
    render();
})

decrementButtonFunc.addEventListener("click",()=>{
    count--;
    decrementCount++;
    render();
})

resetButtonFunc.addEventListener("click",()=>{
    count = 0;
    incrementCount =0;
    decrementCount = 0;

    render();
})