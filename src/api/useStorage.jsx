import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log("Data stored successfully");
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

export const getData = async (key) => {
  try {
    const retrievedValue = await AsyncStorage.getItem(key);
    if (retrievedValue !== null) {
      return retrievedValue;
    } else {
      console.log(`No data with the key "${key}"`);
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error; // Re-throw the error to handle it outside
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Data removed successfully");
  } catch (error) {
    console.error("Error removing data:", error);
  }
};
