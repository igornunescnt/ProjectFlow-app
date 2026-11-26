# ProjectFlow

Aplicação web para organização de projetos e gerenciamento de tarefas em um quadro Kanban. O ProjectFlow permite criar projetos, adicionar tarefas, acompanhar o fluxo de trabalho por status e mover tarefas entre etapas por meio de interação drag and drop.

**Demonstração:** https://todo-kanban-weld.vercel.app/  
**Repositório:** https://github.com/igornunescnt/ProjectFlow-app

## Funcionalidades

- Página inicial com apresentação da aplicação.
- Dashboard para visualizar os projetos cadastrados.
- Criação e exclusão de projetos.
- Acesso à página individual de cada projeto.
- Criação de tarefas com seleção inicial de status.
- Quadro Kanban com três etapas:
  - **To Do:** tarefas a fazer.
  - **Doing:** tarefas em andamento.
  - **Done:** tarefas concluídas.
- Movimentação de tarefas entre colunas com drag and drop.
- Opção para marcar uma tarefa como concluída.
- Persistência dos projetos e tarefas no armazenamento local do navegador.
- Layout adaptável a diferentes tamanhos de tela, incluindo navegação lateral para dispositivos móveis.

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| React 19 | Construção da interface por componentes |
| Vite 8 | Servidor de desenvolvimento e build |
| JavaScript (ES Modules) | Linguagem da aplicação |
| Tailwind CSS 4 | Estilização e layout responsivo |
| React Router 7 | Navegação entre páginas |
| Zustand 5 | Gerenciamento do estado global |
| Zustand Persist | Persistência do estado no `localStorage` |
| dnd-kit | Interações de arrastar e soltar |
| UUID | Dependência disponível no projeto para identificação |

## Como executar localmente

### Pré-requisitos

- Node.js em versão compatível com Vite 8.
- npm.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/igornunescnt/ProjectFlow-app.git
   ```

2. Entre na pasta:

   ```bash
   cd ProjectFlow-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço local informado pelo Vite (normalmente `http://localhost:5173`).

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Executa uma prévia local do build |
| `npm run lint` | Executa a análise estática com ESLint |

## Estrutura do projeto

```text
ProjectFlow-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Column.jsx
│   │   ├── KanbanBoard.jsx
│   │   ├── Modal.jsx
│   │   ├── NewProject.jsx
│   │   ├── NewTaskModal.jsx
│   │   ├── ProjectList.jsx
│   │   └── Task.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   └── ProjectDetails.jsx
│   ├── routes/
│   │   └── index.jsx
│   ├── store/
│   │   └── useProjectStore.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
└── vite.config.js
```

## Organização da aplicação

- **pages:** páginas principais (Home, Dashboard e detalhes do projeto).
- **components:** componentes reutilizáveis, formulários, modal e quadro Kanban.
- **layouts:** estrutura compartilhada da área interna, incluindo a navegação lateral.
- **routes:** definição das rotas da aplicação.
- **store:** estado global dos projetos e tarefas, com persistência local.

## Persistência dos dados

O estado é gerenciado pelo Zustand e persistido com o middleware `persist`, utilizando a chave `project-storage` no `localStorage` do navegador.

Isso significa que:

- Os dados permanecem disponíveis no mesmo navegador e perfil após recarregar a página.
- Os dados não são sincronizados entre dispositivos ou navegadores.
- Limpar os dados do site ou o armazenamento local do navegador pode apagar os projetos e tarefas salvos.

**Observação:** esta versão é uma aplicação frontend. O repositório não contém uma API própria nem integração com banco de dados remoto ou autenticação de usuários.

## Melhorias futuras

- Implementar backend e banco de dados para sincronização dos dados.
- Adicionar autenticação e contas de usuário.
- Permitir edição de projetos e tarefas.
- Incluir descrição, prioridade, prazo e responsável nas tarefas.
- Adicionar testes automatizados.
- Melhorar acessibilidade e feedback das ações.

## Autor

Desenvolvido por **Ygor Nunes**.

---

Este projeto foi desenvolvido como aplicação prática para estudo e demonstração de desenvolvimento frontend com React.
