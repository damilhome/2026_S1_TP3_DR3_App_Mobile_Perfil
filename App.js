import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home.jsx";
import Perfil from "./screens/Perfil.jsx";
import Detalhes from "./screens/DetalhesProjetos.jsx";

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
        initialRouteName="PerfilTabs"
        screenOptions={stackNavigatorStyles}
      >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="PerfilTabs" component={Perfil} />
        <Stack.Screen name="DetalhesScreen" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
