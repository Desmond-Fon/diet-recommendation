import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View, Image, SafeAreaView, Pressable, ScrollView } from "react-native";

const RecipiesDetailScreen = ({ navigation, route }) => {
    const { item } = route.params;

    console.log( item)
    return (
        <View style= {{ backgroundColor: item.color, flex: 1}}>
            {/* <SafeAreaView style= {{flexDirection: "row", marginHorizontal: 16}}>
                <Pressable style= {{flex: 1}} onPress={() => navigation.goBack()}>
                    <FontAwesome name={"arrow-circle-left"} size={28} color= "white" style= {{flex: 1}}></FontAwesome>
                </Pressable>

                <FontAwesome name={"heart-o"} size={28} color= "white"></FontAwesome>
            </SafeAreaView> */}

            <View style = {{backgroundColor: "#c5b8af", flex: 1, marginTop: 210, borderTopLeftRadius: 57, borderTopRightRadius: 57, alignItems: "center", paddingHorizontal: 16}}>
                <View style = {{height: 300, width: 300, position: "absolute", top: -150}}>
                    <Image source={item.image} style = {{width: "100%",height: "100%", resizeMode: "contain"}}></Image>
                </View>

                <Text style= {{ marginTop: 160, fontSize: 28, fontWeight: "bold"}}>
                    {item.name}
                </Text>

                <View style= {{ flex: 1}}>
                    <ScrollView showsVerticalScrollIndicator = {false}>
                        <Text style= {{fontSize: 20, marginVertical: 16}}>
                            {item.description}
                        </Text>

                        <View style= {{ flexDirection: "row", justifyContent: "space-between"}}>
                            <View style= {{ backgroundColor: "rgba(135, 206, 235, 0.8)",width: 100, alignItems: "center", paddingVertical: 26, borderRadius: 8}}>
                                <Text style={{ fontSize: 40}}>⏰</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400}}>{item.time}</Text>
                            </View>
                            <View style= {{ backgroundColor: "rgba(255, 165, 0, 0.48)", width: 100,alignItems: "center",  paddingVertical: 26, borderRadius: 8}}>
                                <Text style={{ fontSize: 40}}>🥣</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400}}>{item.difficulty}</Text>
                            </View>
                            <View style= {{ backgroundColor: "yellowgreen", alignItems: "center", width: 100, paddingVertical: 26, borderRadius: 8}}>
                                <Text style={{ fontSize: 40}}>🔥</Text>
                                <Text style={{ fontSize: 20, fontWeight: 400}}>{item.calories}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: "flex-start", marginVertical: 22}}>
                            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6}}>Ingredients:</Text>

                            {item.ingredients.map((ingredient) => {
                                return (
                                    <View style= {{flexDirection: "row", alignItems: "center", marginVertical: 4}} key={ingredient}>
                                        <View style= {{backgroundColor: "red", height: 10, width: 10, borderRadius: 5}}></View>
                                        <Text style= {{ fontSize: 18, marginLeft: 6}}>{ingredient}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View style={{ alignSelf: "flex-start", marginVertical: 22}}>
                            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6}}>Steps:</Text>

                            {item.steps.map((step, index) => {
                                return (
                                    <Text key={index} style= {{marginVertical: 6, fontSize: 18, marginLeft: 6}}>{`${index + 1} ) ${step}`}</Text>
                                );
                            })}
                        </View>
                    </ScrollView>  
                </View>              
            </View>
        </View>
    );
}; 

export default RecipiesDetailScreen ;