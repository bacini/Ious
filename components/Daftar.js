import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

const Daftar = (props) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [password, setPassword] = useState("");

  const [modeLogin, setModeLogin] = useState(false);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <View style={styles.daftar}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Nama Lengkap"
              onChangeText={(text) => setNama(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Nomor HP"
              onChangeText={(text) => setNoHp(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button}>
                <Text style={{ color: "white" }}>Daftar</Text>
              </View>
            </TouchableOpacity>
            <Text>
              Sudah Punya Akun?{" "}
              <Text style={styles.login} onPress={props.onLogin}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  daftar: {
    width: "100%",
    alignItems: "center",
    top: 100,
    backgroundColor: "#FFFFFF",
  },
  button: {
    width: 160,
    height: 45,
    backgroundColor: "#CD5951",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  textInput: {
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    marginLeft: -80,
    marginRight: -80,
    marginBottom: 40,
    padding: 7,
    textAlign: "center",
    justifyContent: "space-between",
  },
  login: {
    color: "#CD5951",
    textDecorationLine: "underline",
  },
});

export default Daftar;
