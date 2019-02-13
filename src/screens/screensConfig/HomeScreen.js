import React from "react";
import { createStackNavigator } from "react-navigation";
import { Home } from "../Home";
import { headerStyles } from "../../shared/headerStyles";

class HomeScreen extends React.Component {
  render() {
    return <Home />;
  }
}

export const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        title: "Home",
        drawerLabel: "Home",
        ...headerStyles(navigation)
      };
    }
  }
);
