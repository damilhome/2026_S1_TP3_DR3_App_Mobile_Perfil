import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { formatarDataCriadoEm } from "../utils/formatacao";

export default function CardDetalhesProjetos({ dados }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.tituloSecao}>{dados.name}</Text>
        <View style={styles.detalhesContainer}>
          <Text style={styles.paragrafo}>
            <Text style={styles.realce}>Criado em:</Text>{" "}
            {formatarDataCriadoEm(dados.created_at)}
          </Text>
          <Text style={styles.paragrafo}>
            <Text style={styles.realce}>Autor:</Text> {dados.owner.login}
          </Text>
          <Text style={styles.paragrafo}>
            <Text style={styles.realce}>Linguagens utilizadas:</Text>{" "}
            {Object.keys(dados.linguagens).join(", ")}
          </Text>
          <Text style={styles.paragrafo}>
            <Text style={styles.realce}>Descrição:</Text>{" "}
            {dados.description ?? "-"}
          </Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          { backgroundColor: pressed ? "#3b82f6" : "#2563eb" },
        ]}
        onPress={() => Linking.openURL(dados.html_url)}
      >
        <Text style={styles.btnTxt}>Acessar repositório no Github</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  infoContainer: {
    gap: 20,
  },
  tituloSecao: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  detalhesContainer: {
    gap: 5,
  },
  paragrafo: {
    color: "#94a3b8",
    fontSize: 18,
  },
  realce: {
    fontWeight: "bold",
  },
  btn: {
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
  },
  btnTxt: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 16,
  },
});
