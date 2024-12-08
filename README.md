
# Site_criptmoedas
 é uma aplicação web que oferece informações atualizadas sobre o mercado de criptomoedas. 

![Invista Cripto](https://github.com/user-attachments/assets/f586e4fd-12c9-4891-9caf-1e3c0efd9846)

# React + TypeScript + Vite
# Passos para Configuração
- Clone o repositório
```js
git clone https://github.com/TomasRita/Site_criptmoedas
cd site_criptmoedas
```
- Instale as dependências
```
npm install
```
- Ou com yarn
```
yarn install
```
## Configure o ambiente
Verifique as variáveis de ambiente no arquivo .env para ajustar configurações como a API de criptomoedas.
- Inicie o servidor de desenvolvimento
```
npm run dev
```
- Ou com yarn:
```
yarn dev
```
## Configuração do Vite
 A configuração básica do Vite para este projeto está no arquivo vite.config.ts. O servidor foi configurado para rodar na porta 3003:

```js
// eslint.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3003,
    //host:'0.0.0.0',
  }
})

```
## Equipa de Desenvolvimento
- Front-end: Tomás Rita
- Ui/ux: Wilson Brás
