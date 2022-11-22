import React, {useState ,useContext, } from 'react';
import {View, StyleSheet, Text} from 'react-native';


import AdList from '../../components/Ad/AdList';
import GoBackButton from '../../components/GoBackButton';
import AdSearchButton from '../../components/Ad/AdSearchButton';
import FloatingWriteButton from '../../components/FloatingWriteButton';

import LogContext from '../../contexts/LogContext';

export default function AdBulletinBoard() {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };


  return (
      <View style={styles.block}>
        <View style={styles.header}>
          <GoBackButton />
          <Text style={styles.titleText}>홍보게시판</Text>
          <AdSearchButton /> 
        </View> 
        <View style={styles.filterTab}>
          <Text>전체 / </Text>
          <Text>중앙 / </Text>
          <Text>단과대학 / </Text>
          <Text>과</Text>
        </View>

        <View style={styles.adList}>
          <AdList logs={logs} onScrolledToBottom= {onScrolledToBottom} />
        </View>
        <FloatingWriteButton hidden={hidden} />
      </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  titleText: {
    fontSize: 25,
    color: 'black',
  },
  filterTab: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
    marginHorizontal: 15,
    alignContent: 'center',
    borderColor: '#e0e0e0',
    borderBottomWidth: 1,
    // borderBottomWidth: 1,
  },
  adList: {
    flex: 10,
  }
})