
# 🔍 App de Busca Inteligente com Azure AI Search

Este projeto é um exemplo de aplicação web que utiliza o Azure Cognitive Search com interface em React e backend em Node.js.

## 📦 Estrutura

- `frontend/` — Interface em React com campo de busca
- `backend/` — API Express que conecta com Azure Search

## 🚀 Como usar

1. Configure o backend:
   - Altere `endpoint` e `apiKey` no arquivo `backend/search-api.js`

2. Instale dependências e execute:
   ```bash
   cd backend
   npm install express axios cors
   node search-api.js
   ```

3. No frontend (React), importe o componente `SearchApp.jsx` em sua aplicação React principal.

Pronto! 🎉
