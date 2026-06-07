import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import CardDetalhesProjetos from "../components/CardDetalhesProjetos";

const URL_PARCIAL = "https://api.github.com/repositories/";

export default function Detalhes({ route }) {
  const { projetoId } = route.params;

  const [dados, setDados] = useState({});
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscar() {
      setCarregando(true);
      try {
        const responseProjeto = await fetch(`${URL_PARCIAL}${projetoId}`);
        if (!responseProjeto.ok) throw new Error("Erro ao buscar os dados.");
        const projeto = await responseProjeto.json();

        const responseLinguagens = await fetch(projeto.languages_url);
        if (!responseLinguagens.ok)
          throw new Error("Erro ao buscar as linguagens.");
        const linguagens = await responseLinguagens.json();

        setDados({ ...projeto, linguagens: linguagens });
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    buscar();
  }, [projetoId]);

  return (
    <View style={styles.container}>
      {carregando ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <CardDetalhesProjetos dados={dados} />
      )}
      {erro && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 8,
  },
  erro: {
    color: "red",
  },
});
