import { GerenciarTarefas } from './services/GerenciarTarefas.js';
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const gerenciador = new GerenciarTarefas();

const rl = readline.createInterface({
    input,
    output
});

function mostrarMenu() {
    console.log(`
===== GERENCIADOR DE TAREFAS =====

1 - Adicionar tarefa
2 - Listar tarefas
3 - Concluir tarefa
4 - Desmarcar tarefa
5 - Editar tarefa
6 - Remover tarefa
7 - Buscar tarefa
8 - Ver estatísticas
0 - Sair
`);
}

while (true) {
    mostrarMenu();

    const resposta = await rl.question("Escolha uma opção: ");

    switch (resposta) {
        case "1": {
            const nome = await rl.question("Nome da tarefa: ");

            console.log(
                gerenciador.adicionarTarefa(nome)
            );

            break;
        }

        case "2": {
            console.log(
                gerenciador.listarTarefas()
            );

            break;
        }

        case "3": {
            const id = Number(
                await rl.question("Id da tarefa que deseja concluir: ")
            );

            console.log(
                gerenciador.concluirTarefa(id)
            );

            break;
        }

        case "4": {
            const id = Number(
                await rl.question("Id da tarefa que deseja reabrir: ")
            );

            console.log(
                gerenciador.desmarcarTarefa(id)
            );

            break;
        }

        case "5": {
            const id = Number(
                await rl.question("Insira o Id da tarefa que deseja editar: ")
            );

            const novoNome = await rl.question(
                "Insira o novo nome da tarefa: "
            );

            console.log(
                gerenciador.editarTarefa(id, novoNome)
            );

            break;
        }

        case "6": {
            const id = Number(
                await rl.question("Insira o Id da tarefa que deseja remover: ")
            );

            console.log(
                gerenciador.removerTarefa(id)
            );

            break;
        }

        case "7": {
            const termo = await rl.question(
                "Por qual palavra você está procurando?: "
            );

            console.log(
                gerenciador.buscarTarefa(termo)
            );

            break;
        }

        case "8": {
            console.log(
                gerenciador.contarTarefas()
            );

            break;
        }

        case "0":
            console.log("Encerrando o Gerenciador de Tarefas...");
            rl.close();
            break;

        default:
            console.log("Opção inválida. Escolha uma opção de 0 a 8.");
    }

    if (resposta === "0") {
        break;
    }
}