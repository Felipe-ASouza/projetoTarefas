import { Tarefa } from "../models/Tarefa.js"; 

class GerenciarTarefas{
    constructor(){
        this.tarefas = []
    }

    adicionarTarefa(nome){
        if(nome !== ""){
            const maiorId = this.tarefas.reduce((max, t) => t.id > max ? t.id : max, 0)
            const id = maiorId + 1;
            const tarefa = new Tarefa(id, nome)
            this.tarefas.push(tarefa)

            return `Tarefa: ${tarefa.nome} criada com sucesso!`
        } else{
            return "A tarefa não pode ser criada sem nome."
        }
        
    }

    listarTarefas(){
        let resultado = "";
        for(let tarefa of this.tarefas){
            let statusTarefa = tarefa.concluida ? "Concluída" : "Pendente";
            resultado += `${tarefa.id} - ${tarefa.nome} - Status: ${statusTarefa}\n`
        }
        console.log("Lista de tarefas: ")
        return resultado;
    }

    concluirTarefa(id){
        const tarefa = this.tarefas.find(t => t.id === id)
        if(tarefa){
            tarefa.concluida = true
            
            return `Tarefa ${tarefa.nome || id} concluída com sucesso!`
        }

        return `Erro: Tarefa com o ID ${id} não foi encontrada.`
    }

    desmarcarTarefa(id){
        const tarefa = this.tarefas.find(t => t.id === id)
        if(tarefa){
            tarefa.concluida = false;

            return `Tarefa ${tarefa.nome || id} foi reaberta como "Pendente"`
        } else{
            return `Tarefa ${id} nao encontrada.`
        }
    }

    removerTarefa(id){
        const indice = this.tarefas.findIndex(t => t.id === id)
            if(indice !== 1){
                this.tarefas.splice(indice, 1)

                return `Tarefa ${id} removida com sucesso!`
            } else{
                return `Tarefa ${id} nao encontrada.`
            }
        }

        buscarTarefa(termo){
            const termoBusca = termo.trim().toLowerCase()
            const tarefasEncontradas = this.tarefas.filter(t => {

                return t.nome.toLowerCase().includes(termoBusca)
           });

           return tarefasEncontradas;
        }


    }




export {GerenciarTarefas}