import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import AdListItem from './AdListItem';

export default function FeedList({logs, onScrolledToBottom}) {
  const onScroll = (e) => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <AdListItem log={item} />}
      keyExtractor={(log) => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
}

const styles = StyleSheet.create({
    block: {flex: 1},
    separator: {
      backgroundColor: '#e0e0e0',
      height: 1,
      width: '100%',
      marginHorizontal: 15,
  },
});

