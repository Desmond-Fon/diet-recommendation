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
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createProfile, getProfile } from "../api/user";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import DatePicker from "react-native-date-picker";

export default function App() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    phone_number: "",
    address: "",
    date_of_birth: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    blood_type: "",
    genotype: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log("Token:", token);
        const profileResponse = await getProfile(token);
        console.log(profileResponse);
        if(profileResponse.profile.age === null){
            return
        } else {
            navigation.navigate("home");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginPress = () => {
    navigation.navigate("login");
  };

  const showPassword = () => {};

  const handleRegisterPress = async () => {
    console.log(formData);
    // disable button

    // Validate form data
    if (
      formData.phone_number === "" ||
      formData.date_of_birth === "" ||
      formData.age === "" ||
      formData.address === "" ||
      formData.gender === "" ||
      formData.height === "" ||
      formData.weight === "" ||
      formData.blood_type === "" ||
      formData.genotype === "" 
    ) {
      alert("Please fill in all fields.");
      return;
    }
    // Send form data to API
    try{
        const token = await AsyncStorage.getItem("token");
        console.log("Token:", token);
        const profileResponse = await createProfile(token, formData.address, formData.phone_number, formData.date_of_birth, formData.age, formData.gender, formData.height, formData.weight, formData.blood_type, formData.genotype);
        console.log(profileResponse);
        if(profileResponse.status_code === 200){
            navigation.navigate("home");
        } else {
            return
        }
    } catch(e){ console.log(e)}
    // fetch(
    //   "https://tolusrec.pythonanywhere.com/api/auth/register/?format=json",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   }
    // )
    //   .then((response) => response.text())
    //   .then((data) => {
    //     // Handle response from API if needed
    //     console.log(data);
    //     // Redirect to login page
    //     navigation.navigate("login");
    //   })
    //   .catch((error) => {
    //     alert("An error occurred. Please try again later.", error);
    //     console.error("Error:", error);
    //   });
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
          <Text style={styles.title}>Update Profile</Text>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Entypo name="address" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("address", value)}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <AntDesign name="calendar" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("date_of_birth", value)}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Ionicons
                name="calendar-number-outline"
                size={22}
                color="green"
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("age", value)}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <FontAwesome name="address-book-o" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("phone_number", value)}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <FontAwesome name="transgender" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Gender"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("gender", value)}
              
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="human-male-height"
                size={22}
                color="green"
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Height (number)"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("height", value)}
              
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <FontAwesome6 name="weight-scale" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Weight (number)"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("weight", value)}
              
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <MaterialIcons name="bloodtype" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Blood Type"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("blood_type", value)}
              
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Fontisto name="blood" size={22} color="green" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Genotype"
              placeholderTextColor="black"
              selectionColor="green"
              onChangeText={(value) => handleInputChange("genotype", value)}
              
            ></TextInput>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleRegisterPress}
          >
            <Text style={styles.loginButtonText}>Update</Text>
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
