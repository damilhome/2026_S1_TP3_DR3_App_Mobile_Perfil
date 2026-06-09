import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useTema } from "../contexts/TemaContext";
import { useState, useEffect } from "react";
import { usePerfil } from "../contexts/PerfilContext";
import { recuperarDados } from "../utils/asyncStorage";

export default function Home({ navigation }) {
  const { cores } = useTema();
  const { perfil, setPerfil } = usePerfil();

  useEffect(() => {
    async function carregarValoresSalvos() {
      let perfilAtualizado = { ...perfil };

      const perfilSalvo = await recuperarDados(`dadosPerfil`);

      if (perfilSalvo) {
        perfilAtualizado = perfilSalvo;
      }

      setPerfil(perfilAtualizado);
    }

    carregarValoresSalvos();
  }, []);

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
              {perfil.nome}
            </Text>
            <Text style={[styles.titulo, { color: cores.textoPrincipal }]}>
              {perfil.titulo}
            </Text>
          </View>
        </View>
        <View style={styles.descricaoContainer}>
          <Text style={[styles.descricao, { color: cores.textoPrincipal }]}>
            {perfil.descricao}
          </Text>
        </View>
      </ScrollView>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: pressed ? cores.botaoPressionado : cores.botao,
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
