import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";

import useFetch from "../hooks/useFetch";
import CardProjetos from "../components/CardProjetos";

const URL =
  "https://api.github.com/users/damilhome/repos?sort=created&direction=desc";

export default function Projetos() {
  const { dados, erro, carregando } = useFetch(URL);

  return (
    <View style={styles.container}>
      <Text style={styles.tituloSecao}>Projetos no GitHub</Text>
      {carregando ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <FlatList
          contentContainerStyle={styles.listaContainer}
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardProjetos item={item} />}
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
    gap: 8,
  },
  tituloSecao: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
