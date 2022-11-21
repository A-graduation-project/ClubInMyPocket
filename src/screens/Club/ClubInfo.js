import React, {useRef ,useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Keyboard,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default function ClubInfo() {
  const inputRef = useRef();
  // const [isEditable, isSetEditable] = useState(false);
  const [response, setResponse] = useState(null);
  const [text, setText] = useState('');
  const [intro, setIntro] = useState('');

  const handleTextChange = (text) => setText(text);
  
  const addIntro = () => {
    if (text === "") {
      return;
    }
    const newIntro = {
      ...intro
    };
    setIntro(newIntro);
    setText('');
  }

  // const onEdit = () => {
  //   isSetEditable(true)
  //   inputRef.current.focus()
  // }

  const onDone = () => {
    // isSetEditable(false)
    {Keyboard.dismiss}
  }

  const onSelectImage = () => {
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
  }

  return (
    <View style={styles.container}>
      <View style={styles.pictureView}>
        <Image 
            style={styles.picture} 
            source={{uri: response?.assets[0]?.uri}} 
            resizeMethod='resize'
            resizeMode='cover'
            />
      </View>
      <View style={styles.buttons}>
        <Pressable onPress={onSelectImage}>
          <View style={styles.editButton}>
            <Text>선택</Text>
          </View>
        </Pressable>
        {/* <Pressable>
          <View>
            <Text>삭제</Text>
          </View>
        </Pressable> */}
      </View>
      <View style={styles.introQuote}>
        <TextInput 
          multiline={true}
          placeholder='소개글을 입력하세요.' 
          value={intro}
          returnKeyType='done'
          onChangeText={handleTextChange}
          ref={inputRef}
          numberOfLines={7}
        />
      </View>
      <View style={styles.buttons}>
        {/* <Pressable 
        onPress={onEdit}>
          <Text>수정</Text>
        </Pressable> */}
        <Pressable onPress={onDone}>
          <Text>완료</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  pictureView: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'peachpuff',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  picture: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 10,
  },
  editButton: {
    marginRight: 10,
  },
  introQuote: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'peachpuff',
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
