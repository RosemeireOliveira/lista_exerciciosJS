//exercicio01
export function exercicio01 () {
for (let contador =1;  contador <=10;  contador +=1) {
    console.log(contador)}
}
    
    //exercicio02
    
    export function exercicio02 () {
    
for (let contador =0; contador<=10; contador +=2){

    console.log (contador)
    }}
    //exercicio03
    export function exercicio03 () {
    for (let contador  =1; contador <=50; contador += 2) {
        console.log (contador)
        }
    }
        //exercicio04
        export  function exercicio04 () {
        let prompt = require ('prompt-sync')();
let numero= prompt ('digite um numero');

for (multiplicador=1;  multiplicador <=10;multiplicador+=1 ){
console.log (numero *multiplicador)
}}


//exercicio05
export function exercicio05 () {

let anterior = 0
let atual=1
console.log(anterior)
console.log(atual)
for (let contador = 3; contador<=10; contador ++){
    let novo = anterior +atual
    console.log(novo)
    anterior= atual
    atual= novo
}
}
//exercicio06
export function exercicio06 (){
let contador = 0;
while  ( contador <=20 ){
console.log (contador)
contador +=2
}}