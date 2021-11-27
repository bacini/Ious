import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import Profile from "./Profile";

const HeaderBarang = (props) => {
  const [profileModal, setProfilModal] = useState(false);

  const profileHomeHandler = () => {
    setProfilModal(false);
  };

  const barangHomeHandlerFalse = () => {
    setBarangModal(false);
  };

  return (
    <View>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={props.backModal}>
            <Image
              style={styles.backButton}
              source={require("./img/arrow-left-white.png")}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.textInputSearch}
            placeholder="Search"
            placeholderTextColor="#858585"
          />
          <Image
            style={styles.searchImage}
            source={require("./img/search.png")}
          />
        </View>
        <View style={styles.buttonHeader}>
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => Alert.alert("notifikasi clicked")}
          >
            <Image source={require("./img/bell.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.keranjangButton}
            onPress={() => Alert.alert("keranjang clicked")}
          >
            <Image source={require("./img/shopping-cart.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => setProfilModal(true)}
            onProfile={profileModal}
          >
            <Image source={require("./img/user.png")} />
          </TouchableOpacity>
        </View>

        <Profile visible={profileModal} profileHome={profileHomeHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: -40,
    width: "100%",
    height: 120,
    paddingTop: 73,
    backgroundColor: "#858585",
    borderRadius: 8,
  },
  textInputSearch: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    width: "58%",
    left: 40,
    paddingLeft: 43,
  },
  searchImage: {
    position: "absolute",
    width: 22,
    height: 22,
    top: 3,
    left: 50,
    borderColor: "#858585",
  },
  buttonHeader: {
    marginTop: -25,
  },
  notificationButton: {
    top: 3,
    left: 290,
  },
  keranjangButton: {
    top: -21,
    left: 330,
  },
  profileButton: {
    top: -46,
    left: 370,
  },
  backButton: {
    top: 3,
    left: 7,
  },
});

export default HeaderBarang;
