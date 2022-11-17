import React, {useState ,useContext, useCallback} from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import AdList from '../../components/Ad/AdList';
import FloatingWriteButton from '../../components/FloatingWriteButton';

import LogContext from '../../contexts/LogContext';

export default function AdBulletinBoard({navigation}) {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  const AdPostSearchScreen = useCallback(() => {
    navigation.push('AdPostSearchScreen');
  }, [navigation]);

  return (
      <View style={styles.block}>
        <AdList logs={logs} onScrolledToBottom= {onScrolledToBottom} />
        <FloatingWriteButton hidden={hidden} />
      </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'green'
  },
})