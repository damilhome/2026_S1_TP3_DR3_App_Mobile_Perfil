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
import { useTema } from "../contexts/TemaContext";

const URL_PARCIAL = "https://dev.to/api/articles/";

export default function DetalhesArtigo({ route }) {
  const { idArtigo } = route.params;
  const { dados, erro, carregando } = useFetch(`${URL_PARCIAL}${idArtigo}`);
  const { cores } = useTema();

  return (
    <View style={{ flex: 1, backgroundColor: cores.corDeFundo }}>
      {carregando ? (
        <ActivityIndicator size="large" color={cores.botao} />
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
                <Text
                  style={[styles.nomeUsuario, { color: cores.textoPrincipal }]}
                >
                  {dados.user.name}
                </Text>
                <Text
                  style={[styles.publicacao, { color: cores.textoSecundario }]}
                >
                  {traduzirData(dados.readable_publish_date)}
                </Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text
                style={[styles.tituloProjeto, { color: cores.textoPrincipal }]}
              >
                {dados.title}
              </Text>
              <Text style={[styles.infos, { color: cores.textoSecundario }]}>
                #{dados.tags.join(" #")}
              </Text>
            </View>
            <Text style={[styles.paragrafo, { color: cores.textoPrincipal }]}>
              {dados.description}
            </Text>
          </ScrollView>
          <View style={styles.btnContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                {
                  backgroundColor: pressed
                    ? cores.botaoPressionado
                    : cores.botao,
                },
              ]}
              onPress={() => Linking.openURL(dados.url)}
            >
              <Text style={[styles.btnTxt, { color: cores.textoPrincipal }]}>
                Ver artigo completo na web
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: "bold",
    fontSize: 20,
  },
  publicacao: {
    fontSize: 16,
  },
  infoContainer: {
    paddingHorizontal: 24,
    gap: 8,
  },
  tituloProjeto: {
    fontWeight: "bold",
    fontSize: 24,
  },
  infos: {
    fontSize: 14,
  },
  paragrafo: {
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
    fontWeight: "bold",
    fontSize: 16,
  },
});
