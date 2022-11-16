import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Inquiry() {
  return (
    <View style={styles.container}>
      <Text>회장</Text>
      <Text>부회장</Text>
      <Text>홍보부장</Text>
      <Text>카카오톡 오픈채팅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
