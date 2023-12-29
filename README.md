## Avaliação prática para Vaga de Analista de Testes QA na Tray

Este repositório contém um conjunto de testes automatizados desenvolvidos para a API do Star Wars (https://swapi.dev) com o uso de Cypress para framework. 

Para construção dos cenários descritos abaixo me baseei na heurística de teste VADER que, desenvolvida por Stuart Ashman, considera 5 princípios base:

(V)erbos 
<br> (A)utenticação e autorização 
<br> (D)ados e sua estrutura
<br> (E)rros
<br> (R)esponsividade

Para atendimento ao exercício proposto, o foco esteve nos princípios de Dados, na estrutura de apresentação destes e códigos de estado HTTP para os Erros.

### Tecnologias e Ferramentas Utilizadas

- Cypress
- JavaScript
- Biblioteca Joi
- Node.js
- VSCode

### Cenários de Teste

    1. Validar formato da request do módulo Films;
    2. Validar retornos para URLs inválidas;
    3. Validar existência de um filme 10 e retorno da request;
    4. Validar atributo name de um episódio de filme;
    5. Validar ID e tipo do dado do atributo episode_id;
    6. Validar formato da data;
    7. Validar peso e a altura do “people” C-3PO e sua participação em filme.

Foram ainda adicionados os seguintes testes:

    8. Validar formato da request do módulo Planets;
    9. Validar valor contido no atributo population de um determinado planeta e o tipo de dado retornado;
    10. Validar o tempo de resposta da API;

### Instalação do projeto

Siga as etapas abaixo para configurar e executar o projeto localmente.

#### Pré-requisitos

Antes de prosseguir certifique-se de ter instalado as seguintes ferramentas:

- [Node.js](https://nodejs.org/) (versão 20.8.0 ou superior)
- [npm](https://www.npmjs.com/) (normalmente instalado com o Node.js)

#### Passos de Instalação

Abra o terminal da sua preferência e faça o clone deste repositório no seu ambiente local:

```bash
git clone https://github.com/joycepontesf/cypress-api-testes.git
```

Ainda no terminal, navegue até a pasta já clonada em sua máquina e execute o comando abaixo para instalar as dependências usadas no projeto:

```bash
npm install
```

Todas as dependências usadas neste projeto podem ser consultadas em node_modules.

Foram desenvolvidos scripts para otimizar a execução do projeto no formato headless. Você pode encontrá-los no arquivo package.json do projeto.

Os arquivos foram nomeados de acordo com os módulos disponíveis na API (Films, People e Planets) com adição livre do arquivo Structure. Os testes foram agrupados de acordo com a funcionalidade. Já no arquivo Structure foram alocados testes relacionados a estrutura dos dados.

### Dúvidas sobre o projeto? 
Estou disponível via [Linkedin](https://www.linkedin.com/in/joycepontes/).