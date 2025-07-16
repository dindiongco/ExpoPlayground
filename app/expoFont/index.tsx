import { Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter";
import { ManufacturingConsent_400Regular } from "@expo-google-fonts/manufacturing-consent/400Regular";
import { useFonts } from "@expo-google-fonts/manufacturing-consent/useFonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FontScreen() {
  let [fontsLoaded] = useFonts({
    ManufacturingConsent_400Regular,
    Inter_900Black,
    Inter_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  return (
    <View style={styles.centeredView}>
      <Text
        style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_700Bold",
        }}
      >
        Inter Black
      </Text>
      <Text
        style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_900Black",
        }}
      >
        Inter Black
      </Text>
      <Text
        style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ManufacturingConsent_400Regular",
        }}
      >
        Manufacturing Consent Regular
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
