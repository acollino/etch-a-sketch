const container = document.querySelector(".container");
const button = document.querySelector("#reset");
const label = document.querySelector(".label");
let size = 16;
let decrement = [];

button.addEventListener("click", function(e){
  let newSize = prompt("Enter a new number of squares per side!", size);
  resize(newSize);
});

function resize(numSquares){
  size = numSquares;
  while(container.hasChildNodes()){
    container.removeChild(container.firstChild);
  }
  if(numSquares>100){
    numSquares = 100;
  }
  for(let y=0; y<numSquares; y++){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let x=0; x<numSquares; x++){
      let square = document.createElement("div");
      square.style.backgroundColor = "darkgray";
      square.classList.add("box");
      square.addEventListener("mouseenter", function(e){
        square.style.backgroundColor = darken(square);
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  label.textContent = "Current Size: "+numSquares;}

function darken(square){
  let color = window.getComputedStyle(square).backgroundColor;
  let start = color.indexOf("(");
  color = color.substring(start+1, color.length-1);
  let values = color.split(", ");
  let newValues = [];
  if(decrement.length==0){
    for(let x=0; x<3; x++){
      decrement.push(values[x]/10);
    }
  }
  for(let x=0; x<3; x++){
    newValues[x] = values[x]-decrement[x];
  }
  let newColor = `rgb(${newValues[0]}, ${newValues[1]}, ${newValues[2]})`;
  return newColor;
}

resize(size);