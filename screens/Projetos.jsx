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
import { useTema } from "../contexts/TemaContext";

const URL =
  "https://api.github.com/users/damilhome/repos?sort=created&direction=desc";

export default function Projetos() {
  const { dados, erro, carregando } = useFetch(URL);
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
        Projetos no GitHub
      </Text>
      {carregando ? (
        <ActivityIndicator size="large" color={cores.botao} />
      ) : (
        <FlatList
          contentContainerStyle={styles.listaContainer}
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardProjetos item={item} />}
        />
      )}
      {erro && <Text style={{ color: cores.rejeitado }}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 8,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listaContainer: {
    width: "100%",
    gap: 15,
  },
});
