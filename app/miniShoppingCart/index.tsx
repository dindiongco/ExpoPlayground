import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import ThemedTextInput from '../components/forms/ThemedTextInput';

type Item = {
    id: string,
    name: string
}

export default function MiniShoppingCartScreen() {
    // State for maintaining the items
    const [item, setItem] = useState<string>('');
    const [items, setItems] = useState<Item[]>([]);

    // Function to add the Item
    function handleAddItem() {
        if (item.trim() === "") return;

        setItems([...items, {id: uuidv4(), name: item}])
        setItem('')
    }

    // Function to delete the item
    function handleDeleteItem(id: string) {
        setItems(items.filter(item => item.id !== id))
    }

  return (
    <View style={styles.container}>
        {/* FlatList of Items */}
        <FlatList 
            data={items} 
            keyExtractor={item => item.id}
            renderItem={({item}) => 
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>{item.name}</Text>
                    <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                        <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            }            
        />
        {/* Input to add new Items */}
        <ThemedTextInput
          style={styles.input}
          placeholder="Item"
          value={item}
          onChangeText={setItem}
        />
        <Button title="Add Item" onPress={handleAddItem} />
        {/* Button to delete an Item */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    input: {
        height: 40,
        margin: 12,
        width: '80%',
        borderColor: '#2196F3',
        borderWidth: 1, 
        borderStyle: 'solid', 
    },
    removeText: {
        color: 'red',
        fontSize: 14,
        padding: 10,
        height: 44,
    },
    
})