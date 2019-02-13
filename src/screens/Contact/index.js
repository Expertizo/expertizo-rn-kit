import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

export class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fonts}> ☎️ Contact </Text>
      </View>
    );
  }
}
