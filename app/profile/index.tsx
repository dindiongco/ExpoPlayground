import { Text, View, StyleSheet, Button } from 'react-native';
import {Image} from 'expo-image';

const ProfileImage = require('@/assets/images/cesar-profile.jpg');

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* background 1 */}
      </View>
      <View style={styles.bottomContainer}>
        {/* background 2 */}
        <Text style={styles.profileName}>Cesar Gonzalez</Text>
        <View style={styles.buttonContainer}>
            <Button title='Email'/>
            <Button title='Message'/>
      </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={ProfileImage} style={styles.image} />
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
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#25292e',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -220 }],
    zIndex: 10,
    elevation: 10,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 40,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});