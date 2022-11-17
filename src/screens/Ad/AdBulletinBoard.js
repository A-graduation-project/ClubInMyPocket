import React, {useState ,useContext, useCallback} from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


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
        <Icon name='search' color='black' size={24} onPress={AdPostSearchScreen}/>
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