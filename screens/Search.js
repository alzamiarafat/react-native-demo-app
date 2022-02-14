import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react';
import Header from '../componants/Header';

export default function Search(props) {
    return (
        <View style={styles.container}>
            <Header></Header>
            <Text>fdghgjhe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // minHeight: '100%',
        marginTop: StatusBar.currentHeight,
    },
});