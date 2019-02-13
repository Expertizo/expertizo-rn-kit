import React from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const headerStyles = navigation => ({
  headerStyle: {
    backgroundColor: "#c31432",
    color: "rgb(255, 255, 255)"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  },
  headerLeft: (
    <TouchableNativeFeedback onPress={() => navigation.toggleDrawer()}>
      <View style={{ paddingLeft: 16 }}>
        <Ionicons name="md-menu" size={30} color="white" />
      </View>
    </TouchableNativeFeedback>
  )
});
