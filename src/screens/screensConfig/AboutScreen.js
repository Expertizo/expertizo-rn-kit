import React from "react";
import { createStackNavigator } from "react-navigation";
import { About } from "../About";
import { headerStyles } from "../../shared/headerStyles";

class AboutScreen extends React.Component {
  render() {
    return <About />;
  }
}

export const AboutStack = createStackNavigator(
  {
    AboutScreen: { screen: AboutScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "About",
        title: "About",
        drawerLabel: "About",
        ...headerStyles(navigation)
      };
    }
  }
);
