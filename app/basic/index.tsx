import { Text, View, StyleSheet, Button } from 'react-native';

import {Image} from 'expo-image';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function BasicScreen() {
    return (
        <View style={styles.container}>
            <Image source={PlaceholderImage} style={styles.image} />
            
            <Text>Image here</Text>
            <Button title='Button'/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
    imageContainer: {
    flex: 2,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})