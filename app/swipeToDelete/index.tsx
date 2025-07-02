import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import ThemedTextInput from '../components/forms/ThemedTextInput';

import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

type Item = {
    id: string,
    name: string
}

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {

    return {
      transform: [{ translateX: drag.value + 50 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <Text style={styles.rightAction}>Delete</Text>
    </Reanimated.View>
  );
}


export default function SwipeScreen() {
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

                    <ReanimatedSwipeable
                        containerStyle={styles.itemContainer}
                        friction={2}
                        enableTrackpadTwoFingerGesture
                        rightThreshold={40}
                        renderRightActions={RightAction}
                        onSwipeableOpen={() => handleDeleteItem(item.id)}
                        >
                        <Text>{item.name}</Text>
                    </ReanimatedSwipeable>
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
        justifyContent: 'center'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 14,
    },
    item: {
        fontSize: 18,
        height: 40,
        margin: 12,
    },
    input: {
        height: 40,
        margin: 12,
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
    // Swipe Gesture styles
    rightAction: { 
        width: 50, 
        height: 50, 
        backgroundColor: 'red',
        color: 'white',
    },
    separator: {
        width: '100%',
        borderTopWidth: 1,
    },
    swipeable: {
        height: 50,
        alignItems: 'center',
    },
})