const nahodneCislo = Math.floor(Math.random()*16 );

let pocetPokusu=0;
let pokus;


while (pokus !==nahodneCislo) {
    pokus = parseInt(prompt("Zadej svůj typ v rozmezi 1-15"),10);
    pocetPokusu ++;


console.log(nahodneCislo);
console.log(pocetPokusu);
console.log(pokus);

}

alert(`Uhadli jste na ${pocetPokusu}`);

