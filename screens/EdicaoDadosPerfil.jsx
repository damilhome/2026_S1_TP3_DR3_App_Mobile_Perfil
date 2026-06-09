import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { usePerfil } from "../contexts/PerfilContext";
import { useTema } from "../contexts/TemaContext";
import { useState } from "react";
import { salvarDados } from "../utils/asyncStorage";

export default function EdicaoDadosPerfil() {
  const navigation = useNavigation();
  const { perfil, setPerfil } = usePerfil();
  const [nome, setNome] = useState(perfil.nome);
  const [titulo, setTitulo] = useState(perfil.titulo);
  const [descricao, setDescricao] = useState(perfil.descricao);
  const { cores } = useTema();

  function salvar() {
    const novosDadosPerfl = {
      nome: nome,
      titulo: titulo,
      descricao: descricao,
    };
    setPerfil(novosDadosPerfl);
    salvarDados(novosDadosPerfl, "dadosPerfil");
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: cores.corDeFundo }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={[styles.tituloSecao, { color: cores.textoPrincipal }]}>
            Editar dados
          </Text>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: cores.textoPrincipal }]}>
                Nome
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { color: cores.textoPrincipal, borderColor: cores.borda },
                ]}
                value={nome}
                onChangeText={setNome}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: cores.textoPrincipal }]}>
                Titulo
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { color: cores.textoPrincipal, borderColor: cores.borda },
                ]}
                value={titulo}
                onChangeText={setTitulo}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: cores.textoPrincipal }]}>
                Descrição
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { color: cores.textoPrincipal, borderColor: cores.borda },
                ]}
                value={descricao}
                onChangeText={setDescricao}
                multiline={true}
                numberOfLines={15}
                textAlignVertical="top"
                scrollEnabled={true}
              />
            </View>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            { backgroundColor: pressed ? cores.botaoPressionado : cores.botao },
          ]}
          onPress={salvar}
        >
          <Text style={[styles.btnTxt, { color: cores.textoPrincipal }]}>
            Salvar
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
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
  inputsContainer: {
    gap: 15,
  },
  inputContainer: {
    gap: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 3,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
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
