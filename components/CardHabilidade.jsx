import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";

export default function CardHabilidade({ qualificacao }) {
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <View style={styles.habilidadeContainer}>
        <MaterialCommunityIcons
          name={qualificacao.logo}
          size={28}
          color={cores.botao}
        />
        <Text style={[styles.habilidade, { color: cores.textoPrincipal }]}>
          {qualificacao.habilidade}
        </Text>
      </View>
      <View style={styles.certificacaoContainer}>
        {qualificacao.certificacoes.map((cert, index) => (
          <Text
            key={index}
            style={[styles.certificacao, { color: cores.textoPrincipal }]}
          >
            - {cert}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  habilidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  habilidade: {
    fontWeight: "bold",
    fontSize: 24,
  },
  certificacaoContainer: {
    gap: 3,
  },
  certificacao: {
    fontSize: 16,
  },
});
