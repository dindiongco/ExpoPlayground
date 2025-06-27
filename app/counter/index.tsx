import CircleButtonAdd from '@/app/components/calculator/CircleButtonAdd';
import CircleButtonMinus from '@/app/components/calculator/CircleButtonMinus';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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