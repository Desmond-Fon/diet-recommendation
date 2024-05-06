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
import React, { useState} from "react";
import { useNavigation } from "@react-navigation/native";


export default function App() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

const handleInputChange = (name, value) => {
  // For password fields, update them separately
  if (name === "password1" || name === "password2") {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  } else {
    // For other fields, update normally
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
};

    const handleLoginPress = () => {
        navigation.navigate("login");
    };

    const showPassword = () => {
      
    };

    const handleRegisterPress = () => {
      console.log(formData);  
        // disable button


        // Validate form data
        if (formData.username === "" || formData.email === "" || formData.password1 === "" || formData.password2 === "") {
            alert("Please fill in all fields.");
            return;
        } else if(formData.password1 !== formData.password2 ){
          alert("Passwords do not match");
          return
        } else if(formData.password1.length < 8){
        alert("Please password should be greater than 7 characters, use a strong password instead")} else{
          fetch(
            "https://tolusrec.pythonanywhere.com/api/auth/register/?format=json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          )
            .then((response) => response.text())
            .then((data) => {
              // Handle response from API if needed
              console.log(data);
              // Redirect to login page
              navigation.navigate("login");
            })
            .catch((error) => {
              alert("An error occurred. Please try again later.", error);
              console.error("Error:", error);
            });
        }
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
                            <Feather name="user" size={22} color="green"></Feather>
                        </View>
                        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="black" selectionColor="green"
                        onChangeText={value =>
                            handleInputChange("username", value)
                        }
                        ></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                      <View style={styles.icon}>
                        <Feather name="mail" size={22} color="green"></Feather>
                      </View>
                      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="black" selectionColor="green" 
                      onChangeText={value => handleInputChange("email", value)}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="lock" size={22} color="green"></Feather>
                        </View>
                        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" selectionColor="green"
                        onChangeText={value =>
                            handleInputChange("password1", value)
                        }
                        secureTextEntry={true}
                        
                        ></TextInput>
                        <TouchableOpacity style={styles.passwordVisibleButton} onPress={showPassword}>
                        <Feather name="eye-off" size={20} color="green"  />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="lock" size={22} color="green"></Feather>
                        </View>
                        <TextInput style={styles.input} placeholder="Re-enter Password" placeholderTextColor="black" selectionColor="green" 
                        onChangeText={value =>
                            handleInputChange("password2", value) 
                        }
                        secureTextEntry={true}
                        ></TextInput>
                        <TouchableOpacity style={styles.passwordVisibleButton} onPress={showPassword}>
                        <Feather name="eye-off" size={20} color="green"  />
                        </TouchableOpacity> 
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleRegisterPress}>
                        <Text style={styles.loginButtonText}>Signin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.registerButtonText}> Already have an account ?{" "}
                        <Text style={styles.registerButtonTextHighlight} onPress={handleLoginPress}>
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
