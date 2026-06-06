import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CardHabilidade({ qualificacao }) {
  return (
    <View style={styles.container}>
      <View style={styles.habilidadeContainer}>
        <MaterialCommunityIcons
          name={qualificacao.logo}
          size={28}
          color="#2563eb"
        />
        <Text style={styles.habilidade}>{qualificacao.habilidade}</Text>
      </View>
      <View style={styles.certificacaoContainer}>
        {qualificacao.certificacoes.map((cert, index) => (
          <Text key={index} style={styles.certificacao}>
            - {cert}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f172a",
    gap: 5,
  },
  habilidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  habilidade: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 24,
  },
  certificacaoContainer: {
    gap: 3,
  },
  certificacao: {
    color: "#f8fafc",
    fontSize: 16,
  },
});
