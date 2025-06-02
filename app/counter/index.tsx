import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CircleButtonAdd from '@/app/components/CircleButtonAdd';
import CircleButtonMinus from '@/app/components/CircleButtonMinus';

export default function CounterScreen() {
    const [counter, setCounter] = useState<number>(0);

    const onClickAdd = () => {
        setCounter(counter + 1)
    }

    const onClickMinus = () => {
        setCounter(counter - 1)
    }

  return (
    <View style={styles.container}>
        {/* Top container with middle of the screen counter */}
        <View style={styles.topContainer}>
            <Text style={styles.counterText}>{counter}</Text>
        </View>
        {/* Bottom container with flex row and button plus/minus side by side */}
        <View style={styles.bottomContainer}>
            <CircleButtonMinus onPress={onClickMinus} />
            <CircleButtonAdd onPress={onClickAdd} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
    counterText: {
    color: "black",
    fontSize: 48,
    fontWeight: 'bold',
  },
});