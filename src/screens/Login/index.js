import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, Button } from "react-native";
import { withNavigation } from "react-navigation";
import { AuthForm } from "../../components/AuthForm";
import { styles } from "../styles";

/**
|--------------------------------------------------
| Login Screen with KeyboardAvoidingView ⌨️
|--------------------------------------------------
*/

class LoginWithNav extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <View style={styles.form}>
          <AuthForm />
          <Button
            title="Register"
            onPress={() => this.props.navigation.navigate("SignupScreen")}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export const Login = withNavigation(LoginWithNav);
