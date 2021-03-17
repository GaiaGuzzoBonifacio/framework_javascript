//var saluto = "ciao"
// const saluto = "ciao" //in es6 e successive non possiamo mai dichiarare 2 volte la stessa variabile. e non posso cambiarne il contenuto con const

const colori = [] //se lo creo vuoto poi posso aggiungere valori all'array
//^si può anche scrivere come const colori = new Array()

colori.push('red') //push serve ad aggiungere valori ad un array
colori.push('green')

console.log(colori) //utile per capire che succede, la console ti mostra il contenuto, simile a var_dump e printr di php

let numeri = [1,2,3,4]; //let lascia che si possa riassegnare la variabile o chi per lei ma non possiamo ridichiararla però
numeri = "uno due tre"; //il ; in realtà su javascript non conta niente, puoi non metterlo
console.log(numeri)

const num = [1,44,3,4,55,6,7,80,9]
// se volessi ottenere [2,4,6,8 etc] su php avrei usato un array_map per moltiplicare
const perDueArray = num.map(function(numero,index){ //funzione anonima, senza nome, tra le ( ) ci vanno messi gli argomenti, il primo è il callback della funzione in cui vengono messi tutti i valori dell'array, il secondo sarebbe l'indice
    //num.map prende i valori all'interno dell'array e lo assegna alla variabile numero che abbiamo chiamato noi
    //console.log(numero,"indice: ",index); solo per vedere che succede
    return numero * 2
})
console.log(perDueArray)


//arrow functions - equivalente sintattico della funzione precedente - inoltre se passiamo un solo argomento possiamo evitare di mettere le parentesi tonde del callback
//se la funzione di callback contiene una sola riga di codice posso omettere le parentesi graffe e il return
const arrowFunction1 = num.map( (numero) => { 
    return numero * 2
})
console.log(arrowFunction1)

//verrebbe fuori così
const arrowFunction2 = num.map( numero => numero * 2)
console.log(arrowFunction2)


//function expression - una funzione assegnata a una variabile scritta come arrow funtction
let sum = (a,b) => a+b;
//scritta normalmente
let sum1 = function(a,b){
    return a + b;
} 

function sum2(a,b){
    return a + b;
}

//quadrato di un numero
function square(n){
    const res = n + n; //res essendo una variabile locale definita all'interno della funzione, come al solito vive e muore lì dentro
    return res;
}
//usiamo questa funzione così const res = square(5)

//function expression di square
const square1 = function(n){
    return n * n
}

const numbers = [5,3,2]
const quadrati = numbers.map(n => n * n); // -> array filter
const quadratiPari = quadrati.filter(n => n % 2 === 0)

//se so che il risultato è un array posso scriverlo così
const quadratiPariInstant = numbers.map(n => n * n).filter(n => n % 2 === 0); 