import promptSync from "prompt-sync"
import { exercicio01, exercicio02, exercicio03, exercicio04, exercicio05, exercicio06 } from "./moduleExercicios";

// type resultado = number | string
// const resposta: resultado= 04
let prompt = promptSync()
let resposta: string;

do {
    console.log("Apresentação do exercicio")
    // resposta: resultado = prompt("digite o numero  do exercicio desejado ou clique em 'sair'")
    resposta = prompt("digite o numero  do exercicio desejado ou digite 'sair' ")

console.log (resposta)

    switch (resposta) {
        case '1':
            console.log("você escolheu o exercicio 1")
            exercicio01();
            break;
        case "2":
            console.log("você escolheu o exercicio 2")
            exercicio02();
            break;
        case "3":
            console.log("você escolheu o exercicio 3")
            exercicio03();
            break;
        case "4":
            console.log("você escolheu o exercicio 4")
            exercicio04();
            break;
        case "5":
            console.log("você escolheu o exercicio 5")
            exercicio05();
            break;
        case "6":
            console.log("você escolheu o exercicio 6")
            exercicio06();
            break;
        default:
            console.log("\nvalor digitado não conrresponde a nenhum exercicio\n")
            break;
    }
} while (resposta != 'sair')
