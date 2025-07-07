import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const PokemonAPISearchScreen = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const getAbilityFromId = async (abilityId: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/ability/${abilityId}/`
      );
      const json = await response.json();
      
      return setName(json.name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
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
};

export default PokemonAPISearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'    
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
});
