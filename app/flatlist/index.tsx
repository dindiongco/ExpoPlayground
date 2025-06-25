import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
  },
  {
    id: '3',
    name: 'Carla Martinez',
    email: 'carla.martinez@example.com',
  },
  {
    id: '4',
    name: 'David Lee',
    email: 'david.lee@example.com',
  },
  {
    id: '5',
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
  },
];

const Item = ({name, email}) => (
    <View style={styles.item}>
        <View>
            <Text>{name}</Text>
            <Text style={{ color: 'gray' }}>{email}</Text>
        </View>
    </View>
)


const FlatListScreen = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item {...item} />}
        >
        </FlatList>
    </View>
  )
}

export default FlatListScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});