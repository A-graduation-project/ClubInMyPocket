import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EmptySearchResult from '../../components/Ad/EmptySearchResult';
import AdList from '../../components/Ad/AdList';
import LogContext from '../../contexts/LogContext';
import SearchContext from '../../contexts/SearchContext';

export default function AdPostSearchScreen() {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter((log) =>
          [log.title, log.body].some((text) => text.includes(keyword)),
        );

  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }


  return (
    <View style={styles.block}>
      <AdList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
