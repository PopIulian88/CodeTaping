import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Game from "./Screens/Game";
import Shop from "./Screens/Shop";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {


  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={styles.navigator} tabBarOptions={styles.tabBar}>
          <Tab.Screen name={"Game"} component={Game} options={styles.gameOption}/>
          <Tab.Screen name={"Shop"} component={Shop} options={styles.shopOption}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  navigator: {
    headerShown: false,

  },

  tabBar: {
    activeTintColor: "white",
    inactiveTintColor: 'lightgray',
    activeBackgroundColor: "#F4D35E",
    inactiveBackgroundColor: '#EE964B',
  },

  gameOption: {
    tabBarIcon: () => (
        <FontAwesome name="gamepad" size={30} color="#0D3B66" />
    )
  },

  shopOption: {
    tabBarIcon: () => (
        <MaterialCommunityIcons name="store" size={30} color="#0D3B66" />
    )
  }
});
