// Variaveis
let body = document.body;
let pixelBoard = document.getElementById("pixel-board");

let colorBlack = document.querySelector(".black");
let colorOne = document.querySelector(".one");
let colorTwo = document.querySelector(".two");
let colorThree = document.querySelector(".three");

let count1 = 0;


// Adiciona os Pixels no Quadro de Pixels
for(let index1 = 1; index1 <= 5; index1 += 1){
    for(let index2 = 1; index2 <= 5; index2 +=1){
        count1 += 1;
        let pixels = document.createElement("div");
        pixels.classList.add("pixel");
        pixels.classList.add(count1);
        pixelBoard.appendChild(pixels);
    } 
    let br = document.createElement("br");
    pixelBoard.appendChild(br);
}


// Selecionar a Cor na Paletta de Cores
let colorSelect = "black";

function changeBlack(){
    colorBlack.classList.add("selected");
    colorOne.classList.remove("selected");
    colorTwo.classList.remove("selected");
    colorThree.classList.remove("selected");
    colorSelect = "black";
}
    colorBlack.addEventListener("click", changeBlack);

function changeOne(){
    colorOne.classList.add("selected");
    colorBlack.classList.remove("selected");
    colorTwo.classList.remove("selected");
    colorThree.classList.remove("selected");
    colorSelect = "red";
}
    colorOne.addEventListener("click", changeOne);

function changeTwo(){
    colorTwo.classList.add("selected");
    colorOne.classList.remove("selected");
    colorBlack.classList.remove("selected");
    colorThree.classList.remove("selected");
    colorSelect = "green";
}
    colorTwo.addEventListener("click", changeTwo);

function changeThree(){
    colorThree.classList.add("selected");
    colorTwo.classList.remove("selected");
    colorOne.classList.remove("selected");
    colorBlack.classList.remove("selected");
    colorSelect = "yellow";
}
    colorThree.addEventListener("click", changeThree);


// Pinta os Pixels com a Cor Selecionada
for(let index = 1; index <= count1; index += 1){
    let pixelN = document.getElementsByClassName(index)[0];

    function paint(){
        pixelN.style.backgroundColor = colorSelect;
    }
    pixelN.addEventListener("click", paint);
}


// Limpa as Cores do Quadro de Pixels
let botao = document.getElementById("clear-board");
for(let index = 1; index <= count1; index += 1){
    function removeColor(){
    let allPixels = document.getElementsByClassName(index)[0];

        allPixels.style.backgroundColor = "white";
    }
    botao.addEventListener('click', removeColor)
}