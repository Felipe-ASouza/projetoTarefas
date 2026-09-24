# 📝 Gerenciador de Tarefas — Node.js

Projeto prático para exercitar os principais conceitos de JavaScript e Node.js estudados até agora.

O objetivo é criar um **gerenciador de tarefas executado pelo terminal**, permitindo adicionar, listar, concluir, remover e pesquisar tarefas.

---

## 🎯 Objetivo

Criar uma aplicação de terminal onde o usuário possa gerenciar uma lista de tarefas.

O programa deverá apresentar um menu e permitir que o usuário escolha o que deseja fazer.

Exemplo:

```text
==============================
     GERENCIADOR DE TAREFAS
==============================

1 - Adicionar tarefa
2 - Listar tarefas
3 - Concluir tarefa
4 - Remover tarefa
5 - Buscar tarefa
6 - Sair

Escolha uma opção:
```

---

# 🛠️ Tecnologias

* Node.js
* JavaScript
* Terminal
* npm

Não é necessário:

* Front-end
* HTML
* CSS
* Banco de dados
* Framework

---

# 📁 Estrutura do projeto

A estrutura inicial deve ser:

```text
gerenciador-tarefas/
│
├── package.json
├── index.js
└── README.md
```

---

# 📦 Modelo da tarefa

Cada tarefa deverá ser representada por um objeto.

Exemplo:

```js
{
    id: 1,
    nome: "Estudar Node",
    concluida: false
}
```

A aplicação deverá manter as tarefas em um array.

Exemplo:

```js
const tarefas = [];
```

---

# 🚀 Funcionalidades

## 1. Adicionar tarefa

O usuário deverá poder cadastrar uma nova tarefa.

Exemplo:

```text
Nome da tarefa: Estudar Node

Tarefa adicionada com sucesso!
```

A tarefa deverá receber:

* `id`
* `nome`
* `concluida`

Uma nova tarefa deve começar como:

```js
concluida: false
```

### Regras

* O nome não pode ser vazio.
* Cada tarefa deve possuir um ID.
* A tarefa deve ser adicionada ao array.
* O usuário deve receber uma mensagem de confirmação.

---

# 2. Listar tarefas

O usuário deverá conseguir visualizar todas as tarefas cadastradas.

Exemplo:

```text
=== TAREFAS ===

1 - Estudar Node [Pendente]
2 - Fazer Codewars [Concluída]
3 - Praticar JavaScript [Pendente]
```

### Regras

* Mostrar o ID.
* Mostrar o nome.
* Mostrar se está concluída ou pendente.
* Se não houver tarefas, informar ao usuário.

Exemplo:

```text
Nenhuma tarefa cadastrada.
```

### Conceitos para praticar

* `for...of`
* template literals
* ternário

---

# 3. Concluir tarefa

O usuário deverá informar o ID de uma tarefa.

Exemplo:

```text
Digite o ID da tarefa: 1

Tarefa concluída!
```

A propriedade:

```js
concluida
```

deverá passar de:

```js
false
```

para:

```js
true
```

### Regras

* O usuário deve informar um ID.
* Procurar a tarefa correspondente.
* Se encontrar, alterar seu status.
* Se não encontrar, informar que a tarefa não existe.

Exemplo:

```text
Tarefa não encontrada.
```

### Conceitos para praticar

* `find()`
* objetos
* comparação
* alteração de propriedades

---

# 4. Remover tarefa

O usuário deverá conseguir remover uma tarefa pelo ID.

Exemplo:

```text
Digite o ID da tarefa: 2

Tarefa removida com sucesso!
```

### Regras

* Receber o ID.
* Encontrar a posição da tarefa no array.
* Remover somente aquela tarefa.
* Se não encontrar, informar ao usuário.

### Conceitos para praticar

* `findIndex()`
* `splice()`
* arrays
* índices

---

# 5. Buscar tarefa

O usuário poderá pesquisar tarefas pelo nome.

Exemplo:

```text
Digite o que deseja buscar: node
```

Resultado:

```text
=== RESULTADOS ===

1 - Estudar Node
3 - Praticar Node
```

A busca deverá funcionar independentemente de letras maiúsculas ou minúsculas.

Por exemplo:

```text
node
Node
NODE
NoDe
```

devem encontrar a mesma tarefa.

### Conceitos para praticar

* `toLowerCase()`
* `includes()`
* `filter()`

---

# 6. Menu principal

O programa deverá apresentar o menu principal continuamente.

```text
==============================
     GERENCIADOR DE TAREFAS
==============================

1 - Adicionar tarefa
2 - Listar tarefas
3 - Concluir tarefa
4 - Remover tarefa
5 - Buscar tarefa
6 - Sair
```

Depois que o usuário executar uma ação, o menu deverá aparecer novamente.

O programa somente deverá terminar quando o usuário escolher:

```text
6 - Sair
```

Ao sair:

```text
Até mais!
```

---

# 📋 Regras gerais

## Regra 1 — Não usar banco de dados

Todas as tarefas devem ficar armazenadas apenas em memória.

Ao encerrar o programa, as tarefas serão perdidas.

---

## Regra 2 — Não usar framework

O projeto deve ser feito utilizando JavaScript e Node.js.

Não utilizar:

* React
* Express
* NestJS
* bancos de dados
* bibliotecas externas para resolver a lógica

---

## Regra 3 — Evitar copiar soluções prontas

O objetivo principal é praticar raciocínio lógico.

Você pode consultar a documentação do JavaScript/Node.js para entender métodos e funcionalidades.

Porém, tente implementar a lógica por conta própria.

