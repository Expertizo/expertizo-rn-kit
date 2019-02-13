import { createDrawerNavigator } from "react-navigation";
import { AboutStack, HomeStack, ContactStack } from "../screens/screensConfig";

/**
|--------------------------------------------------
| DrawerNavigator Implementation
|--------------------------------------------------
*/

export const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeStack },
  About: { screen: AboutStack },
  Contact: { screen: ContactStack }
});
