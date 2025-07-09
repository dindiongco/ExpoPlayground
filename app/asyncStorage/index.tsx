import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function AsyncStorageScreen() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState("");

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("my-key", value);
    } catch (e) {
      // saving error
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        // value previously stored
        setSavedText(value)
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{savedText}</Text>
      <TouchableOpacity onPress={() => getData()} style={styles.button}>
          <Text style={styles.buttonText}>Retrieve</Text>
        </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setText} />
        <TouchableOpacity onPress={() => storeData(text)} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  inputContainer: {},
  input: {
    width: "90%",
    height: 40,
    marginTop: 20,
    borderColor: "#2196F3",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
