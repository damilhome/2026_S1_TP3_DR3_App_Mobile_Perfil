import { StyleSheet, Text, View, Switch, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTema } from "../contexts/TemaContext";
import { usePerfil } from "../contexts/PerfilContext";

export default function Configuracoes() {
  const navigation = useNavigation();
  const { cores, modoEscuro, alterarTema } = useTema();
  const { perfil } = usePerfil();

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <View>
        <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
          Configurações
        </Text>
        <View style={styles.configuracoesContainer}>
          <View style={styles.switcher}>
            <Text style={[styles.opcao, { color: cores.textoPrincipal }]}>
              Modo escuro
            </Text>
            <Switch
              value={modoEscuro}
              onValueChange={alterarTema}
              trackColor={{
                false: "#cbd5e1",
                true: "#2563eb",
              }}
              thumbColor="#f8fafc"
            />
          </View>
          <View style={styles.dadosPerfilContainer}>
            <Text style={[styles.titulo, { color: cores.textoPrincipal }]}>
              Dados do perfil
            </Text>
            <View style={styles.dadosPerfil}>
              <Text style={[styles.opcao, { color: cores.textoPrincipal }]}>
                <Text style={{ fontWeight: "bold" }}>Nome:</Text> {perfil.nome}
              </Text>
              <Text style={[styles.opcao, { color: cores.textoPrincipal }]}>
                <Text style={{ fontWeight: "bold" }}>Titulo:</Text>{" "}
                {perfil.titulo}
              </Text>
              <Text style={[styles.opcao, { color: cores.textoPrincipal }]}>
                <Text style={{ fontWeight: "bold" }}>Descrição:</Text>{" "}
                {perfil.descricao}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          { backgroundColor: pressed ? cores.botaoPressionado : cores.botao },
        ]}
        onPress={() => navigation.navigate("EdicaoDadosPerfil")}
      >
        <Text style={[styles.btnTxt, { color: cores.textoPrincipal }]}>
          Editar dados do perfil
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
    padding: 24,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  configuracoesContainer: {
    gap: 50,
  },
  switcher: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  opcao: {
    fontSize: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dadosPerfilContainer: {
    gap: 15,
  },
  dadosPerfil: {
    gap: 5,
  },
  btn: {
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
  },
  btnTxt: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
