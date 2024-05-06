import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { passwordReset, passwordResetConfirm } from "../api/auth";

export default function App() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);

  const [new_password1, setNew_password1] = useState("");
  const [new_password2, setNew_password2] = useState("");
  const [token, setToken] = useState("");
  const [uid, setUid] = useState("");

  const handleLoginPress = async (e) => {
    if (
      new_password1 === "" ||
      new_password2 === "" ||
      token === "" ||
      uid === ""
    ) {
      alert("Please enter all fields");
      return;
    } else if (new_password1 !== new_password2) {
      alert("Passwords do not match");
      return;
    } else {
      const res = await passwordResetConfirm(
        new_password1,
        new_password2,
        token,
        uid
      );
      if (res.error) {
        setErr(true);
        return;
      }
      console.log(res);
      // setShow(false);
      navigation.navigate("login");
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your email address");
      return;
    } else {
      const res = await passwordReset(email);
      if (res.error) {
        setErr(true);
        return;
      }
      console.log(res);
      setShow(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {show && (
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Send OTP</Text>
            <View style={styles.inputContainer}>
              <View style={styles.icon}>
                <Feather name="mail" size={22} color="green"></Feather>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="black"
                selectionColor="green"
                value={email}
                onChangeText={setEmail}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text
                style={styles.loginButtonText}
                onPress={handlePasswordReset}
              >
                Send OTP
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {show && (
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Reset Password</Text>
            <View style={styles.inputContainer}>
              <View style={styles.icon}>
                <Feather name="lock" size={22} color="green"></Feather>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
                selectionColor="green"
                value={new_password1}
                onChangeText={setNew_password1}
              ></TextInput>
              <TouchableOpacity style={styles.passwordVisibleButton}>
                <Feather name="eye-off" size={20} color="green" />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.icon}>
                <Feather name="lock" size={22} color="green"></Feather>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                placeholderTextColor="black"
                selectionColor="green"
                value={new_password2}
                onChangeText={setNew_password2}
              ></TextInput>
              <TouchableOpacity style={styles.passwordVisibleButton}>
                <Feather name="eye-off" size={20} color="green" />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.icon}>
                <Feather name="mail" size={22} color="green"></Feather>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter Token sent to Email"
                placeholderTextColor="black"
                selectionColor="green"
                value={token}
                onChangeText={setToken}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.icon}>
                <Feather name="mail" size={22} color="green"></Feather>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter uid sent to Email"
                placeholderTextColor="black"
                selectionColor="green"
                value={uid}
                onChangeText={setUid}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText} onPress={handleLoginPress}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(204, 255, 204, 0.6)",
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "black",
    fontSize: 16,
  },
  passwordVisibleButton: {
    position: "absolute",
    right: 0,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordButtonText: {
    color: "#3662AA",
    fontSize: 16,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "green",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: "#eee",
    flex: 1,
  },
  orText: {
    color: "#7C808D",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: "#F2F6F2",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  googleButtonText: {
    color: "#4E5867",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  googleLogo: {
    width: 20.03,
    height: 20.44,
    position: "absolute",
    left: 14,
  },
  registerButton: {
    alignSelf: "center",
    marginTop: 40,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#7C808D",
  },
  registerButtonTextHighlight: {
    fontSize: 16,
    color: "#3662AA",
    fontWeight: "500",
  },
});
