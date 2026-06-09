import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { traduzirData } from "../utils/formatacao";
import { useTema } from "../contexts/TemaContext";

export default function CardArtigo({ item }) {
  const navigation = useNavigation();
  const { cores } = useTema();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        { backgroundColor: pressed ? cores.cardsPressionado : cores.cards },
      ]}
      onPress={() =>
        navigation.navigate("DetalhesArtigo", { idArtigo: item.id })
      }
    >
      <View style={styles.containerUsuario}>
        <Image
          source={{ uri: item.user.profile_image }}
          style={styles.imagemPerfil}
        />
        <View style={styles.usuario}>
          <Text style={[styles.nomeUsuario, { color: cores.textoPrincipal }]}>
            {item.user.name}
          </Text>
          <Text style={{ color: cores.textoSecundario }}>
            {traduzirData(item.readable_publish_date)}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.tituloProjeto, { color: cores.textoPrincipal }]}>
          {item.title}
        </Text>
        <Text style={[styles.infos, { color: cores.textoSecundario }]}>
          #{item.tag_list.join(" #")}
        </Text>
      </View>
      <View style={styles.reacoesContainer}>
        <View style={styles.reacoes}>
          <Text style={[styles.infos, { color: cores.textoSecundario }]}>
            {item.public_reactions_count} reações
          </Text>
          <Text style={[styles.infos, { color: cores.textoSecundario }]}>
            {item.comments_count} comentários
          </Text>
        </View>
        <Text style={[styles.infos, { color: cores.textoSecundario }]}>
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
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
    gap: 4,
  },
  tituloProjeto: {
    fontWeight: "bold",
    fontSize: 18,
  },
  infos: {
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
});
