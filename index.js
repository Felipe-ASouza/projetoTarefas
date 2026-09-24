import {GerenciarTarefas} from './services/GerenciarTarefas.js'

const gerenciador = new GerenciarTarefas();

console.log(gerenciador.adicionarTarefa("Estudar node"))
console.log(gerenciador.adicionarTarefa("Verificar se a Nicole tem cheiro de morango"))



console.log(gerenciador.buscarTarefa("morango"))
