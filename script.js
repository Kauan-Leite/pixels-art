let body = document.body;
let pixelBoard = document.getElementById("pixel-board");




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






