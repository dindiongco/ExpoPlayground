import React, { useRef, useState } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoadingSpinnerScreen() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const getAbilityFromId = async (abilityId: string) => {
    // Reset and start spinner animation
    rotateAnim.stopAnimation(() => {
      rotateAnim.setValue(0);
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ).start();
    });

    setLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/ability/${abilityId}/`
      );
      const json = await response.json();
      setName(json.name);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <Animated.View
          style={[styles.spinner, { transform: [{ rotate: spin }] }]}
        />
      ) : (
        <Text>{name}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter a Pokemon Abitity ID to Search"
        placeholderTextColor="gray"
        value={id}
        onChangeText={setId}
      />
      <TouchableOpacity
        onPress={() => getAbilityFromId(id)}
        style={styles.pillButton}
      >
        <Text style={styles.pillButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
  pillButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  pillButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  spinner: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: "#ccc",
    borderTopColor: "#3498db",
    borderRadius: 25,
  },
});
