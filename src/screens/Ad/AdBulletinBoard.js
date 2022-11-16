import React, {useCallback} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AdBulletinBoard({navigation}) {
  const AdPostWriting = useCallback(() => {
    navigation.push('AdPostWriting');
  }, [navigation]);

  const AdPostSearchScreen = useCallback(() => {
    navigation.push('AdPostSearchScreen');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.adTop}>
        <Text>홍보게시판</Text>
        <View style={{justifyContent: 'flex-end'}}>
          <Text>더보기</Text>
        </View>
        <View style={{backgroundColor: 'yellow', alignItems: 'flex-end'}}>
          <Pressable onPress={AdPostSearchScreen}>
            <Text>Serach</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.adFilteringTab}>
        <Text>게시글 필터 탭</Text>
      </View>

      {/* <View style={styles.adList}>
        <AdList logs={logs} />
      </View> */}

      <View style={styles.wrapper}>
        <Pressable
          style={({pressed}) => [
            styles.button,
            Platform.OS === 'android' && {
              opacity: pressed ? 0.6 : 1,
            },
          ]}
          android_ripple={{color: 'white'}}
          onPress={AdPostWriting}>
          <Icon name="pencil-plus-outline" size={20} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  adTop: {
    flex: 1.5,
    backgroundColor: 'purple',
  },
  adFilteringTab: {
    flex: 0.5,
    backgroundColor: 'blue',
  },
  adList: {
    flex: 7,
    backgroundColor: 'orange',
  },
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    // iOS 전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // 안드로이드 전용 그림자 설정
    elevation: 5,
    // 안드로이드에서 물결 효과가 영역 밖으로 나가지 않도록 설정
    // iOS에서는 overflow가 hidden일 경우 그림자가 보여지지 않음
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'black',
  },
});
