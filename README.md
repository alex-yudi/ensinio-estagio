Deploy: https://ensinio-alex-yudi.netlify.app/

Observações sobre a aplicação/deploy:
  - As informações dos cards preenchidos via requisição da API estão hospedados em um servidor gratuito, existe a possibilidade de, no momento de acesso, a api esteja "dormindo", sendo necessário apenas atualizar a página, para a requisição ocorrer novamente.
  - Na estilização de alguns campos foi utilizado a fonte "sans-seriff", pois a fonte "Degular" não é disponibilizada de maneira gratuita.

Bibliotecas utilizadas no projeto:
  - RadixUI,
  - i18next,
  - react-router-dom,
  - use-context-selector,
  - styled-components

# Instruções para executar o projeto localmente (em sua própria máquina)
# Requisitos:
- Node instalado no computador (versão utilizada no desenvolvimento foi 18.17)

# Passos:
- Fazer o download deste repositório em sua máquina (podendo ser um clone)
- Com ele baixado, abrí-lo em sua IDE
- Utilizar o comando `npm install` no terminal, dentro do projeto aberto.
**OBS.: Para a execução dele, existem duas possibilidades.**

## 1ª Possibilidade (Rodando o projeto conectado à uma API externa):
- Atualmente o projeto está conectado à uma API externa, para o preenchimento dos Cards solicitados.
- Caso não haja problema em usá-la assim localmente, utilize o comando `npm run dev` no terminal para execução do projeto.
- Acesse o link `http://localhost:5173/` dentro do navegador.


## 2ª Possibilidade (Rodando o projeto conectado ao json-server):
- É possível alterar o preenchimento dos Cards para o json-server, com os seguintes passos necessários:
- Entrar no arquivo `./src/lib/i18n/i18next.ts`.
        - No local escrito `backend` haverá um campo chamado `loadPath`.
- Deve-se alterar o escrito `alternativeApi` para `localHost`.
- Após fazer essa alteração e salvar, executar o comando `npm run start` no terminal (ele iniciará o projeto e o json-server).
- Acesse o link `http://localhost:5173/` dentro do navegador.
