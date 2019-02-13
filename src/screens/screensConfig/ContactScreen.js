import React from "react";
import { createStackNavigator } from "react-navigation";
import { Contact } from "../Contact";
import { headerStyles } from "../../shared/headerStyles";

class ContactScreen extends React.Component {
  render() {
    return <Contact />;
  }
}

export const ContactStack = createStackNavigator(
  {
    ContactScreen: { screen: ContactScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Contact",
        title: "Contact",
        drawerLabel: "Contact",
        ...headerStyles(navigation)
      };
    }
  }
);
