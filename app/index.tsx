 import { Link } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Link href="/basic" style={styles.button} >
        Basic screen (Day 1)
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen (Day 2)
      </Link>
      <Link href="/flexbox" style={styles.button} >
        Flexbox (Day 3)
      </Link>
      <Link href="/counter" style={styles.button} >
        Counter (Day 4)
      </Link>
      <Link href="/calculator" style={styles.button} >
        Calculator (Day 5)
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 6
      </Link>
      <Link href="/textInput" style={styles.button} >
        Text Input (Day 8) 
      </Link>
      <Link href="/signupForm" style={styles.button} >
        Signup Form (Day 9)
      </Link>
      <Link href="/flatlist" style={styles.button} >
        FlatList Dummy Data (Day 10)
      </Link>
      <Link href="/miniShoppingCart" style={styles.button} >
        Mini Shopping Cart (Day 11)
      </Link>
      <Link href="/swipeToDelete" style={styles.button} >
        Swipe To Delete (Day 12)
      </Link>
      <Link href="/bottomTabNavigator" style={styles.button} >
        Bottom Tab Navigation (Day 13)
      </Link>
      <Link href="/conditionalStyling" style={styles.button} >
        Conditional Styling ToDo (Day 14)
      </Link>
      <Link href="/fetchPokemon" style={styles.button} >
        Fetching from API (Day 15)
      </Link>
      <Link href="/imagePicker" style={styles.button} >
        Image Picker (Day 16)
      </Link>
      <Link href="/expoLocation" style={styles.button} >
        Expo Location (Day 17)
      </Link>
      <Link href="/asyncStorage" style={styles.button} >
        AsyncStorage (Day 18)
      </Link>
      <Link href="/modal" style={styles.button} >
        Modal (Day 20)
      </Link>
      <Link href="/layoutAnimation" style={styles.button} >
        Layout Animation (Day 24)
      </Link>
      <Link href="/loadingSpinner" style={styles.button} >
        Loading Spinner (Day 25)
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
  flex: 1, // apply flex here instead
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#25292e',
  },
  button: {
    padding: 20,
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    textDecorationLine: 'underline',
    borderBlockColor: '#25292e',
    borderWidth: 1,
    color: '#25292e',
  },
});
