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

const HeaderKeranjang = (props) => {
  const [profileModal, setProfilModal] = useState(false);

  const profileHomeHandler = () => {
    setProfilModal(false);
  };

  return (
    <View>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={props.keranjangHome}>
            <Image
              style={styles.backButton}
              source={require("./img/arrow-left.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: -23,
              marginLeft: 48,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Keranjang
          </Text>
        </View>
        <View style={styles.buttonHeader}>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => setProfilModal(true)}
            onProfile={profileModal}
          >
            <Image source={require("./img/user-black.png")} />
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
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 5,
    borderBottomColor: "#C4C4C4",
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

  profileButton: {
    top: 3,
    left: 370,
  },
  backButton: {
    top: 3,
    left: 10,
  },
});

export default HeaderKeranjang;
