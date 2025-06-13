import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function ProfileScreen() {
    const [text, setText] = useState('');
    const [res, setRes] = useState('') 

    const onPress = () => {
        setRes(text)
    }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* background 1 */}
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <Button title='Save' onPress={onPress}/>
        <Text style={styles.inputText}>
            {res}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  text: {
    color: '#25292e',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#25292e',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});