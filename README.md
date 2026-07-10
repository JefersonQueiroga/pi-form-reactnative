# PI Form React - Guia de Instalação para Alunos

Este guia mostra o passo a passo para você baixar, abrir no Visual Studio Code e executar o projeto na sua máquina **Windows**.

---

## 1. Instalar os programas necessários

Antes de começar, instale os três programas abaixo. Você só precisa instalar uma vez.

### 1.1. Git (para baixar o projeto do GitHub)

1. Acesse: https://git-scm.com/download/win
2. O download começa automaticamente.
3. Execute o instalador e clique em **Next** em todas as telas (pode deixar tudo padrão).
4. Para conferir se instalou, abra o **Prompt de Comando** (tecla `Windows` + `R`, digite `cmd` e pressione Enter) e execute:
   ```bash
   git --version
   ```
   Se aparecer algo como `git version 2.xx.x`, deu certo.

### 1.2. Node.js (para executar o projeto)

1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (a que aparece à esquerda, recomendada).
3. Execute o instalador e clique em **Next** em todas as telas.
4. Para conferir se instalou, abra o **Prompt de Comando** e execute:
   ```bash
   node --version
   npm --version
   ```
   Se aparecerem números de versão, deu certo.

### 1.3. Visual Studio Code (o editor de código)

1. Acesse: https://code.visualstudio.com/
2. Clique em **Download for Windows**.
3. Execute o instalador e clique em **Próximo** em todas as telas. **Importante:** marque a opção **"Adicionar ao PATH"** se aparecer.

---

## 2. Baixar (clonar) o projeto

1. Escolha uma pasta no seu computador onde quer guardar o projeto. Sugestão: `C:\Users\SeuNome\Documentos\`
2. Abra essa pasta no Explorador de Arquivos.
3. Clique com o **botão direito** dentro da pasta e escolha **"Abrir no Terminal"** (Windows 11) ou **"Git Bash Here"** (Windows 10).
4. Execute o comando abaixo para baixar o projeto:
   ```bash
   git clone https://github.com/JefersonQueiroga/pi-form-reactnative.git
   ```
5. Aguarde o download terminar. Uma nova pasta chamada `pi-form-reactnative` será criada.

---

## 3. Abrir o projeto no Visual Studio Code

1. Abra o **Visual Studio Code**.
2. No menu superior, clique em **File** (Arquivo) → **Open Folder...** (Abrir Pasta).
3. Navegue até a pasta `pi-form-reactnative` que foi criada no passo anterior e clique em **Selecionar Pasta**.
4. Se aparecer uma mensagem perguntando se você confia nos autores do código, clique em **"Yes, I trust the authors"**.

---

## 4. Instalar as dependências do projeto

1. No Visual Studio Code, abra o terminal integrado: menu **Terminal** → **New Terminal** (ou pressione `Ctrl` + `'`).
2. No terminal que abriu na parte de baixo do VS Code, execute:
   ```bash
   npm install
   ```
3. Aguarde a instalação terminar (pode demorar alguns minutos). Uma pasta `node_modules` será criada.

---

## 5. Executar o projeto

1. Ainda no terminal do VS Code, execute:
   ```bash
   npm run dev
   ```
2. O terminal vai mostrar algo parecido com:
   ```
   VITE v8.x.x  ready in xxx ms

   ➜  Local:   http://localhost:5173/
   ```
3. Abra o navegador (Chrome, Edge, Firefox) e acesse: **http://localhost:5173/**
4. Pronto! O projeto está rodando na sua máquina.

Para **parar** o projeto, volte no terminal e pressione `Ctrl` + `C`.

---

## Problemas comuns

- **"git não é reconhecido como comando"**: Feche e abra o VS Code de novo depois de instalar o Git.
- **"npm não é reconhecido como comando"**: Reinicie o computador depois de instalar o Node.js.
- **A porta 5173 já está em uso**: Feche outros projetos rodando ou reinicie o computador.
- **Erro ao rodar `npm install`**: Confira sua conexão com a internet e tente novamente.

---

## Estrutura do projeto (para conhecer)

```
pi-form-reactnative/
├── public/            # Arquivos públicos (imagens, ícones)
├── src/               # Código-fonte do projeto (aqui você vai mexer)
│   └── App.jsx        # Componente principal
├── index.html         # Página HTML principal
├── package.json       # Lista de dependências e comandos
└── vite.config.js     # Configuração do Vite
```

Bons estudos!
