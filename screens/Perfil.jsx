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
          if (route.name === "QualificacoesTab") {
            iconName = focused ? "certificate" : "certificate-outline";
          } else if (route.name === "ProjetosTab") {
            iconName = focused
              ? "projector-screen"
              : "projector-screen-outline";
          } else if (route.name === "CandidaturasTab") {
            iconName = focused ? "account-network" : "account-network-outline";
          } else if (route.name === "ArtigosTab") {
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
      <Tab.Screen name="ProjetosTab" component={Projetos} />
      <Tab.Screen name="QualificacoesTab" component={Qualificacoes} />
      <Tab.Screen name="CandidaturasTab" component={Candidaturas} />
      <Tab.Screen name="ArtigosTab" component={Artigos} />
    </Tab.Navigator>
  );
}
