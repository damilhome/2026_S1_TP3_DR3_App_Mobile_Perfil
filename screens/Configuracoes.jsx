import { StyleSheet, Text, View, Switch } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function Configuracoes() {
  const { cores, modoEscuro, alterarTema } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.corDeFundo }]}>
      <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
        Configurações
      </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 8,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  switcher: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  opcao: {
    fontSize: 16,
  },
});
