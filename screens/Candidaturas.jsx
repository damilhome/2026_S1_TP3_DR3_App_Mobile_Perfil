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
import { useEffect, useState } from "react";
import { recuperarVaga } from "../utils/asyncStorage";
import { useTema } from "../contexts/TemaContext";

export default function Candidaturas() {
  const [candidaturas, setCandidaturas] = useState(dadosCandidaturas);
  const { cores } = useTema();

  useEffect(() => {
    async function carregarValoresSalvos() {
      let listaAtualizada = [...dadosCandidaturas];

      for (let i = 0; i < listaAtualizada.length; i++) {
        const vagaSalva = await recuperarVaga(listaAtualizada[i].id);

        if (vagaSalva) {
          listaAtualizada[i] = vagaSalva;
        }
      }

      setCandidaturas(listaAtualizada);
    }

    carregarValoresSalvos();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
        Vagas Disponíveis
      </Text>
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
