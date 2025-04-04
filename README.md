# Azure-Cognitive-Search-Utilizando-AI-Search-para-indexa-o-e-consulta-de-Dados-DECOLA-TECH

<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="DIO Education" 
      src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/logo.webp" 
      width="100px" 
    />
    <h1>Explorando os Recursos de IA Generativa com Copilot e OpenAI</h1>
  </p>
</div>
<!--END_SECTION:header-->

<p align="center">
  <img src="https://img.shields.io/static/v1?label=DIO&message=Education&color=E94D5F&labelColor=202024" alt="DIO Project" />
  <a href="NIVEL"><img  src="https://img.shields.io/static/v1?label=Nivel&message=Basico&color=E94D5F&labelColor=202024" alt="Nivel"></a>

</p>

<!--  -->
<table align="center">
<thead>
  <tr>
    <td>
        <p align="center">Elyelson Silva</p>
        <a href="https://github.com/Elyelsons">
        <img src="https://avatars.githubusercontent.com/u/157048915?v=4&size=3" alt="@ElyshowCodes"><br>
      </a>
    </td>
    <td colspan="3">
    <p>🎉 Expert em desenvolvimento Front & Backend (Principalmente com Java mas já atuei com Scala, Python, Kotlin).
      <br/>
     🌟 Desenvolvedor fron end - Freelancer
      <br/>
    👨‍💻 Foco em front
    </p>
      <a 
      href="https://www.linkedin.com/in/elyshow/" 
      align="center">
           <img 
            align="center" 
            alt="Material de Apoio" 
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            >
        </a>
        <a href="https://www.instagram.com/o.elyshow/" target="_blank">
            <img 
              align="center" 
              alt="Instagram" 
              src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            >
        </a>
    </td>
  </tr>
</thead>
</table>
<!--  -->

<br/>
<br/>

## 💻 Sobre o Projeto
Projeto que utiliza os serviços do Azure AI Search como demonstração de uso de ferramentas de indexação, pesquisa e inteligência em documentos, de modo a explicitar o valor que é entregue com essa solução do Azure. Para isso, deve-se ter em mente:

🧠 O que é o Azure AI Search?
O Azure AI Search é uma ferramenta de busca inteligente com IA integrada. Ele permite que você:

🔍 Indexe dados estruturados e não estruturados (PDFs, DOCs, JSONs, bancos de dados etc.)

🤖 Use análise semântica e NLP (Processamento de Linguagem Natural)

🧩 Faça perguntas em linguagem natural sobre os dados

📄 Use cognitive skills para extrair informações (como texto de imagens ou PDFs)

⚙️ Estrutura Geral do Processo
Criar o recurso Azure AI Search

Criar um Indexador (conecta sua fonte de dados ao Search)

Criar um Index (estrutura dos campos que serão buscáveis)

Consultar os dados com filtros, pesquisa semântica e linguagem natural

(Opcional) Adicionar Skills cognitivas para enriquecer os dados
📂 Fontes de Dados Suportadas:
Você pode indexar dados de:

💾 Azure Blob Storage

📊 SQL Database ou Cosmos DB

📁 Documentos (PDF, DOCX, JSON, HTML, TXT)

📷 Imagens com OCR + Extração de texto via skillset
✅ Resumo:
🔍 Indexação = subir e organizar os dados para serem buscáveis

💬 Consulta semântica = pesquisar com linguagem natural e IA

🧠 Skills = enriquecem dados automaticamente (OCR, extração, tradução, etc.)
🚀 Exemplo: App Web de Busca Inteligente com Azure AI Search
🎯 Objetivo:
Interface de busca com React
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



