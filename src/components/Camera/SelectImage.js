import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Platform} from 'react-native';

export default function onSelectImage() {
  const [response, setResponse] = useState(null);

  launchImageLibrary(
    {
      mediaType: 'photo',
      maxWidth: 512,
      maxHeight: 512,
      includeBase64: Platform.OS === 'android',
    },
    (res) => {
      if (res.didCancel) {
        // 취소했을 경우
        return;
      }
      setResponse(res);
    },
  );
};