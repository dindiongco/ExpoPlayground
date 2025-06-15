import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import ThemedTextInput from '../components/forms/ThemedTextInput';


export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');


    const router = useRouter();

    // const onPress = () => {
    //     console.log("New user registered: ", email, password)
    // }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* background 1 */}
      </View>
      <View style={styles.bottomContainer}>
        <ThemedTextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <ThemedTextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <ThemedTextInput
          style={styles.input}
          placeholder="Last Name"
          value={surname}
          onChangeText={setSurname}
        />

        <ThemedTextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title='Signup' onPress={() => router.navigate({
            pathname: '/signupForm/profile',
            params: {
                firstName,
                surname,
                email
            }})}/>
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
    width: '80%',
    borderColor: '#2196F3',
    borderWidth: 1, 
    borderStyle: 'solid', 
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