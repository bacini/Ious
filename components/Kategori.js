import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Kategori = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.kategori}>
          <Image
            style={styles.image}
            blurRadius={6}
            source={require("./img/dummy/pakaian.png")}
          />
          <View>
            <Text style={styles.text}>Pakaian</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.kategori}>
          <Image
            style={styles.image}
            blurRadius={6}
            source={require("./img/dummy/aksesoris.png")}
          />
          <View>
            <Text style={styles.text}>Aksesoris</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 15,
    paddingLeft: 22,
    paddingRight: 22,
    elevation: 100,
    backgroundColor: "#E5E5E5",
  },
  kategori: {
    marginBottom: 15,
    borderRadius: 8,
    elevation: 10,
    backgroundColor: "#E5E5E5",
    shadowColor: "#000",
    flexDirection: "row",
  },
  text: {
    color: "#444745",
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 19,
    width: 207,
    height: 0,
    borderBottomWidth: 90,
    borderLeftWidth: 45,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#F9F9F9",
    borderLeftColor: "transparent",
    marginLeft: -85,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  image: {
    width: 245,
    height: 90,
    borderRadius: 8,
  },
});

export default Kategori;
