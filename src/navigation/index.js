import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import {
  AuthLoadingScreen,
  LoginScreen,
  SignupScreen
} from "../screens/screensConfig";

import { AppDrawerNavigator } from "./drawer.navigator";

/**
 |--------------------------------------------------
 | Main React-Navigation Hub 🏡
|--------------------------------------------------
*/

// const AppStack = createStackNavigator(
//   {
//     AppDrawerNavigator
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerLeft: (
//           <View style={{ paddingLeft: 16 }}>
//             <Ionicons
//               name="md-menu"
//               size={30}
//               color="black"
//               onPress={() => navigation.toggleDrawer()}
//             />
//           </View>
//         )
//       };
//     }
//   }
// );

const AuthStack = createStackNavigator(
  { LoginScreen, SignupScreen },
  { headerMode: "none" }
);

const AppNavigatorContainer = createSwitchNavigator(
  {
    App: AppDrawerNavigator,
    Auth: AuthStack,
    AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoadingScreen"
  }
);

export const AppNavigator = createAppContainer(AppNavigatorContainer);
