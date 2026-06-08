import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Qualificacoes from "./Qualificacoes.jsx";
import Projetos from "./Projetos.jsx";
import Candidaturas from "./Candidaturas.jsx";
import Artigos from "./Artigos.jsx";

const Tab = createBottomTabNavigator();

export default function Perfil() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderColor: "#334155",
          borderTopWidth: 4,
          paddingTop: 5,
          height: "10%",
          alignItems: "center",
        },
        tabBarActiveTintColor: "#3b82f6",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Qualificacoes") {
            iconName = focused ? "certificate" : "certificate-outline";
          } else if (route.name === "Projetos") {
            iconName = focused
              ? "projector-screen"
              : "projector-screen-outline";
          } else if (route.name === "Candidaturas") {
            iconName = focused ? "account-network" : "account-network-outline";
          } else if (route.name === "Artigos") {
            iconName = focused ? "card-text" : "card-text-outline";
          } else if (route.name === "Configuracoes") {
            iconName = focused
              ? "account-settings"
              : "account-settings-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Qualificacoes" component={Qualificacoes} />
      <Tab.Screen name="Projetos" component={Projetos} />
      <Tab.Screen name="Candidaturas" component={Candidaturas} />
      <Tab.Screen name="Artigos" component={Artigos} />
    </Tab.Navigator>
  );
}
