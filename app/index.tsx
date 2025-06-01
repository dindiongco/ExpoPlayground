 import { ScrollView, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Link href="/basic" style={styles.button} >
        Basic screen (Day 1)
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen (Day 2)
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 3
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 4
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 5
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 6
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 7
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 8
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 9
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 10
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 11
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 12
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 13
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 14
      </Link>
      <Link href="/profile" style={styles.button} >
        Profile screen 15
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
