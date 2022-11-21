import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CameraButton from '../../components/Camera/CameraButton';

export default function ActivityHistory() {
    return (
        <View style={styles.block}>
            <CameraButton />
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
      flex: 1,
      zIndex: 0,
    },
});