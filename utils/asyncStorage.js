import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarVaga(dados) {
  try {
    const jsonValue = JSON.stringify(dados);
    await AsyncStorage.setItem(`vaga${dados.id}`, jsonValue);
  } catch (error) {
    console.error(error);
  }
}

export async function recuperarVaga(id) {
  try {
    const jsonValue = await AsyncStorage.getItem(`vaga${id}`);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
  }
}
