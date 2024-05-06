import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/background_5.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Image source={require("../../assets/images/logo_1.png")} />

        <Text style={[styles.text, { color: "green" }]}>
          Eat Healthy, Live Healthy
        </Text>

        <Text style={styles.description}>
          Unlock a healthier you with personalized diet recommendations tailored just for you
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("login")} style={styles.button}>
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>
          Don't you have an account? <Text style={styles.signInLink} onPress={() => navigation.navigate("signin")}>Sign in</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(204, 255, 204, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
    textAlign: "center",
    marginTop: 44,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 18,
    paddingVertical: 18,
    width: "88%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
  },
  signInText: {
    marginTop: 20,
    color: "black",
    fontSize: 16,
  },
  signInLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "blue"
  },
});

export default WelcomeScreen;
