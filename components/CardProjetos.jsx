import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";

function formatarDataCriadoEm(data) {
  let partes = data.split("-");
  let dia = partes[2].split("T");
  return `${dia[0]}/${partes[1]}/${partes[0]}`;
}

export default function CardProjetos({ item }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        { backgroundColor: pressed ? "#2c3a50" : "#1e293b" },
      ]}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.tituloProjeto}>{item.name}</Text>
        <Text style={styles.paragrafo}>
          Criado em: {formatarDataCriadoEm(item.created_at)}
        </Text>
      </View>
      <MaterialIcons name="arrow-right" size={40} color="#3b82f6" />
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
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 18,
  },
  paragrafo: {
    color: "#94a3b8",
    fontSize: 16,
  },
});
