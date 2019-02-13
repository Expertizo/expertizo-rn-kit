import React from "react";
import { View, Text } from "react-native";
import { FacebookAuth, GoogleAuth } from "./SocialAuth";
import { EmailAuth } from "./emailAuth";
import { styles } from "../../screens/styles";

/**
|--------------------------------------------------
| Main Auth/Login/Signup Form component
|--------------------------------------------------
*/

export const AuthForm = props => {
  const { isSignup } = props;

  return (
    <View>
      <Text style={styles.formHeading}>
        {isSignup ? "Signup" : "Login"}
      </Text>
      <EmailAuth isSignup={isSignup} />
      <FacebookAuth />
      <GoogleAuth />
    </View>
  );
};
