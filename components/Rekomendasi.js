import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Barang from "./Barang";

const Rekomendasi = () => {
  const [barangModal, setBarangModal] = useState(false);

  const barangModalHandler = () => {
    setBarangModal(true);
  };
  const barangModalHandlerFalse = () => {
    setBarangModal(false);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => barangModalHandler()}>
          <View style={styles.element}>
            <Image
              style={styles.image}
              source={require("./img/dummy/dummy-shirt.jpg")}
            />
            <Text style={styles.textNama}>T-Shirt</Text>
            <Text style={styles.textHarga}>Rp. 10.000</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.element}>
            <Image
              style={styles.image}
              source={require("./img/dummy/dummy-profile.png")}
            />
            <Text style={styles.textNama}>T-Shirt</Text>
            <Text style={styles.textHarga}>Rp. 10.000</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.element}>
            <Image
              style={styles.image}
              source={require("./img/dummy/skittle.jpg")}
            />
            <Text style={styles.textNama}>T-Shirt</Text>
            <Text style={styles.textHarga}>Rp. 10.000</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.element}>
            <Image
              style={styles.image}
              source={require("./img/dummy/pakaian.png")}
            />
            <Text style={styles.textNama}>T-Shirt</Text>
            <Text style={styles.textHarga}>Rp. 10.000</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Barang visible={barangModal} backModal={() => setBarangModal(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 15,
    paddingLeft: 21,
    flexDirection: "row",
    backgroundColor: "white",
  },
  element: {
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "#000",
    backgroundColor: "#E5E5E5",
  },
  image: {
    width: 173,
    height: 140,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  textNama: {
    backgroundColor: "#F9F9F9",
    paddingLeft: 15,
    paddingTop: 15,
    textAlignVertical: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  textHarga: {
    backgroundColor: "#F9F9F9",
    paddingBottom: 50,
    paddingLeft: 15,
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    bottom: 1,
  },
});

export default Rekomendasi;
