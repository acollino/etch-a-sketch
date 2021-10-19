const container = document.querySelector(".container");

function resize(numSquares){
  if(numSquares>100){
    numSquares = 100;
  }
  for(let x=0; x<numSquares; x++){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let x=0; x<numSquares; x++){
      let square = document.createElement("div");
      square.classList.add("box");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

resize(16);