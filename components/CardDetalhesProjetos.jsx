import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { formatarDataCriadoEm } from "../utils/formatacao";
import { useTema } from "../contexts/TemaContext";

export default function CardDetalhesProjetos({ dados }) {
  const { cores } = useTema();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
          {dados.name}
        </Text>
        <View style={styles.detalhesContainer}>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            <Text style={styles.realce}>Criado em:</Text>{" "}
            {formatarDataCriadoEm(dados.created_at)}
          </Text>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            <Text style={styles.realce}>Autor:</Text> {dados.owner.login}
          </Text>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            <Text style={styles.realce}>Linguagens utilizadas:</Text>{" "}
            {Object.keys(dados.linguagens).join(", ")}
          </Text>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            <Text style={styles.realce}>Descrição:</Text>{" "}
            {dados.description ?? "-"}
          </Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          { backgroundColor: pressed ? cores.botaoPressionado : cores.botao },
        ]}
        onPress={() => Linking.openURL(dados.html_url)}
      >
        <Text style={[styles.btnTxt, { color: cores.textoPrincipal }]}>
          Acessar repositório no Github
        </Text>
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  detalhesContainer: {
    gap: 5,
  },
  paragrafo: {
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
    fontWeight: "bold",
    fontSize: 16,
  },
});
