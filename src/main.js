
/* ---> Tohle je hra "Hádej náhodné číslo"

const nahodneCislo = Math.floor(Math.random() * 20);

let pokusy = 0;
let pokus;


while (pokus !== nahodneCislo) {
    pokus = parseInt(prompt("Tipuj číslo od 1 do 20..."),10);
    pokusy++;
    if (pokus < nahodneCislo){
        alert("Čislo je vyšší")
    } else if (pokus > nahodneCislo) {
        alert("Číslo je nižší")
    }

    console.log(nahodneCislo);
    console.log(pokus);
    console.log(pokusy);
}

alert(`Spravně, uhodli jste to na na ${pokusy} pokusy`);

*/
/* ---> hra, vykreslení obrázku
let clickers = 20;
let startTime = Date.now();

function sync(dom, pos) {
    dom.style.left = `${pos.x}px`;
    dom.style.top = `${pos.y}px`;
}

function addClicker() {
    const pos = {
        x: Math.random() * 500,
        y: Math.random() * 300
    };

    const img = new Image();
    img.src = "res/images/poker.png";
    img.style.position = "absolute";
    img.addEventListener("click", removeClicker, false);

    document.querySelector("#board").appendChild(img);
    sync(img,pos);

}

function removeClicker(e) {
    e.target.parentNode.removeChild(e.target);
    clickers --;
    checkGameOver();
}

function checkGameOver() {
    document.querySelector("#remain").innerHTML = clickers;
    if (clickers === 0) {
        const taken = Math.round((Date.now() - startTime) / 1000);
        alert(`De-rick-ed in ${taken} seconds!`);
    }
}

// Add all the Ricks!
for (let i = 0; i < clickers; i++) {
    addClicker();
}
*/


const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;

console.log(ctx.canvas);

//Nastavíme farbu výplně na black a dáme vyplnit na celou výšku a šírku
ctx.fillStyle = "black";
ctx.fillRect(0,0,w,h);

//Přenastavíme barvu na šedou
ctx.fillStyle = "#555";

let x,y, radius;
for (let i = 0; i < 550; i++) {
    x = Math.random() * w;
    y = Math.random() * h;
    radius = Math.random() * 3;

    //Nakreslení hvězdičky
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}

/*
ctx.strokeRect(300,200,50,50);

ctx.beginPath();
ctx.arc(325,170,25,0, Math.PI *2,false);
ctx.fill();
ctx.stroke();

 */