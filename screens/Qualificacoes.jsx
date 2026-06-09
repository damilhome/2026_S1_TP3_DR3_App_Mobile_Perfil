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
import { useTema } from "../contexts/TemaContext.js";

export default function Qualificacoes() {
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <ScrollView
        contentContainerStyle={styles.habilidadesContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
          Habilidades e certificações
        </Text>
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
    padding: 24,
    gap: 8,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  habilidadesContainer: {
    gap: 15,
    paddingBottom: 24,
  },
});
