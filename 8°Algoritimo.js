    /*
    Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
    Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
    mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
    */

    let tarefasLimpeza = [];

    while (tarefasLimpeza.length < 4) {
        const tarefa = prompt('Adicionar uma tarefa de limpeza:');
        if (tarefa) {
            tarefasLimpeza.push(tarefa);
        } else {
            break;
        }
    }

    tarefasLimpeza.splice(2, 1, "Limpar banheiro");
    alert(tarefasLimpeza)