import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const KeranjangIsi = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.textNama}>{props.nama}</Text>
      </View>
      <Text style={styles.textHarga}>Rp. {props.harga}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    borderBottomColor: "#C4C4C4",
    paddingBottom: 20,
    paddingTop: 40,
    paddingLeft: 40,
  },
  component: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
  },
  textNama: {
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 18,
  },
  textHarga: {
    paddingLeft: 100,
    marginTop: -20,
    paddingBottom: 20,
  },
});

export default KeranjangIsi;
