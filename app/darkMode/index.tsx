import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DarkModeScreen() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <View style={[styles.centeredView, isDark ? styles.darkScreen: styles.lightScreen]}>
      <TouchableOpacity onPress={toggleDarkMode} style={isDark ? styles.pillButtonDark : styles.pillButtonLight}>
        <Text style={isDark ? styles.pillButtonTextDark : styles.pillButtonTextLight}>Dark Mode {isDark ? 'OFF' : 'ON'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkScreen: {
    backgroundColor: 'black'
  },
  lightScreen: {
    backgroundColor: 'white'
  },
  pillButtonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  pillButtonDark: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  pillButtonLight: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  pillButtonTextDark: {
    color: "black",
    fontWeight: "bold",
  },
  pillButtonTextLight: {
    color: "white",
    fontWeight: "bold",
  },
});
