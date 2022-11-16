import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  Alert,
  Modal,
  Button,
  Pressable,
} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function ClubInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.mainPicture}>
        <Text>메인사진</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable>
          <View style={styles.editButton}>
            <Text>수정</Text>
          </View>
        </Pressable>
        <Pressable>
          <View>
            <Text>삭제</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.introQuote}>
        <Text>소개글</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable>
          <Text>수정</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  mainPicture: {
    flex: 3,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
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
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
