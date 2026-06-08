import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home.jsx";
import Perfil from "./screens/Perfil.jsx";
import DetalhesProjetos from "./screens/DetalhesProjetos.jsx";
import DetalhesVaga from "./screens/DetalhesVaga.jsx";

const Stack = createStackNavigator();

const stackNavigatorStyles = {
  headerStyle: {
    backgroundColor: "#1e293b",
  },
  headerTintColor: "#f8fafc",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitleAlign: "center",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Perfil"
        screenOptions={stackNavigatorStyles}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="DetalhesProjetos" component={DetalhesProjetos} />
        <Stack.Screen name="DetalhesVaga" component={DetalhesVaga} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
