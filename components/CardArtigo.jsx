import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { traduzirData } from "../utils/formatacao";

export default function CardArtigo({ item }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        { backgroundColor: pressed ? "#2c3a50" : "#1e293b" },
      ]}
      onPress={() =>
        /* TODO: Concertar página de navegação */
        navigation.navigate("DetalhesArtigo", { idArtigo: item.id })
      }
    >
      <View style={styles.containerUsuario}>
        <Image
          source={{ uri: item.user.profile_image }}
          style={styles.imagemPerfil}
        />
        <View style={styles.usuario}>
          <Text style={styles.nomeUsuario}>{item.user.name}</Text>
          <Text style={styles.publicacao}>
            {traduzirData(item.readable_publish_date)}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.tituloProjeto}>{item.title}</Text>
        <Text style={styles.infos}>#{item.tag_list.join(" #")}</Text>
      </View>
      <View style={styles.reacoesContainer}>
        <View style={styles.reacoes}>
          <Text style={styles.infos}>
            {item.public_reactions_count} reações
          </Text>
          <Text style={styles.infos}>{item.comments_count} comentários</Text>
        </View>
        <Text style={styles.infos}>
          Leitura: {item.reading_time_minutes} min
        </Text>
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
  containerUsuario: {
    flexDirection: "row",
    gap: 8,
  },
  imagemPerfil: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  nomeUsuario: {
    color: "#f8fafc",
    fontWeight: "bold",
  },
  publicacao: {
    color: "#94a3b8",
  },
  infoContainer: {
    flex: 1,
    gap: 4,
  },
  tituloProjeto: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 18,
  },
  infos: {
    color: "#94a3b8",
    fontSize: 14,
  },
  reacoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reacoes: {
    flexDirection: "row",
    gap: 8,
  },
  paragrafo: {
    color: "#94a3b8",
    fontSize: 16,
  },
});
