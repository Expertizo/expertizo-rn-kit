import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

export class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fonts}> ℹ️ About </Text>
      </View>
    );
  }
}
