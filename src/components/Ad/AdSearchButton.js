import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function AdSearchButton() {
    const navigation = useNavigation();

    const AdPostSearchScreen = () => {
    navigation.navigate('AdPostSearchScreen');
  };
    
    return(
        <Icon name='search' size={25} style={styles.icon} onPress={AdPostSearchScreen}/>
    )
}

const styles = StyleSheet.create({
    icon : {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        color: 'black',
    }
})