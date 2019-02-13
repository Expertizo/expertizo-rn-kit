import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "../../screens/styles";

/**
|--------------------------------------------------
| Loadin 🔄 Component
|--------------------------------------------------
*/

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#e93766" size="large" />
    </View>
  );
};
