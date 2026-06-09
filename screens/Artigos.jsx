import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";

import useFetch from "../hooks/useFetch";
import CardArtigo from "../components/CardArtigo";
import { useTema } from "../contexts/TemaContext";

const URL = "https://dev.to/api/articles?username=webdeveloperhyper";

export default function Artigos() {
  const { dados, erro, carregando } = useFetch(URL);
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
          Artigos no Dev.to
        </Text>
        <Text style={[styles.observacao, { color: cores.textoSecundario }]}>
          Todos os artigos nesta aba são do perfil "webdeveloperhyper"
        </Text>
      </View>
      {carregando ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <FlatList
          contentContainerStyle={styles.listaContainer}
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardArtigo item={item} />}
        />
      )}
      {erro && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 28,
  },
  titleContainer: {
    gap: 8,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  observacao: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },
  listaContainer: {
    width: "100%",
    gap: 15,
  },
  erro: {
    color: "red",
  },
});
