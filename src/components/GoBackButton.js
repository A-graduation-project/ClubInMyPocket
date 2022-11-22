import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function GoBackButton() {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <Icon name='arrow-back' size={25} color='black' onPress={goBack} style={styles.icon} />
    )
}

const styles = StyleSheet.create({
    icon: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
    }
})