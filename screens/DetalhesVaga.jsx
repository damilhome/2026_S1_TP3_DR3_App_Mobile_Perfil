import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { salvarDados } from "../utils/asyncStorage";
import { useTema } from "../contexts/TemaContext";
import descobrirCorBadge from "../utils/descobrirCorBadge";

export default function DetalhesVaga({ route }) {
  const { detalhesItem, setCandidaturas } = route.params;
  const { cores } = useTema();
  const [vaga, setVaga] = useState(detalhesItem);
  const corFundoBtn = descobrirCorBadge(vaga.status);

  function atualizarStatus() {
    const novosDados = {
      ...detalhesItem,
      status: "Enviada",
      feedback: "Inscrição confirmada.",
    };
    setVaga(novosDados);
    salvarDados(novosDados, `vaga${novosDados.id}`);

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
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      >
        <View>
          <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
            {vaga.cargo}
          </Text>
          <Text style={[styles.empresa, { color: cores.textoPrincipal }]}>
            {vaga.empresa}
          </Text>
          <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
            Data de publicação: {vaga.dataPublicacao}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.subTitutlo, { color: cores.textoPrincipal }]}>
            Sobre a vaga:
          </Text>
          <View style={styles.infos}>
            <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
              {vaga.descricao}
            </Text>
            <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
              <Text style={styles.realce}>Localização da vaga:</Text>{" "}
              {vaga.localizacao}
            </Text>
            <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
              <Text style={styles.realce}>Requisitos:</Text>{" "}
              {vaga.requisitos.join(", ")}
            </Text>
            <Text style={[styles.paragrafo, { color: cores.textoSecundario }]}>
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
            {
              backgroundColor: pressed
                ? cores[corFundoBtn[1]]
                : cores[corFundoBtn[0]],
            },
          ]}
          onPress={() => atualizarStatus()}
        >
          <Text
            style={[
              styles.btnTxt,
              {
                color:
                  corFundoBtn[0] === "outrosStatus"
                    ? "#0f172a"
                    : cores.textoPrincipal,
              },
            ]}
          >
            {vaga.status === "Vaga Divulgada" ? "Candidatar-se" : vaga.status}
          </Text>
        </Pressable>
        <Text style={[styles.candidatoTxt, { color: cores.textoSecundario }]}>
          {vaga.feedback}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 35,
  },
  cardContainer: {
    gap: 20,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  empresa: {
    fontSize: 18,
  },
  infoContainer: {
    gap: 8,
  },
  subTitutlo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infos: {
    gap: 5,
  },
  paragrafo: {
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
    fontWeight: "bold",
    fontSize: 16,
  },
  candidatoTxt: {
    fontSize: 16,
    textAlign: "center",
  },
});
