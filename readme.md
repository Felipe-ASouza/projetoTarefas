# 📝 Gerenciador de Tarefas

Aplicação de terminal feita em **Node.js** para gerenciar uma lista de tarefas: adicionar, listar, concluir, editar, remover e buscar.

Foi o meu primeiro projeto prático em JavaScript. A ideia era aplicar os conceitos básicos da linguagem (arrays, objetos, funções, classes e entrada de dados pelo terminal) sem usar frameworks nem bibliotecas externas.

📄 O enunciado original está em [DESAFIO.md](DESAFIO.md).

---

## ✨ Funcionalidades

- **Adicionar** uma tarefa (não aceita nome vazio)
- **Listar** todas as tarefas com o status (Pendente/Concluída)
- **Concluir** uma tarefa pelo ID
- **Desmarcar** uma tarefa concluída, que volta para Pendente
- **Editar** o nome de uma tarefa
- **Remover** uma tarefa pelo ID
- **Buscar** tarefas pelo nome, sem diferenciar maiúsculas de minúsculas
- **Estatísticas**: total, concluídas e pendentes

As tarefas ficam só na memória, então somem quando o programa é encerrado.

---

## 🚀 Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
git clone https://github.com/SEU-USUARIO/projetoTarefas.git
cd projetoTarefas
npm start
```

Não é preciso rodar `npm install`, porque o projeto não tem dependências.

---

## 🖥️ Exemplo de uso

```text
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

Escolha uma opção: 1
Nome da tarefa: Estudar Node
Tarefa: Estudar Node criada com sucesso!

Escolha uma opção: 2
Lista de tarefas:
1 - Estudar Node - Status: Pendente
```

---

## 📁 Estrutura

```text
projetoTarefas/
├── index.js                     # Menu e leitura das entradas do usuário
├── models/
│   └── Tarefa.js                # Classe que representa uma tarefa
├── services/
│   └── GerenciarTarefas.js      # Regras de negócio (adicionar, listar, remover...)
├── package.json
├── README.md
└── DESAFIO.md                   # Enunciado original do exercício
```

Separei o projeto em camadas: o `index.js` só cuida da interação com o usuário, e toda a lógica fica na classe `GerenciarTarefas`.

---

## 🧠 O que pratiquei

- `let` e `const`, condicionais e operador ternário
- Loops com `while` (menu) e `for...of` (listagens)
- Métodos de array: `push`, `find`, `findIndex`, `splice`, `filter`, `reduce`
- Strings: `toLowerCase` e `includes`, além de template literals
- Classes e módulos ES (`import`/`export`)
- Entrada de dados no terminal com `readline/promises` e `async/await`

---

## 🔮 Próximos passos

- [ ] Prioridade nas tarefas (baixa / média / alta)
- [ ] Data de criação
- [ ] Filtro para listar só pendentes ou só concluídas
- [ ] Salvar as tarefas em um arquivo JSON para não perder ao fechar
- [ ] Testes automatizados
