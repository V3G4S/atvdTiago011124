/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/
let exerciciosSemana = ["corrida", "adbominais", "flexões", "alongamento"]

console.log(exerciciosSemana)

let exerciciosSemana2 = ["adbominais", "alogamento", "flexões", "adbominais"]
exerciciosSemana2.spliceq

if (exerciciosSemana2[exerciciosSemana2.length - 1] !== "alongamento") {
  exerciciosSemana2.push("alongamento")
}

console.log(exerciciosSemana2)