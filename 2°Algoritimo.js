/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []

let item1 = prompt("Adicionar um item à lista:")
listaCompras.push(item1)

let item2 = prompt("Adicionar um item à lista:")
listaCompras.push(item2)

let item3 = prompt("Adicionar um item à lista:")

if (item3 !== "leite") {
    listaCompras.push("leite")
}

alert("Lista de compras: " + listaCompras);