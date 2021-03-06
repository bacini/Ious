import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";

import Login from "./components/Login";
import MainApp from "./components/MainApp";

export default function App() {
  return (
    <View>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});
