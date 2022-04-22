// Variaveis
const pixelBoard = document.getElementById('pixel-board');

const number = document.getElementById('board-size');

const colorBlack = document.querySelector('.black');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');

const randomA1 = Math.floor(Math.random() * 255);
const randomA2 = Math.floor(Math.random() * 255);
const randomA3 = Math.floor(Math.random() * 255);

const randomB1 = Math.floor(Math.random() * 255);
const randomB2 = Math.floor(Math.random() * 255);
const randomB3 = Math.floor(Math.random() * 255);

const randomC1 = Math.floor(Math.random() * 255);
const randomC2 = Math.floor(Math.random() * 255);
const randomC3 = Math.floor(Math.random() * 255);

const randomColor1 = 'rgb(' + randomA1 + ',' + randomA2 + ',' + randomA3 + ')';
colorOne.style.backgroundColor = randomColor1;

const randomColor2 = 'rgb(' + randomB1 + ',' + randomB2 + ',' + randomB3 + ')';
colorTwo.style.backgroundColor = randomColor2;

const randomColor3 = 'rgb(' + randomC1 + ',' + randomC2 + ',' + randomC3 + ')';
colorThree.style.backgroundColor = randomColor3;

// Adiciona os Pixels no Quadro de Pixels
let count1 = 0;

for (let index1 = 1; index1 <= 5; index1 += 1) {
  for (let index2 = 1; index2 <= 5; index2 += 1) {
    count1 += 1;
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    pixels.classList.add(count1);
    pixelBoard.appendChild(pixels);
  }
  const br = document.createElement('br');
  br.classList.add('spacePixel');
  pixelBoard.appendChild(br);
}

function addPixels() {
  if (number.value < 5 && number.value !== '') {
    number.value = 5;
  } else if (number.value > 50) {
    number.value = 50;
  }

  for (let index1 = 1; index1 <= number.value; index1 += 1) {
    for (let index2 = 1; index2 <= number.value; index2 += 1) {
      count1 += 1;
      const pixels = document.createElement('div');
      pixels.classList.add('pixel');
      pixels.classList.add(count1);
      pixelBoard.appendChild(pixels);
    }
    const br = document.createElement('br');
    br.classList.add('spacePixel');
    pixelBoard.appendChild(br);
  }

  // Pinta os Pixels com a Cor Selecionada
  for (let index2 = 1; index2 <= count1; index2 += 1) {
    const pixelN = document.getElementsByClassName(index2)[0];

    function paint() {
      pixelN.style.backgroundColor = colorSelect;
    }
    pixelN.addEventListener('click', paint);
  }

  // Limpa as Cores do Quadro de Pixels
  const botao = document.getElementById('clear-board');
  for (let index3 = 1; index3 <= count1; index3 += 1) {
    function removeColor() {
      const allPixels = document.getElementsByClassName(index3)[0];
      allPixels.style.backgroundColor = 'white';
    }
    botao.addEventListener('click', removeColor);
  }
}
addPixels();

// Selecionar a Cor na Paletta de Cores
let colorSelect = 'black';

function changeBlack() {
  colorBlack.classList.add('selected');
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorSelect = 'black';
}
colorBlack.addEventListener('click', changeBlack);

function changeOne() {
  colorOne.classList.add('selected');
  colorBlack.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorSelect = randomColor1;
}
colorOne.addEventListener('click', changeOne);

function changeTwo() {
  colorTwo.classList.add('selected');
  colorOne.classList.remove('selected');
  colorBlack.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorSelect = randomColor2;
}
colorTwo.addEventListener('click', changeTwo);

function changeThree() {
  colorThree.classList.add('selected');
  colorTwo.classList.remove('selected');
  colorOne.classList.remove('selected');
  colorBlack.classList.remove('selected');
  colorSelect = randomColor3;
}
colorThree.addEventListener('click', changeThree);

// Testes
const testeButton = document.getElementById('generate-board');

function removePixels() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  count1 = 0;
}

function button() {
  if (number.value === '') {
    alert('Board inválido!');
    number.value = 5;
  }

  let countButton = 0;
  if (countButton === 0) {
    removePixels();
    countButton = 1;
  }
  if (countButton === 1) {
    addPixels();
    countButton = 0;
  }
}

testeButton.addEventListener('click', button);
