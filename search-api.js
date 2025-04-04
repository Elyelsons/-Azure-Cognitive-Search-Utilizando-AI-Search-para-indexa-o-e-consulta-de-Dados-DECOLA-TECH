
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());

const endpoint = "https://SEU_SEARCH_SERVICE.search.windows.net";
const apiKey = "SUA_CHAVE_DE_API";
const indexName = "meu-index";

app.get("/search", async (req, res) => {
  const termo = req.query.q || "";
  const url = `${endpoint}/indexes/${indexName}/docs?api-version=2021-04-30-Preview&search=${encodeURIComponent(termo)}`;

  try {
    const resposta = await axios.get(url, {
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json"
      }
    });

    const docs = resposta.data.value;
    res.json({ resultados: docs });
  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro na consulta");
  }
});

app.listen(5000, () => console.log("API de busca rodando em http://localhost:5000"));
