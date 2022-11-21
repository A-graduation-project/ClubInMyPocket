import {React, useCallback} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useUserContext } from '../contexts/UserContext';

export default function Home({navigation}) {
  const signInIcon = <Icon name="log-in-outline" size={30} color={'black'} />;
  const {user} = useUserContext();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Pressable
          onPress={useCallback(() => {
            navigation.push('SignIn');
          })}>
          <View style={styles.signIn}>
            <Text>Hello</Text>
            <Text style={styles.signInText}>{signInIcon}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.drawingContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        {/* <Child func={pull_data} /> */}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <View style={styles.topButtons}>
            <Pressable>
              <View style={styles.button1}>
                <Text style={styles.buttonText}>중앙동아리</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={useCallback(() => {
                navigation.push('DepartmentSelection');
              })}>
              <View style={styles.button2}>
                <Text style={styles.buttonText}>단과대학</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.bottomButtons}>
            <Pressable
              onPress={useCallback(() => {
                navigation.push('AdBulletinBoard');
              })}>
              <View style={styles.button3}>
                <Text style={styles.buttonText}>홍보게시판</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.button4}>
                <Text style={styles.buttonText}>요청게시판</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    // flex: 1,
    // backgroundColor: 'yellow',
  },
  titleBox: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  signIn: {
    alignItems: 'flex-end',
  },
  signInText: {
    marginRight: 10,
  },
  drawingContainer: {
    flex: 2,
    // backgroundColor: 'green',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    flex: 4,
    padding: 30,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  buttonBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 50,
    margin: -20,
  },
  buttonText: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 20,
  },
  button1: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 35,
    margin: 5,
    borderRadius: 10,
  },
  button2: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 35,
    margin: 5,
    borderRadius: 10,
  },
  button3: {
    // backgroundColor: '#ffdab9',
    borderColor: 'black',
    borderWidth: 2,
    padding: 35,
    margin: 5,
    borderRadius: 10,
  },
  button4: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 35,
    margin: 5,
    borderRadius: 10,
  },
  // button1: {
  //   backgroundColor: '#ffdab9',
  //   padding: 35,
  //   margin: 5,
  //   borderRadius: 20,
  // },
  // button2: {
  //   backgroundColor: '#ffdab9',
  //   padding: 35,
  //   margin: 5,
  //   borderRadius: 20,
  // },
  // button3: {
  //   backgroundColor: '#ffdab9',
  //   padding: 35,
  //   margin: 5,
  //   borderRadius: 20,
  // },
  // button4: {
  //   backgroundColor: '#ffdab9',
  //   padding: 35,
  //   margin: 5,
  //   borderRadius: 20,
  // },
});
