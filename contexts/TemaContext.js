import { createContext, useState, useContext } from "react";
import { temaClaro, temaEscuro } from "../utils/temas";

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [modoEscuro, setModoEscuro] = useState(true);

  function alterarTema() {
    setModoEscuro((prevState) => !prevState);
  }

  const cores = modoEscuro ? temaEscuro : temaClaro;

  return (
    <TemaContext.Provider value={{ cores, modoEscuro, alterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}
