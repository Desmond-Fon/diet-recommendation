import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { chat, chat2, getProfile } from "../api/user";

const ChatbotScreen = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    // Initial message history (optional)
    { id: 1, isUser: false, text: "Welcome! How can I help you today?" },
  ]);
  const [nextId, setNextId] = useState(2); // Counter for assigning unique IDs to messages
  const [chatId, setChatId] = useState('');

const handleSendMessage = async () => {
  if (message.trim() !== "") {
    // Check for empty input
    const newMessage = { id: nextId, isUser: true, text: message };
    setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]); // Update chat history with user's message
    setMessage(""); // Clear input after sending
    setNextId(nextId + 1); // Increment message ID counter

    try {
      const token = await AsyncStorage.getItem("token");
      const response = await chat(token, chatId, message);
      console.log(response)
      const botResponse = {
        id: nextId + 1,
        isUser: false,
        text: response.message.content,
      };
      setChatId(response.chat_id)
      setChatHistory((prevChatHistory) => [...prevChatHistory, botResponse]); // Update chat history with chatbot's response
      setNextId(nextId + 2); // Increment message ID counter
    } catch (e) {
      console.log(e);
    }
  }
};

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={chatHistory}
        renderItem={({ item }) => (
          <View style={item.isUser ? styles.userMessage : styles.botMessage}>
            <Text
              style={{ fontSize: 18, color: item.isUser ? "white" : "gray" }}
            >
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "#f0f0f0",
            borderRadius: 5,
          }}
          onChangeText={setMessage}
          value={message}
          placeholder="Type your message..."
        />
        <View style={{ padding: 10 }}>
          <Text
            onPress={handleSendMessage}
            style={{ fontSize: 18, color: "blue" }}
          >
            Send
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userMessage: {
    backgroundColor: "blue",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  botMessage: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default ChatbotScreen;
