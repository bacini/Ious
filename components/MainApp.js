import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "./Header";
import Kategori from "./Kategori";

const MainApp = () => {
  return (
    <View>
      <Header />
      <View style={styles.scrollView}>
        <ScrollView horizontal>
          <Kategori />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    top: 80,
    height: 604,
  },
});

export default MainApp;
