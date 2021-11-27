import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Modal } from "react-native";

import HeaderBarang from "./HeaderBarang";
import FooterBarang from "./FooterBarang";

const Barang = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <View style={styles.container}>
          <HeaderBarang backModal={props.backModal} />
          <View style={styles.scrollView}>
            <ScrollView vertical>
              <View style={styles.content}>
                <Image
                  style={styles.image}
                  source={require("./img/dummy/skittle.jpg")}
                />
                <Text style={styles.textHarga}>Rp. 10.000</Text>
                <Text style={styles.textNama}>Skittle-Chan for sale</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 5,
                  borderBottomColor: "#C4C4C4",
                  paddingBottom: 10,
                }}
              >
                <View style={styles.detail}>
                  <Text style={{ fontWeight: "bold" }}>Detail Produk</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text>Kategori</Text>
                    <Text style={{ left: 40 }}>Aksesoris</Text>
                  </View>
                  <View>
                    <Text style={styles.deskripsi}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <FooterBarang />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    marginTop: -22,
  },
  content: {
    borderBottomWidth: 5,
    borderBottomColor: "#C4C4C4",
    paddingBottom: 30,
  },
  scrollView: {
    top: 80,
    height: 550,
  },
  image: {
    width: "100%",
    height: 360,
    borderRadius: 15,
  },
  textHarga: {
    backgroundColor: "white",
    left: 20,
    top: 15,
    height: 40,
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
  },
  textNama: {
    backgroundColor: "white",
    left: 20,
    top: 15,
    height: 40,
    fontFamily: "Roboto",
    fontSize: 18,
  },
  detail: {
    backgroundColor: "white",
    left: 20,
    top: 8,
    height: 100,
    fontFamily: "Roboto",
    fontSize: 18,
  },
  deskripsi: {
    paddingRight: 35,
  },
});

export default Barang;
