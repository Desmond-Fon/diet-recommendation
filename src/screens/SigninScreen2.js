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
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function App() {
    const navigation = useNavigation();
    const handleRegisterPress = () => {
      navigation.navigate("login");
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Signin</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="mail" size={22} color="green"></Feather>
                        </View>
                        <TextInput style={styles.input} placeholder="Firstname" placeholderTextColor="black" selectionColor="green"></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="mail" size={22} color="green"></Feather>
                        </View>
                        <TextInput style={styles.input} placeholder="Lastname" placeholderTextColor="black" selectionColor="green"></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="lock" size={22} color="green"></Feather>
                        </View>
                        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" selectionColor="green"></TextInput>
                        <TouchableOpacity style={styles.passwordVisibleButton}>
                        <Feather name="eye-off" size={20} color="green"  />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="lock" size={22} color="green"></Feather>
                        </View>
                        <TextInput style={styles.input} placeholder="Re-enter Password" placeholderTextColor="black" selectionColor="green"></TextInput>
                        <TouchableOpacity style={styles.passwordVisibleButton}>
                        <Feather name="eye-off" size={20} color="green"  />
                        </TouchableOpacity> 
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleRegisterPress}>
                        <Text style={styles.loginButtonText}>Signin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.registerButtonText}> Already have an account ?{" "}
                        <Text style={styles.registerButtonTextHighlight} onPress={handleRegisterPress}>
                            Login
                        </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
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
