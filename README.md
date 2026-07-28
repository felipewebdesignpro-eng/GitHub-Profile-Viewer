# 🔍 Visualizador de Perfil do GitHub 🐙

Seja muito bem-vindo(a) ao **Visualizador de Perfil do GitHub**! Este é um projeto web interativo desenvolvido para buscar e exibir informações detalhadas de qualquer perfil público do GitHub de forma rápida, bonita e dinâmica.

Este projeto é excelente para **estudos de desenvolvimento web front-end**, pois aplica conceitos fundamentais de HTML5, CSS3 moderno (com responsividade e animações) e JavaScript assíncrono conectado a uma API real.

---

## 🚀 Funcionalidades

- **Busca Dinâmica:** Pesquise por qualquer nome de usuário do GitHub.
- **Informações do Perfil:** Exibe a foto de avatar, nome completo e a biografia do usuário.
- **Métricas de Engajamento:** Mostra o número de seguidores e quantas pessoas o usuário segue.
- **Repositórios Públicos:** Lista os repositórios públicos do usuário em formato de cartões interativos, exibindo:
  - Nome do repositório (com link direto para ele no GitHub).
  - Quantidade de estrelas (Stars ⭐).
  - Quantidade de bifurcações (Forks fork).
  - Número de observadores (Watchers 👀).
  - Principal linguagem de programação utilizada.
- **Feedback Visual (Loading):** Mostra um aviso de "Carregando..." enquanto os dados estão sendo buscados na API.
- **Tratamento de Erros:** Exibe mensagens de alerta amigáveis se o usuário digitar um nome inexistente ou deixar o campo vazio.
- **Design Responsivo:** A interface se adapta perfeitamente a computadores, tablets e celulares.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias web nativas mais modernas, sem a necessidade de frameworks complexos, focando no aprendizado da base do desenvolvimento web:

*   **HTML5:** Para a estruturação semântica de todo o conteúdo da página.
*   **CSS3:** Para a estilização visual, utilizando:
    *   **Flexbox e Grid Layout:** Para criar um visual moderno, alinhado e totalmente responsivo.
    *   **Variáveis CSS (Custom Properties):** Para facilitar a manutenção de cores e temas.
    *   **Animações CSS (Keyframes):** Para transições suaves ao carregar os dados.
*   **JavaScript (ES6+):** O "cérebro" do projeto, utilizando:
    *   **ES Modules (`import` e `export`):** Para manter o código modular, limpo e organizado em diferentes arquivos de acordo com suas responsabilidades.
    *   **Fetch API:** Para fazer requisições HTTP assíncronas à API externa do GitHub.
    *   **Async/Await:** Para lidar de forma limpa e moderna com a assincronia das respostas da rede.
    *   **Manipulação do DOM:** Para ler o valor digitado pelo usuário e inserir dinamicamente os novos elementos HTML na página.
*   **Devicon:** Uma biblioteca de ícones utilizada para exibir o ícone oficial do GitHub.

---

## 📁 Estrutura de Pastas e Arquivos

Para facilitar o entendimento, o projeto foi dividido de forma muito organizada:

```text
GitHub-Profile-Viewer/
├── index.html            # Arquivo HTML principal que carrega a estrutura e os scripts.
├── README.md             # Este arquivo explicativo sobre o projeto.
└── src/                  # Pasta principal contendo o código fonte (Source).
    ├── css/              # Estilos visuais do projeto.
    │   ├── reset.css        # Limpa as estilizações padrão dos navegadores.
    │   ├── styles.css       # Estilos globais e componentes principais (como os cartões).
    │   ├── animations.css   # Animações de transição e efeitos visuais.
    │   └── responsive.css   # Regras de CSS que adaptam o site para celulares e tablets.
    └── js/               # Lógica de programação em JavaScript.
        ├── api.js           # Responsável exclusivo por conversar com a API do GitHub e obter os dados.
        ├── ui.js            # Responsável exclusivo por criar o HTML dinâmico e exibi-lo na tela.
        └── index.js         # O arquivo central que une a API e a Interface, ouvindo as ações do usuário.
```

---

## 💡 Conceitos Super Importantes Aprendidos Neste Projeto!

Se você está começando a programar agora, este projeto é um verdadeiro mapa do tesouro! Aqui estão os conceitos fundamentais que você verá na prática ao analisar o código:

