import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";

const Profile = (props) => {
  console.log(props);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <View style={styles.profileContainerAll}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.back} onPress={props.profileHome}>
              <Image source={require("./img/arrow-left.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logout} onPress={() => {}}>
              <Image source={require("./img/log-out.png")} />
            </TouchableOpacity>
          </View>

          <View style={styles.profileContainer}>
            <Image
              style={styles.profilePicture}
              source={require("./img/dummy/dummy-profile.png")}
            />
            <Text style={styles.nama}>Bagas Prasetya</Text>
            <TouchableOpacity style={styles.edit} onPress={() => {}}>
              <Image source={require("./img/edit.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.aktivitas}>
          <Text>Aktivitas Saya</Text>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onpress={() => {}}
            >
              <Image source={require("./img/list.png")} />
              <Text> Daftar Transaksi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onpress={() => {}}
            >
              <Image source={require("./img/heart.png")} />
              <Text> Wishlist</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onpress={() => {}}
            >
              <Image source={require("./img/star.png")} />
              <Text> Ulasan</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onpress={() => {}}
            >
              <Image source={require("./img/more-horizontal.png")} />
              <Text> Layana Lainya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  profileContainerAll: {
    borderBottomWidth: 2,
    borderColor: "#CD5951",
    paddingBottom: 150,
  },
  profileContainer: {
    position: "absolute",
  },
  back: {
    left: 10,
    top: 10,
  },
  logout: {
    left: 355,
    top: 10,
  },
  profilePicture: {
    width: 110,
    height: 110,
    left: 40,
    top: 55,
    borderRadius: 100,
  },
  nama: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    left: 165,
    bottom: 45,
  },
  edit: {
    left: 320,
    bottom: 68,
  },
  aktivitas: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    left: 20,
    top: 10,
  },
});

export default Profile;
