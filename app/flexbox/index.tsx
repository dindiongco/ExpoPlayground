import { View, StyleSheet } from 'react-native';

export default function FlexboxScreen() {
  return (
    <View style={styles.container}>
        {/* Top row 3 boxes side by side (1/6) */}
        {/* Two boxes with a gap in the middle (3/6) */}
        {/* Stretched box (2/6) */}
        <View style={styles.topContainer}>
            <View style={styles.topLeftContainer}/>
            <View style={styles.topMiddleContainer}/>
            <View style={styles.topRightContainer}/>
        </View>
        <View style={styles.middleContainer}>
            <View style={styles.middleLeftContainer}/>
            <View style={styles.middleRightContainer}/>
        </View>
        <View style={styles.bottomContainer}>
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
    flexDirection: 'row',
  },
  topLeftContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  topMiddleContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  topRightContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  middleContainer: {
    flex: 3,
    flexDirection: 'row',
    gap: 20,
  },
  middleLeftContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  middleRightContainer: {
    flex: 2,
    backgroundColor: 'violet',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: 'orange',
  },
});