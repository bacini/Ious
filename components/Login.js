import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import Daftar from "./Daftar";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modeDaftar, setModeDaftar] = useState(false);

  const loginHandler = () => {
    setModeDaftar(false);
  };
  // CEKCEKCEk

  return (
    <View>
      <Image style={styles.logo} source={require("./img/logo.png")} />
      <View style={styles.login}>
        <View style={styles.list}>
          <TextInput
            style={styles.textInput}
            placeholder="Username / Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.button}>
              <Text style={{ color: "white" }}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text>
          Belum punya akun?{" "}
          <Text onPress={() => setModeDaftar(true)} style={styles.daftar}>
            Daftar
          </Text>
        </Text>
      </View>
      <Daftar visible={modeDaftar} onLogin={loginHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    top: 300,
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto",
  },
  logo: {
    width: "60%",
    height: 200,
    alignSelf: "center",
    top: 65,
  },
  list: {
    flex: 1,
    justifyContent: "space-between",
  },
  textInput: {
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    marginLeft: -80,
    marginRight: -80,
    padding: 7,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    width: 160,
    height: 45,
    backgroundColor: "#CD5951",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  daftar: {
    color: "#CD5951",
    textDecorationLine: "underline",
  },
});

export default Login;
