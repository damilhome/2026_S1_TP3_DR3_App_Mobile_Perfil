import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import descobrirCorBadge from "../utils/descobrirCorBadge";
import { useState } from "react";

export default function DetalhesVaga({ route }) {
  const { detalhesItem, setCandidaturas } = route.params;
  const [vaga, setVaga] = useState(detalhesItem);
  const corFundoBtn = descobrirCorBadge(vaga.status);

  function atualizarStatus() {
    const novosDados = {
      ...detalhesItem,
      status: "Enviada",
      feedback: "Inscrição confirmada.",
    };
    setVaga(novosDados);

    setCandidaturas((prevState) =>
      prevState.map((item) => {
        if (item.id === novosDados.id) {
          return novosDados;
        }
        return item;
      }),
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      >
        <View>
          <Text style={styles.tituloSecao}>{vaga.cargo}</Text>
          <Text style={styles.empresa}>{vaga.empresa}</Text>
          <Text style={styles.paragrafo}>
            Data de publicação: {vaga.dataPublicacao}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.subTitutlo}>Sobre a vaga:</Text>
          <View style={styles.infos}>
            <Text style={styles.paragrafo}>{vaga.descricao}</Text>
            <Text style={styles.paragrafo}>
              <Text style={styles.realce}>Localização da vaga:</Text>{" "}
              {vaga.localizacao}
            </Text>
            <Text style={styles.paragrafo}>
              <Text style={styles.realce}>Requisitos:</Text>{" "}
              {vaga.requisitos.join(", ")}
            </Text>
            <Text style={styles.paragrafo}>
              <Text style={styles.realce}>Salário:</Text> {vaga.salario}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Pressable
          disabled={vaga.status === "Vaga Divulgada" ? false : true}
          style={({ pressed }) => [
            styles.btn,
            { backgroundColor: pressed ? corFundoBtn[1] : corFundoBtn[0] },
          ]}
          onPress={() => atualizarStatus()}
        >
          <Text
            style={[
              styles.btnTxt,
              { color: corFundoBtn[0] === "#ffff00" ? "#0f172a" : "#f8fafc" },
            ]}
          >
            {vaga.status === "Vaga Divulgada" ? "Candidatar-se" : vaga.status}
          </Text>
        </Pressable>
        <Text style={styles.candidatoTxt}>{vaga.feedback}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
    backgroundColor: "#0f172a",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 35,
  },
  cardContainer: {
    gap: 20,
  },
  tituloSecao: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  empresa: {
    color: "#f8fafc",
    fontSize: 18,
  },
  infoContainer: {
    gap: 8,
  },
  subTitutlo: {
    color: "#f8fafc",
    fontSize: 20,
    fontWeight: "bold",
  },
  infos: {
    gap: 5,
  },
  paragrafo: {
    color: "#94a3b8",
    fontSize: 18,
  },
  realce: {
    fontWeight: "bold",
  },
  btnContainer: {
    gap: 5,
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
  candidatoTxt: {
    color: "#94a3b8",
    fontSize: 16,
    textAlign: "center",
  },
});
