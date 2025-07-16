import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate fetching data from server
    setTimeout(() => {
      setData(prevData => [
        ...prevData,
        `New Item ${prevData.length + 1}`
      ]);
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PullToRefreshScreen;
