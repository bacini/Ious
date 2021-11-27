import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FooterBarang = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderLocation}>
        <TouchableOpacity style={styles.orderButton} onPress={() => {}}>
          <Text>Order</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.keranjangLocation}>
        <TouchableOpacity style={styles.keranjangButton} onPress={() => {}}>
          <Text style={{ color: "#FFFFFF" }}>+Keranjang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 75,
    paddingBottom: 40,
    borderTopWidth: 5,
    borderTopColor: "#C4C4C4",
  },
  orderLocation: {
    paddingLeft: 40,
    paddingTop: 12,
  },
  orderButton: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
  },
  keranjangLocation: {
    paddingLeft: 50,
    paddingTop: 12,
    shadowColor: "#000",
  },
  keranjangButton: {
    backgroundColor: "#CD5951",
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 35,
    paddingRight: 35,
  },
});

export default FooterBarang;
