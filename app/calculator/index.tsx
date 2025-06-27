import CircleButtonDivide from '@/app/components/calculator/CircleButtonDivide';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButtonAdd from '../components/calculator/CircleButtonAdd';
import CircleButtonMinus from '../components/calculator/CircleButtonMinus';
import CircleButtonMultiply from '../components/calculator/CircleButtonMultiply';
import EqualsButton from '../components/calculator/EqualsButton';
import NumEightButton from '../components/calculator/NumEightButton';
import NumFiveButton from '../components/calculator/NumFiveButton';
import NumFourButton from '../components/calculator/NumFourButton';
import NumNineButton from '../components/calculator/NumNineButton';
import NumOneButton from '../components/calculator/NumOneButton';
import NumSevenButton from '../components/calculator/NumSevenButton';
import NumSixButton from '../components/calculator/NumSixButton';
import NumThreeButton from '../components/calculator/NumThreeButton';
import NumTwoButton from '../components/calculator/NumTwoButton';
import NumZeroButton from '../components/calculator/NumZeroButton';
import RefreshButton from '../components/calculator/RefreshButton';

export default function FlexboxScreen() {
    const [calculatedNum, setCalculatedNum] = useState<number>(0)

    const onPress = () => {

    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text>{calculatedNum}</Text>
        </View>
        <View style={styles.middleContainer}>
            <View style={styles.middleContainerOne}>
                <NumOneButton onPress={onPress} />
                <NumTwoButton onPress={onPress} />
                <NumThreeButton onPress={onPress} />
                <CircleButtonAdd onPress={onPress} />
            </View>
            <View style={styles.middleContainerTwo}>
                <NumFourButton onPress={onPress} />
                <NumFiveButton onPress={onPress} />
                <NumSixButton onPress={onPress} />
                <CircleButtonMinus onPress={onPress} />
            </View>
            <View style={styles.middleContainerThree}>
                <NumSevenButton onPress={onPress} />
                <NumEightButton onPress={onPress} />
                <NumNineButton onPress={onPress} />
                <CircleButtonMultiply onPress={onPress} />
            </View>
            <View style={styles.middleContainerFour}>
                <NumZeroButton onPress={onPress} />
                <EqualsButton onPress={onPress} />
                <RefreshButton onPress={onPress} />
                <CircleButtonDivide onPress={onPress} />
            </View>
            <View style={styles.middleContainerFive}></View>
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
    alignItems: 'center'
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  middleContainerOne: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  middleContainerTwo: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  middleContainerThree: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  middleContainerFour: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  middleContainerFive: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  
});