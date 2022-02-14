import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Header from '../componants/Header';

export default function Setting() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <Text>Setting</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
        marginTop: StatusBar.currentHeight,
    },
});