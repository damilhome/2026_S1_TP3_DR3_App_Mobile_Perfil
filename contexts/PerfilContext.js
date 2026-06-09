import { createContext, useContext, useState } from "react";

const PerfilContext = createContext();

export function PerfilProvider({ children }) {
  const [perfil, setPerfil] = useState({
    nome: "Danilo Almeida Milhome",
    titulo: "Desenvolvedor Front-End",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis aspernatur, assumenda cumque sapiente ducimus quo aliquid atquedolore, magni nam, ex dicta dolorem exercitationem voluptate unde laboriosam recusandae esse.",
  });

  return (
    <PerfilContext.Provider value={{ perfil, setPerfil }}>
      {children}
    </PerfilContext.Provider>
  );
}

export function usePerfil() {
  return useContext(PerfilContext);
}
