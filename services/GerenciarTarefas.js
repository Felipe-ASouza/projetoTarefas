import { Tarefa } from "../models/Tarefa.js";

class GerenciarTarefas {
    constructor() {
        this.tarefas = []
    }

    adicionarTarefa(nome) {
        if (nome.trim() !== "") {
            const maiorId = this.tarefas.reduce((max, t) => t.id > max ? t.id : max, 0)
            const id = maiorId + 1;
            const tarefa = new Tarefa(id, nome)
            this.tarefas.push(tarefa)

            return `Tarefa: ${tarefa.nome} criada com sucesso!`
        } else {
            return "A tarefa não pode ser criada sem nome."
        }

    }

    listarTarefas() {
        let resultado = "";
        if (this.tarefas.length === 0) {
            return "Nenhuma tarefa cadastrada.";
        }
        for (let tarefa of this.tarefas) {
            let statusTarefa = tarefa.concluida ? "Concluída" : "Pendente";
            resultado += `${tarefa.id} - ${tarefa.nome} - Status: ${statusTarefa}\n`
        }
        console.log("Lista de tarefas: ")
        return resultado;
    }

    concluirTarefa(id) {
        const tarefa = this.tarefas.find(t => t.id === id)
        if (tarefa) {
            tarefa.concluida = true

            return `Tarefa ${tarefa.nome || id} concluída com sucesso!`
        }

        return `Erro: Tarefa com o ID ${id} não foi encontrada.`
    }

    desmarcarTarefa(id) {
        const tarefa = this.tarefas.find(t => t.id === id)
        if (tarefa) {
            tarefa.concluida = false;

            return `Tarefa ${tarefa.nome || id} foi reaberta como "Pendente"`
        } else {
            return `Tarefa ${id} nao encontrada.`
        }
    }

    editarTarefa(id, novoNome) {
        const tarefa = this.tarefas.find(t => t.id === id)
        if (tarefa) {
            if (novoNome.trim() === "") {
                return "É necessário definir um novo nome para a tarefa."
            } else {
                tarefa.nome = novoNome;
                return `Tarefa ${id} editada com sucesso!`
            }
        }

        return `Erro: Tarefa com ID ${id} não foi encontrada.`
    }

    removerTarefa(id) {
        const indice = this.tarefas.findIndex(t => t.id === id)
        if (indice !== -1) {
            this.tarefas.splice(indice, 1)

            return `Tarefa ${id} removida com sucesso!`
        } else {
            return `Tarefa ${id} nao encontrada.`
        }
    }

    buscarTarefa(termo) {
        termo = termo.toLowerCase();

        const tarefasEncontradas = this.tarefas.filter(
            t => t.nome.toLowerCase().includes(termo)
        );

        if (tarefasEncontradas.length === 0) {
            return "Nenhuma tarefa encontrada.";
        }

        let resultado = "Tarefas encontradas:\n";

        for (let tarefa of tarefasEncontradas) {
            const status = tarefa.concluida ? "Concluída" : "Pendente";

            resultado += `${tarefa.id} - ${tarefa.nome} - ${status}\n`;
        }

        return resultado;
    }

    contarTarefas() {
        const total = this.tarefas.length
        const tarefasConcluidas = this.tarefas.filter(t => t.concluida === true).length
        const tarefasPendentes = this.tarefas.filter(t => t.concluida === false).length

        return `Total de tarefas: ${total}\n Tarefas Concluídas: ${tarefasConcluidas}\n Tarefas pendentes: ${tarefasPendentes}`
    }


}




export { GerenciarTarefas }