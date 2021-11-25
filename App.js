import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Login from "./components/Login";
import MainApp from "./components/MainApp";

export default function App() {
  return (
    <View>
      <MainApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
