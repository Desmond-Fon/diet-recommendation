import { forwardRef } from "react";
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
import { login } from "../api/auth";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login', username, password)
    if (username === "" || password === "") {
      alert('Please enter a username and password')
      // setErr(true);
      return;
    } 
    else {
      const res = await login( username, password );
      if (!res) {
        alert('An error occurred')
        setErr(true);
        return;
      }
      console.log(res);
      navigation.navigate("profile");
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate("signin");
  };

  const handlePasswordPress = () => {
    navigation.navigate("forgotpassword");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}

      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="username"
              placeholderTextColor="black"
              selectionColor="green"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="black"
              selectionColor="green"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity>
              <Feather name="eye-off" size={20} color="green" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text
              style={styles.forgotPasswordButtonText}
              onPress={handlePasswordPress}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
          {/* {(err && username.length === 0 || password.length === 0) && (
            <Text style={styles.error}>
              Please enter your details
            </Text>
          )} */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleRegisterPress}
          >
            <Image
              style={styles.googleLogo}
              source={require("../../assets/images/google-logo.png")}
            />
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegisterPress}
          >
            <Text style={styles.registerButtonText}>
              Not have an account yet?{" "}
              <Text style={styles.registerButtonTextHighlight}>
                Register now!
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  error: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20
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
