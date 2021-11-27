import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "./Header";
import Kategori from "./Kategori";
import Rekomendasi from "./Rekomendasi";

const MainApp = () => {
  return (
    <View>
      <Header />
      <View style={styles.scrollView}>
        <ScrollView vertical>
          <Kategori />
          <Rekomendasi />
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
