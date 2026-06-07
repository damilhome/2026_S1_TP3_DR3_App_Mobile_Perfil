import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Linking,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";

import { formatarDataCriadoEm } from "../utils/formatacao";

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
        <View style={styles.cardContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.tituloSecao}>{dados.name}</Text>
            <View style={styles.detalhesContainer}>
              <Text style={styles.paragrafo}>
                <Text style={styles.realce}>Criado em:</Text>{" "}
                {formatarDataCriadoEm(dados.created_at)}
              </Text>
              <Text style={styles.paragrafo}>
                <Text style={styles.realce}>Autor:</Text> {dados.owner.login}
              </Text>
              <Text style={styles.paragrafo}>
                <Text style={styles.realce}>Linguagens utilizadas:</Text>{" "}
                {Object.keys(dados.linguagens).join(", ")}
              </Text>
              <Text style={styles.paragrafo}>
                <Text style={styles.realce}>Descrição:</Text>{" "}
                {dados.description ?? "-"}
              </Text>
            </View>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              { backgroundColor: pressed ? "#3b82f6" : "#2563eb" },
            ]}
            onPress={() => Linking.openURL(dados.html_url)}
          >
            <Text style={styles.btnTxt}>Acessar repositório no Github</Text>
          </Pressable>
        </View>
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
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  infoContainer: {
    gap: 20,
  },
  tituloSecao: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  detalhesContainer: {
    gap: 5,
  },
  paragrafo: {
    color: "#94a3b8",
    fontSize: 18,
  },
  realce: {
    fontWeight: "bold",
  },
  btn: {
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
  },
  btnTxt: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 16,
  },
  erro: {
    color: "red",
  },
});
