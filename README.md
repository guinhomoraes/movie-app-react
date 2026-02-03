# 🎬 Movie App React

Aplicação web desenvolvida em **React + TypeScript** para busca e visualização de filmes, consumindo dados da **OMDb API**.  
O projeto permite pesquisar filmes, visualizar resultados em forma de cards e acessar uma **página de detalhes completa**, com layout moderno e responsivo.

---

## 📸 Preview

> Em breve  
*(adicione aqui o link do deploy quando publicar)*

---

## ✨ Funcionalidades

- 🔍 Busca de filmes por título
- 🎞️ Listagem de filmes em cards
- 📄 Página de detalhes do filme
  - Poster em destaque
  - Sinopse
  - Gêneros
  - Diretor, roteirista e elenco
  - Avaliações (IMDb / Metascore)
  - Informações adicionais (idioma, país, bilheteria, produção, etc.)
- 🧭 Navegação com **React Router DOM**
- ⚡ Dados do filme enviados via `state` da rota
- 📱 Layout responsivo
- 🎨 Estilização com CSS puro e Flexbox

---

## 🛠️ Tecnologias utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Axios**
- **React Router DOM**
- **CSS3 (Flexbox)**
- **OMDb API**

---


---

## 🔐 Variáveis de ambiente

O projeto utiliza variáveis de ambiente para configuração da API.

Crie um arquivo `.env` na **raiz do projeto** com o seguinte conteúdo:

```env
VITE_IMDB_API_URL=http://www.omdbapi.com
VITE_IMDB_API_KEY=SEU_API_KEY_AQUI
VITE_IMDB_API_HOST=http://img.omdbapi.com

