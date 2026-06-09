import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function Home({ navigation }) {
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <ScrollView
        contentContainerStyle={styles.perfilContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.desenvolvedorContainer}>
          <Image
            source={require("../assets/Perfil.jpg")}
            style={styles.imagem}
          />
          <View style={styles.tituloContainer}>
            <Text style={[styles.nome, { color: cores.textoPrincipal }]}>
              Danilo Almeida Milhome
            </Text>
            <Text style={[styles.titulo, { color: cores.textoPrincipal }]}>
              Desenvolvedor Full Stack
            </Text>
          </View>
        </View>
        <View style={styles.descricaoContainer}>
          <Text style={[styles.descricao, { color: cores.textoPrincipal }]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis
            aspernatur, assumenda cumque sapiente ducimus quo aliquid atque
            dolore, magni nam, ex dicta dolorem exercitationem voluptate unde
            laboriosam recusandae esse.
          </Text>
          <Text style={[styles.descricao, { color: cores.textoPrincipal }]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis
            aspernatur, assumenda cumque sapiente ducimus quo aliquid atque
            dolore, magni nam, ex dicta dolorem exercitationem voluptate unde
            laboriosam recusandae esse.
          </Text>
          <Text style={[styles.descricao, { color: cores.textoPrincipal }]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis
            aspernatur, assumenda cumque sapiente ducimus quo aliquid atque
            dolore, magni nam, ex dicta dolorem exercitationem voluptate unde
            laboriosam recusandae esse.
          </Text>
        </View>
      </ScrollView>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: pressed ? "#3b82f6" : "#2563eb",
          },
        ]}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={[styles.txtBtn, { color: cores.textoPrincipal }]}>
          Ver perfil completo
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 36,
    gap: 8,
  },
  perfilContainer: {
    gap: 25,
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 20,
  },
  desenvolvedorContainer: {
    gap: 10,
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 500,
  },
  tituloContainer: {
    alignItems: "center",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  titulo: {
    fontStyle: "italic",
  },
  descricaoContainer: {
    gap: 10,
  },
  descricao: {
    textAlign: "justify",
  },
  btn: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  txtBtn: {
    fontWeight: "bold",
  },
});
