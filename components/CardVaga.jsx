import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import descobrirCorBadge from "../utils/descobrirCorBadge";
import { useTema } from "../contexts/TemaContext";

export default function CardArtigo({ item, setCandidaturas }) {
  const navigation = useNavigation();
  const { cores } = useTema();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        { backgroundColor: pressed ? cores.cardsPressionado : cores.cards },
      ]}
      onPress={() =>
        navigation.navigate("DetalhesVaga", {
          detalhesItem: item,
          setCandidaturas: setCandidaturas,
        })
      }
    >
      <Text style={[styles.tituloProjeto, { color: cores.textoPrincipal }]}>
        {item.cargo}
      </Text>
      <View style={styles.detalhesContainer}>
        <View style={styles.infoContainer}>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            {item.empresa}
          </Text>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            {item.localizacao}
          </Text>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            {item.dataPublicacao}
          </Text>
        </View>
        <View
          style={[
            styles.badge,
            { backgroundColor: cores[descobrirCorBadge(item.status)[0]] },
          ]}
        >
          <Text
            style={[
              styles.badgeTxt,
              {
                color:
                  descobrirCorBadge(item.status)[0] === "outrosStatus"
                    ? "#0f172a"
                    : cores.textoPrincipal,
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    borderRadius: 8,
    gap: 10,
  },
  detalhesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  infoContainer: {
    flex: 1,
    flexShrink: 1,
    gap: 4,
  },
  tituloProjeto: {
    fontWeight: "bold",
    fontSize: 18,
  },
  paragrafo: {
    fontSize: 16,
  },
  badge: {
    padding: 10,
    borderRadius: 8,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTxt: {
    fontWeight: "bold",
  },
});
