import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscar() {
      setCarregando(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const dados = await response.json();
        setDados(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }
    buscar();
  }, [url]);

  return { dados, erro, carregando };
}
