import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
  Linking,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { traduzirData } from "../utils/formatacao";

const URL_PARCIAL = "https://dev.to/api/articles/";

export default function DetalhesArtigo({ route }) {
  const { idArtigo } = route.params;
  const { dados, erro, carregando } = useFetch(`${URL_PARCIAL}${idArtigo}`);

  return (
    <View style={styles.corFundoScreen}>
      {carregando ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={{ uri: dados.social_image }} style={styles.banner} />
            <View style={styles.containerUsuario}>
              <Image
                source={{ uri: dados.user.profile_image }}
                style={styles.imagemPerfil}
              />
              <View style={styles.usuario}>
                <Text style={styles.nomeUsuario}>{dados.user.name}</Text>
                <Text style={styles.publicacao}>
                  {traduzirData(dados.readable_publish_date)}
                </Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.tituloProjeto}>{dados.title}</Text>
              <Text style={styles.infos}>#{dados.tags.join(" #")}</Text>
            </View>
            <Text style={styles.paragrafo}>{dados.description}</Text>
          </ScrollView>
          <View style={styles.btnContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                { backgroundColor: pressed ? "#3b82f6" : "#2563eb" },
              ]}
              onPress={() => Linking.openURL(dados.url)}
            >
              <Text style={styles.btnTxt}>Ver artigo completo na web</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  corFundoScreen: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  container: {
    flex: 1,
    gap: 20,
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  scrollContainer: {
    gap: 20,
  },
  banner: {
    width: "100%",
    height: 200,
  },
  containerUsuario: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
  },
  imagemPerfil: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  nomeUsuario: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 20,
  },
  publicacao: {
    color: "#94a3b8",
    fontSize: 16,
  },
  infoContainer: {
    paddingHorizontal: 24,
    gap: 8,
  },
  tituloProjeto: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 24,
  },
  infos: {
    color: "#94a3b8",
    fontSize: 14,
  },
  paragrafo: {
    color: "#f8fafc",
    fontSize: 18,
    paddingHorizontal: 24,
  },
  btnContainer: {
    paddingHorizontal: 24,
  },
  btn: {
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "blue",
  },
  btnTxt: {
    color: "#f8fafc",
    fontWeight: "bold",
    fontSize: 16,
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
  subTitutlo: {
    color: "#f8fafc",
    fontSize: 20,
    fontWeight: "bold",
  },

  realce: {
    fontWeight: "bold",
  },

  candidatoTxt: {
    color: "#94a3b8",
    fontSize: 16,
    textAlign: "center",
  },
});
