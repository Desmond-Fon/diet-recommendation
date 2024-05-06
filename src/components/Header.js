import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerText, headerIcon }) => {
    const navigation = useNavigation();

  const handleClick = () => {
          navigation.navigate("chatbot");
  }
  return (
    <View style={{ flexDirection: "row"}}>
      <Text style={{flex: 1, fontSize: 25, fontWeight: "700"}}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color="green" onPress={handleClick}></FontAwesome>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});