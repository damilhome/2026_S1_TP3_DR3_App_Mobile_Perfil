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

const URL = "https://dev.to/api/articles?username=webdeveloperhyper";

export default function Artigos() {
  const { dados, erro, carregando } = useFetch(URL);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.tituloSecao}>Artigos no Dev.to</Text>
        <Text style={styles.observacao}>
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
    backgroundColor: "#0f172a",
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 28,
  },
  titleContainer: {
    gap: 8,
  },
  tituloSecao: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  observacao: {
    color: "#94a3b8",
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
