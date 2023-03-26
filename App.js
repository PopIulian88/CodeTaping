import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Game from "./Screens/Game";
import Shop from "./Screens/Shop";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={styles.navigator} tabBarOptions={styles.tabBar}>
          <Tab.Screen name={"Game"} component={Game} options={styles.tabGame}/>
          <Tab.Screen name={"Shop"} component={Shop} options={styles.tabShop}/>
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
    activeBackgroundColor: "#8B4513",
    inactiveBackgroundColor: '#b55031',
  },

  tabGame: {

  },

  tabShop: {

  }
});
