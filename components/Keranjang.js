import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

import HeaderKeranjang from "./HeaderKeranjang";
import KeranjangIsi from "./KeranjangIsi";
import FooterKeranjang from "./FooterKeranjang";

const Keranjang = (props) => {
  const [dataKeranjang, setDataKeranjang] = useState([
    {
      id: 1,
      nama: "Skittle-chan For Sale",
      harga: 10000,
      image: require("./img/dummy/skittle.jpg"),
    },
    {
      id: 2,
      nama: "Beluga For Sale",
      harga: 20000,
      image: require("././img/dummy/beluga.jpg"),
    },
    {
      id: 3,
      nama: "Hecker For Sale",
      harga: 30000,
      image: require("././img/dummy/hecker.jpg"),
    },
    {
      id: 4,
      nama: "Me For Sale",
      harga: 40000,
      image: require("././img/dummy/dummy-profile.png"),
    },
    {
      id: 5,
      nama: "Skittle-chan For Sale",
      harga: 50000,
      image: require("././img/dummy/skittle.jpg"),
    },
    {
      id: 6,
      nama: "Beluga For Sale",
      harga: 20000,
      image: require("././img/dummy/beluga.jpg"),
    },
  ]);
  console.log(dataKeranjang);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <HeaderKeranjang keranjangHome={props.keranjangHome} />
        <FlatList
          style={styles.flatList}
          data={dataKeranjang}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <KeranjangIsi
              id={itemData.item.id}
              nama={itemData.item.nama}
              harga={itemData.item.harga}
              image={itemData.item.image}
            />
          )}
        />
        <FooterKeranjang />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
  },
  flatList: {
    top: 80,
    marginBottom: 150,
  },
});

export default Keranjang;
