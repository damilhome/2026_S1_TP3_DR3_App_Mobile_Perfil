import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import dadosQualificacoes from "../utils/dadosQualificacoes";
import CardHabilidade from "../components/CardHabilidade.jsx";

export default function Qualificacoes() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.habilidadesContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.tituloSecao}>Habilidades e certificações</Text>
        {dadosQualificacoes.map((qualificacao, index) => (
          <CardHabilidade key={index} qualificacao={qualificacao} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 24,
    paddingBottom: 36,
    gap: 8,
  },
  tituloSecao: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  habilidadesContainer: {
    gap: 15,
  },
});
