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

export default function CardVaga({ item, setCandidaturas }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        { backgroundColor: pressed ? "#2c3a50" : "#1e293b" },
      ]}
      onPress={() =>
        navigation.navigate("DetalhesVaga", {
          detalhesItem: item,
          setCandidaturas: setCandidaturas,
        })
      }
    >
      <Text style={styles.tituloProjeto}>{item.cargo}</Text>
      <View style={styles.detalhesContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.paragrafo}>{item.empresa}</Text>
          <Text style={styles.paragrafo}>{item.localizacao}</Text>
          <Text style={styles.paragrafo}>{item.dataPublicacao}</Text>
        </View>
        <View
          style={[
            styles.badge,
            { backgroundColor: descobrirCorBadge(item.status)[0] },
          ]}
        >
          <Text
            style={[
              styles.badgeTxt,
              {
                color:
                  descobrirCorBadge(item.status)[0] === "#ffff00"
                    ? "#0f172a"
                    : "#f8fafc",
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
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 18,
  },
  paragrafo: {
    color: "#94a3b8",
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
