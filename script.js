let body = document.body;
let pixelBoard = document.getElementById("pixel-board");

let colorBlack = document.querySelector(".black");
let colorRed = document.querySelector(".red");
let colorGreen = document.querySelector(".green");
let colorYellow = document.querySelector(".yellow");



for(let index1 = 0; index1 < 5; index1 += 1){
    for(let index2 = 1; index2 <= 5; index2 +=1){
        let pixels = document.createElement("div");
        pixels.classList.add("pixel");
        // pixels.innerHTML= index1;

        pixelBoard.appendChild(pixels);
    } 
    let br = document.createElement("br");
    pixelBoard.appendChild(br);
}


function changeBlack(){
    colorBlack.classList.add("selected");
    colorRed.classList.remove("selected");
    colorGreen.classList.remove("selected");
    colorYellow.classList.remove("selected");
}

colorBlack.addEventListener("click", changeBlack);

function changeRed(){
    colorRed.classList.add("selected");
    colorBlack.classList.remove("selected");
    colorGreen.classList.remove("selected");
    colorYellow.classList.remove("selected");
}

colorRed.addEventListener("click", changeRed);


function changeGreen(){
    colorGreen.classList.add("selected");
    colorRed.classList.remove("selected");
    colorBlack.classList.remove("selected");
    colorYellow.classList.remove("selected");
}

colorGreen.addEventListener("click", changeGreen);

function changeYellow(){
    colorYellow.classList.add("selected");
    colorGreen.classList.remove("selected");
    colorRed.classList.remove("selected");
    colorBlack.classList.remove("selected");
}

colorYellow.addEventListener("click", changeYellow);




