// Variaveis
let body = document.body;       // Body
let pixelBoard = document.getElementById("pixel-board");    //  Pixel Board

let number = document.getElementById('board-size');

let colorBlack = document.querySelector(".black");      //  Cor Preta
let colorOne = document.querySelector(".one");      //  1°Cor
let colorTwo = document.querySelector(".two");      //  2°Cor
let colorThree = document.querySelector(".three");  //  3°Cor


//  Random Color 1
let randomColor1 = 'rgb('+ Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
colorOne.style.backgroundColor = randomColor1;

//  Random Color 2
let randomColor2 = 'rgb('+ Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
colorTwo.style.backgroundColor = randomColor2;

//  Random Color 3
let randomColor3 = 'rgb('+ Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
colorThree.style.backgroundColor = randomColor3;






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
    br.classList.add("spacePixel");
    pixelBoard.appendChild(br);
}







function addPixels(){

    if(number.value < 5 && number.value != ''){
        number.value = 5;
    }
    else if(number.value > 50){
        number.value = 50;
    }


    for(let index1 = 1; index1 <= number.value; index1 += 1){
        for(let index2 = 1; index2 <= number.value; index2 +=1){
            count1 += 1;
            let pixels = document.createElement("div");
            pixels.classList.add("pixel");
            pixels.classList.add(count1);
            pixelBoard.appendChild(pixels);
        } 
        let br = document.createElement("br");
        br.classList.add("spacePixel");
        pixelBoard.appendChild(br);
    }

    // Pinta os Pixels com a Cor Selecionada
    for(let index2 = 1; index2 <= count1; index2 += 1){
    let pixelN = document.getElementsByClassName(index2)[0];

    function paint(){
        pixelN.style.backgroundColor = colorSelect;
    }
    pixelN.addEventListener("click", paint);
    }

    // Limpa as Cores do Quadro de Pixels
    let botao = document.getElementById("clear-board");
    for(let index3 = 1; index3 <= count1; index3 += 1){
        function removeColor(){
        let allPixels = document.getElementsByClassName(index3)[0];

            allPixels.style.backgroundColor = "white";
        }
        botao.addEventListener('click', removeColor)
    }
}
addPixels();


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
    colorSelect = randomColor1;
}
    colorOne.addEventListener("click", changeOne);

function changeTwo(){
    colorTwo.classList.add("selected");
    colorOne.classList.remove("selected");
    colorBlack.classList.remove("selected");
    colorThree.classList.remove("selected");
    colorSelect = randomColor2;
}
    colorTwo.addEventListener("click", changeTwo);

function changeThree(){
    colorThree.classList.add("selected");
    colorTwo.classList.remove("selected");
    colorOne.classList.remove("selected");
    colorBlack.classList.remove("selected");
    colorSelect = randomColor3;
}
    colorThree.addEventListener("click", changeThree);






// Testes
let testeButton = document.getElementById("generate-board");

testeButton.addEventListener('click', button)

function button (){

if(number.value === ''){
    alert("Board inválido!")
    number.value = 5;
}

let countButton = 0;
if (countButton === 0){
    removePixels();
    countButton = 1;
}
if(countButton === 1){
    addPixels();
    countButton = 0;
}
}

function removePixels(){
    while(pixelBoard.firstChild) {
        pixelBoard.removeChild(pixelBoard.firstChild);
    }
    count1 = 0;
}





