
import React, { useState } from "react";

export default function SearchApp() {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  const buscar = async () => {
    const resposta = await fetch("http://localhost:5000/search?q=" + query);
    const dados = await resposta.json();
    setResultados(dados.resultados);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Busca Inteligente 🔍</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 w-full rounded"
          type="text"
          placeholder="Digite sua busca..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 rounded" onClick={buscar}>
          Buscar
        </button>
      </div>

      <div className="grid gap-4">
        {resultados.map((item, i) => (
          <div key={i} className="p-4 shadow rounded border">
            <h2 className="text-lg font-semibold">{item.nome}</h2>
            <p className="text-sm">{item.descricao}</p>
            <p className="text-xs text-gray-500">Categoria: {item.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
