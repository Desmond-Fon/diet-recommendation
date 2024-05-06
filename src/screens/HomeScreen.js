import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import CategoriesFilter from "../components/CategoryFilter";
import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";
import { getProfile } from "../api/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [profile, setProfile] = useState([]);
 
useEffect(() => {
  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("Token:", token);
      const profileResponse = await getProfile(token);
      console.log(profileResponse);
      setProfile(profileResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchData();
}, []);


  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 45 }}>
      <Header headerText={profile && "Hii" + " " + profile.user} headerIcon={"wechat"}></Header>
      <Search icon="search" Placeholder={"Enter your favourite meal"}></Search>

      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
      </View>
      <CategoriesFilter></CategoriesFilter>

      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        <RecipeCard></RecipeCard>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
