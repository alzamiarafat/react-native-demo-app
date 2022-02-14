import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../componants/Header';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <Text>Profile</Text>
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