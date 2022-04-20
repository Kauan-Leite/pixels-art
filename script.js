let body = document.body;
let pixelBoard = document.getElementById("pixel-board");

let colorBlack = document.querySelector(".black");
let colorRed = document.querySelector(".red");
let colorGreen = document.querySelector(".green");
let colorYellow = document.querySelector(".yellow");


let count1 = 0;

for(let index1 = 1; index1 <= 5; index1 += 1){
    for(let index2 = 1; index2 <= 5; index2 +=1){
        count1 += 1;
        let pixels = document.createElement("div");
        pixels.classList.add("pixel");
        pixels.classList.add(count1);
        // pixels.classList.add("linha" + index1);
        // pixels.classList.add("coluna" + index2);
        // pixels.innerHTML= index1;

        pixelBoard.appendChild(pixels);
    } 
    let br = document.createElement("br");
    pixelBoard.appendChild(br);
}



let colorSelect = "black";

function changeBlack(){
    colorBlack.classList.add("selected");
    colorRed.classList.remove("selected");
    colorGreen.classList.remove("selected");
    colorYellow.classList.remove("selected");
    colorSelect = "black";

}

colorBlack.addEventListener("click", changeBlack);

function changeRed(){
    colorRed.classList.add("selected");
    colorBlack.classList.remove("selected");
    colorGreen.classList.remove("selected");
    colorYellow.classList.remove("selected");
    colorSelect = "red";

}

colorRed.addEventListener("click", changeRed);


function changeGreen(){
    colorGreen.classList.add("selected");
    colorRed.classList.remove("selected");
    colorBlack.classList.remove("selected");
    colorYellow.classList.remove("selected");
    colorSelect = "green";

}

colorGreen.addEventListener("click", changeGreen);

function changeYellow(){
    colorYellow.classList.add("selected");
    colorGreen.classList.remove("selected");
    colorRed.classList.remove("selected");
    colorBlack.classList.remove("selected");
    colorSelect = "yellow";

}

colorYellow.addEventListener("click", changeYellow);

let count2 = 1;




for(let index = 1; index <= count1; index += 1){
    let pixelN = document.getElementsByClassName(index)[0]
    function test(){
        // pixelN.classList.add("paint");
        pixelN.style.backgroundColor = colorSelect;
    }

    pixelN.addEventListener("click", test);
}




let botao = document.getElementById("clear-board");

for(let index = 1; index <= count1; index += 1){
    function vasco(){
    let allPixels = document.getElementsByClassName(index)[0]

        // allPixels.classList.remove("paint");
        allPixels.style.backgroundColor = "white";
    }

    botao.addEventListener('click', vasco)

}