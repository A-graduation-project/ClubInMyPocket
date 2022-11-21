import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {StyleSheet, KeyboardAvoidingView, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../../components/Ad/WriteHeader';
import WriteEditor from '../../components/Ad/WriteEditor';
import LogContext from '../../contexts/LogContext';

export default function AdPostWriting({route}) {
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');

  const navigation = useNavigation();

  const {onCreate, onModify, onRemove} = useContext(LogContext);
  const onSave = () => { if (log) {
    onModify({
      id: log.id,
      date: log.date,
      title,
      body,
    });
  } else {
    onCreate({
      title,
      body,
      // 날짜를 문자열로 변환
      date: new Date().toISOString(),
    });
  }
  navigation.pop();
};

const onAskRemove = () => {
  Alert.alert(
    '삭제',
    '정말로 삭제하시겠어요?',
    [
      {text: '취소', style: 'cancel'},
      {
        text: '삭제',
        onPress: () => {
          onRemove(log?.id);
          navigation.pop();
        },
        style: 'destructive',
      },
    ],
    {
      cancelable: true,
    },
  );
};


  return (
  <SafeAreaView style={styles.block}>
    <KeyboardAvoidingView
      style={styles.avoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <WriteHeader 
        onSave={onSave}
        onAskRemove={onAskRemove}
        isEditing={!!log}
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