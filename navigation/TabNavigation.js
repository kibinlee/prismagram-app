import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const TabNavigation = createBottomTabNavigator({
  Home,
  Search,
  Add: {
    screen: View,
    navigationOptions: {
      // tabBarOnPress: () => {
      //   console.log("Add");
      // }
      tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation")
    }
  },
  Notifications,
  Profile
});

export default TabNavigation;
