import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";

import dadosCandidaturas from "../utils/dadosCandidaturas";
import CardVaga from "../components/CardVaga";
import { useState } from "react";

export default function Candidaturas() {
  const [candidaturas, setCandidaturas] = useState(dadosCandidaturas);

  return (
    <View style={styles.container}>
      <Text style={styles.tituloSecao}>Vagas Disponíveis</Text>
      <FlatList
        contentContainerStyle={styles.listaContainer}
        data={candidaturas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardVaga item={item} setCandidaturas={setCandidaturas} />
        )}
      />
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
