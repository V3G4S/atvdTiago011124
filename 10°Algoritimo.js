/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 25, 3, 45, 5, 6, 71, 8, 9, 0, 10, 2, 3, 4, 5, 6, 1, 8, 9]

const key = Number(prompt("Escolha o valor para procurar no array"))

console.log(array.forEach((num, index) => {
    if (num === key) alert(index);
}));
