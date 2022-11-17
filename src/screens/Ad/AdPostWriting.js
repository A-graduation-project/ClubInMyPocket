import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../../components/Ad/WriteHeader';
import WriteEditor from '../../components/Ad/WriteEditor';
import LogContext from '../../contexts/LogContext';

export default function AdPostWriting() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  const {onCreate} = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      // 날짜를 문자열로 변환
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
  <SafeAreaView style={styles.block}>
    <KeyboardAvoidingView
      style={styles.avoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <WriteHeader 
        onSave={onSave}
      />
      <WriteEditor 
        title={title}
        body={body}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
      />
    </KeyboardAvoidingView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});