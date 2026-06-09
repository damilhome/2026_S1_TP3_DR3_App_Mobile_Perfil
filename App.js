import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home.jsx";
import Perfil from "./screens/Perfil.jsx";
import DetalhesProjetos from "./screens/DetalhesProjetos.jsx";
import DetalhesVaga from "./screens/DetalhesVaga.jsx";
import DetalhesArtigo from "./screens/DetalhesArtigo.jsx";
import Configuracoes from "./screens/Configuracoes.jsx";
import { TemaProvider, useTema } from "./contexts/TemaContext.js";

const Stack = createStackNavigator();

function AppNavigator() {
  const { cores } = useTema();

  const stackNavigatorStyles = {
    headerStyle: {
      backgroundColor: cores.cards,
    },
    headerTintColor: cores.textoPrincipal,
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
    },
    headerTitleAlign: "center",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={stackNavigatorStyles}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="DetalhesProjetos" component={DetalhesProjetos} />
        <Stack.Screen name="DetalhesVaga" component={DetalhesVaga} />
        <Stack.Screen name="DetalhesArtigo" component={DetalhesArtigo} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <TemaProvider>
      <AppNavigator />
    </TemaProvider>
  );
}
