import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { AuthForm } from "../../components/AuthForm";
import { styles } from "../styles";

/**
|--------------------------------------------------
| Signup Screen with KeyboardAvoidingView ⌨️
|--------------------------------------------------
*/

export class Signup extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <View style={styles.form}>
          <AuthForm isSignup />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
