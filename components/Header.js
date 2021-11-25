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

const Header = (props) => {
  const [profileModal, setProfilModal] = useState(false);

  const profileHomeHandler = () => {
    setProfilModal(false);
  };
  console.log(profileModal);

  return (
    <View>
      <View style={styles.header}>
        <View>
          <TextInput
            style={styles.textInputSearch}
            placeholder="Search"
            placeholderTextColor="#C4C4C4"
          />
          <Image
            style={styles.searchImage}
            source={require("./img/search.png")}
          />
        </View>

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
    backgroundColor: "#CD5951",
    borderRadius: 35,
  },
  textInputSearch: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    width: "58%",
    left: 30,
    paddingLeft: 43,
  },
  searchImage: {
    position: "absolute",
    width: 22,
    height: 22,
    top: 3,
    left: 40,
    borderColor: "#C4C4C4",
  },
  buttonHeader: {
    borderColor: "black",
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
});

export default Header;
