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
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import ClubInfo from './ClubInfo';
import CalendarView from '../../components/Calendar';
import ClubActivities from './ClubActivities';
import ClubReview from './ClubReview';
import ClubInquiry from './ClubInquiry';

// import Camera from '../components/Camera';

// const Camera = () => { Alert.alert(
//     "뭘로 올릴래?",
//     "선택해",
//     [
//       {
//         text: "카메라로 찍기",
//         onPress: async() =>{
//           const result = await launchCamera({
//             mediaType : 'photo',
//             cameraType : 'back',
//           });
//             if (result.didCancel){
//               return null;
//             }
//             const localUri = result.assets[0].uri;
//             const uriPath = localUri.split("//").pop();
//             const imageName = localUri.split("/").pop();
//             setPhoto("file://"+uriPath);
//         }
//       },
//       {
//         text: "앨범에서 선택",
//         onPress: async() =>{
//           const result = await launchImageLibrary();
//           if (result.didCancel){
//             return null;
//           }
//           const localUri = result.assets[0].uri;
//           const uriPath = localUri.split("//").pop();
//           const imageName = localUri.split("/").pop();
//           setPhoto("file://"+uriPath);
//         }
//       },
//     ],
//     {cancelable: false}
//   );
// };

// const showPicker = async() => {
//   const grantedCamera = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.CAMERA,
//     {
//       title: "App Camera Permission",
//       message: "App needs access to your camera",
//       buttonNeutral: "Ask me Later",
//       buttonNegative: "Cancel",
//       buttonPositive: "OK",
//     }
//   );

// const grantedStorage = await PermissionsAndroid.request(
//   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
//     title: "App Camera Permission",
//     message: "App needs access to your camera",
//     buttonNeutral: "Ask me Later",
//     buttonNegative: "Cancel",
//     buttonPositive: "OK",
//   }
// );
// if(grantedCamera === PermissionsAndroid.RESULTS.GRANTED && grantedStorage === PermissionsAndroid.RESULTS.GRANTED) {
//   console.log('Camera & Storage Permission given');
// } else {
//   console.log("Camera permission denied")
// }
// };

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <ClubInfo />
    {/* <Camera /> */}
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <CalendarView />
  </View>
);

const ThirdRoute = () => <View style={{flex: 1, backgroundColor: 'white'}}>
  <ClubActivities />
</View>;

const FourthRoute = () => <View style={{flex: 1, backgroundColor: 'white'}}>
  <ClubReview />
</View>;

const FifthRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <ClubInquiry />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
});
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#ffdab9'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused}) =>
      focused ? (
        <Text style={{color: 'dodgerblue', fontSize: 10}}>{route.title}</Text>
      ) : (
        <Text style={{fontSize: 10}}>{route.title}</Text>
      )
    }
  />
);

export default function CPU() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '동아리안내'},
    {key: 'second', title: '행사일정'},
    {key: 'third', title: '활동기록'},
    {key: 'fourth', title: '리뷰'},
    {key: 'fifth', title: '문의'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