### 1. O que é uma API?
**API** (Application Programming Interface ou *Interface de Programação de Aplicação*) é uma forma de dois sistemas conversarem. No nosso caso, o nosso aplicativo JavaScript "conversa" com os servidores do GitHub para pedir informações de um usuário. O GitHub nos devolve essas informações em um formato de texto chamado **JSON** (JavaScript Object Notation), que o nosso código consegue ler e transformar na tela bonita que você vê.

### 2. O que é JavaScript Assíncrono (`fetch`, `async` e `await`)?
Buscar dados na internet não acontece instantaneamente; depende da velocidade da conexão. Se o JavaScript travasse a tela inteira esperando a resposta chegar, a experiência do usuário seria terrível. 
Por isso, usamos funções **assíncronas**:
- O `fetch()` faz o pedido à API do GitHub e "promete" trazer uma resposta.
- O `await` diz ao JavaScript: *"espere essa resposta chegar antes de continuar, mas sem travar o restante do navegador"*.
- O `async` avisa ao navegador que aquela função específica lida com processos assíncronas.

### 3. ES Modules (`import`/`export`)
Em projetos antigos, todo o código JavaScript ficava em um único arquivo gigante, o que tornava tudo muito difícil de ler e consertar. Com os **ES Modules**, nós dividimos o código:
- Criamos a lógica da API em `api.js` e usamos `export` para disponibilizá-la.
- Criamos a lógica visual em `ui.js` e fazemos o mesmo.
- No arquivo `index.js`, usamos o `import` para juntar essas peças e fazer a mágica acontecer.
Isso deixa o código profissional, organizado e fácil de manter!

---

## 💻 Como Executar o Projeto na Sua Máquina

Como o projeto utiliza **ES Modules** (que requerem um ambiente seguro de servidor para rodar o JavaScript modular nos navegadores modernos por motivos de segurança), abrir o arquivo `index.html` dando dois cliques diretamente do seu gerenciador de arquivos pode causar erros de CORS no console do seu navegador. 

Para rodar o projeto perfeitamente, siga o passo a passo abaixo:

### Pré-requisitos
1. Ter o editor de código **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)** instalado.
2. Ter o navegador Google Chrome, Firefox ou qualquer outro de sua preferência.

### Passo a Passo

1. **Baixe ou Clone o Projeto:**
   Baixe os arquivos do projeto para o seu computador.

2. **Abra o Projeto no VS Code:**
   Abra o VS Code, clique em `File` -> `Open Folder...` (Arquivo -> Abrir Pasta) e selecione a pasta `GitHub-Profile-Viewer`.

3. **Instale a Extensão "Live Server":**
   - No VS Code, vá até a aba de Extensões na barra lateral esquerda (ou aperte `Ctrl + Shift + X`).
   - Digite **Live Server** na barra de busca.
   - Clique em **Install** (Instalar) na extensão criada pelo desenvolvedor *Ritwick Dey*.

4. **Inicie o Servidor:**
   - Com a pasta do projeto aberta no VS Code, abra o arquivo `index.html`.
   - Clique com o botão direito do mouse em qualquer lugar dentro do código do arquivo `index.html` e escolha **Open with Live Server** (Abrir com Live Server).
   - *Alternativa:* Você também pode clicar no botão escrito **"Go Live"** que aparece no canto inferior direito da barra azul do VS Code.

5. **Pronto!**
   O seu navegador padrão abrirá automaticamente com o endereço `http://127.0.0.1:5500/` exibindo o projeto funcionando perfeitamente! Digite o nome de qualquer usuário do GitHub (como `oliver-felipe` ou `peas`) e veja o resultado surgir na tela.

---

## 🤝 Como Contribuir

Ficou inspirado e quer adicionar novas funcionalidades? Contribuições são sempre muito bem-vindas!

1. Faça um **Fork** deste repositório (clicando no botão "Fork" no canto superior direito da página do repositório no GitHub).
2. Crie uma **Branch** para a sua funcionalidade:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. Faça suas alterações e faça o **Commit** delas com uma mensagem clara:
   ```bash
   git commit -m "Adiciona funcionalidade X"
   ```
4. Envie suas alterações para o seu repositório remoto (**Push**):
   ```bash
   git push origin minha-nova-funcionalidade
   ```
5. Abra um **Pull Request** detalhando as melhorias que você realizou!

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo, modificá-lo e estudá-lo da maneira que desejar!

---

Desenvolvido com muito carinho por Felipe 💻✨. Se você gostou do projeto, não se esqueça de deixar uma ⭐ no repositório!