---

## Regra 4 — Separar responsabilidades

Cada funcionalidade deverá possuir sua própria função.

Exemplo:

```js
function adicionarTarefa() {}

function listarTarefas() {}

function concluirTarefa() {}

function removerTarefa() {}

function buscarTarefa() {}
```

Não coloque toda a aplicação dentro de um único bloco de código.

---

## Regra 5 — Validar entradas

O programa não deve simplesmente quebrar quando o usuário digitar algo inesperado.

Exemplos:

```text
Nome da tarefa:
```

```text
Digite o ID da tarefa:
```

Devem possuir validações apropriadas.

---

# 🧠 Conceitos que o projeto deve exercitar

Durante o projeto, tente utilizar os conceitos abaixo:

### Variáveis

```js
let
const
```

### Condicionais

```js
if
else
else if
```

### Operador ternário

```js
condicao ? valor1 : valor2
```

### Loops

```js
for...of
```

e algum mecanismo para manter o menu funcionando.

### Arrays

```js
push()
splice()
find()
findIndex()
filter()
includes()
length
```

### Strings

```js
toLowerCase()
```

### Objetos

```js
{
    id: 1,
    nome: "...",
    concluida: false
}
```

### Funções

Criar funções específicas para cada responsabilidade.

### Template literals

```js
`Tarefa: ${nome}`
```

---

# 🪜 Ordem recomendada de desenvolvimento

Não tente fazer tudo de uma vez.

Siga esta ordem:

## Etapa 1 — Estrutura

* Criar projeto
* Criar `package.json`
* Criar `index.js`
* Criar array `tarefas`

---

## Etapa 2 — Entrada de dados

Descobrir como receber informações do usuário através do terminal.

---

## Etapa 3 — Adicionar

Implementar:

```text
Adicionar tarefa
```

Teste até conseguir cadastrar várias tarefas.

---

## Etapa 4 — Listar

Implementar:

```text
Listar tarefas
```

Testar:

* nenhuma tarefa
* uma tarefa
* várias tarefas
* tarefas concluídas e pendentes

---

## Etapa 5 — Concluir

Implementar:

```text
Concluir tarefa
```

Testar:

* ID existente
* ID inexistente
* concluir uma tarefa já concluída

---

## Etapa 6 — Remover

Implementar:

```text
Remover tarefa
```

Testar:

* remover primeira tarefa
* remover tarefa do meio
* remover última tarefa
* ID inexistente

---

## Etapa 7 — Buscar

Implementar:

```text
Buscar tarefa
```

Testar:

* palavra existente
* palavra inexistente
* letras maiúsculas
* letras minúsculas
* parte do nome

---

## Etapa 8 — Menu

Juntar todas as funcionalidades.

O programa deverá funcionar continuamente até o usuário escolher sair.

---

# 🧪 Cenário de teste

Depois de terminar, tente reproduzir esta sequência:

```text
1 - Adicionar tarefa

Nome: Estudar Node
Tarefa adicionada!
```

```text
1 - Adicionar tarefa

Nome: Fazer Codewars
Tarefa adicionada!
```

```text
1 - Adicionar tarefa

Nome: Praticar JavaScript
Tarefa adicionada!
```

Depois:

```text
2 - Listar tarefas
```

Resultado esperado:

```text
1 - Estudar Node [Pendente]
2 - Fazer Codewars [Pendente]
3 - Praticar JavaScript [Pendente]
```

Depois:

```text
3 - Concluir tarefa

ID: 1
```

E novamente:

```text
2 - Listar tarefas
```

Resultado:

```text
1 - Estudar Node [Concluída]
2 - Fazer Codewars [Pendente]
3 - Praticar JavaScript [Pendente]
```

Depois:

```text
5 - Buscar tarefa

Buscar: javascript
```

Resultado:

```text
3 - Praticar JavaScript
```

Por fim:

```text
4 - Remover tarefa

ID: 2
```

E:

```text
2 - Listar tarefas
```

Resultado:

```text
1 - Estudar Node [Concluída]
3 - Praticar JavaScript [Pendente]
```

---

# ⭐ Desafio extra

Depois que terminar tudo, tente adicionar:

### 1. Prioridade

Cada tarefa poderia ter:

```text
baixa
media
alta
```

Exemplo:

```text
1 - Estudar Node [Alta] [Pendente]
```

### 2. Data

Adicionar uma data de criação:

```text
1 - Estudar Node
Criada em: 21/09/2026
```

### 3. Filtrar tarefas

Adicionar opções:

```text
7 - Listar somente pendentes
8 - Listar somente concluídas
```

### 4. Contador

Mostrar:

```text
Total: 5
Concluídas: 2
Pendentes: 3
```

---

# 🎓 Objetivo final

Ao terminar este projeto, você deverá conseguir olhar para um problema simples e pensar:

```text
Qual é a informação que preciso guardar?
        ↓
Como represento essa informação?
        ↓
Quais funções preciso criar?
        ↓
Quais dados cada função recebe?
        ↓
Qual lógica preciso executar?
        ↓
Como mostro o resultado para o usuário?
```

O objetivo **não é escrever o código mais bonito**.

O objetivo é conseguir construir a aplicação passo a passo, entendendo por que cada parte existe.

---

## 🚫 Regra principal do desafio

**Não tente fazer o projeto inteiro de uma vez.**

Implemente uma etapa → teste → corrija → avance.

Se travar em alguma etapa, tente explicar primeiro:

> "Eu quero fazer X, mas não sei como transformar isso em código."

A partir daí, procure resolver o problema em pequenas partes.
