import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { formatarDataCriadoEm } from "../utils/formatacao";
import { useTema } from "../contexts/TemaContext";

export default function CardProjetos({ item }) {
  const navigation = useNavigation();
  const { cores } = useTema();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        { backgroundColor: pressed ? cores.cardsPressionado : cores.cards },
      ]}
      onPress={() =>
        navigation.navigate("DetalhesProjetos", { projetoId: item.id })
      }
    >
      <View style={styles.infoContainer}>
        <Text style={[styles.tituloProjeto, { color: cores.textoPrincipal }]}>
          {item.name}
        </Text>
        <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
          Criado em: {formatarDataCriadoEm(item.created_at)}
        </Text>
      </View>
      <MaterialIcons name="arrow-right" size={40} color={cores.botao} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    gap: 4,
    paddingRight: 15,
  },
  tituloProjeto: {
    fontWeight: "bold",
    fontSize: 18,
  },
  paragrafo: {
    fontSize: 16,
  },
});
