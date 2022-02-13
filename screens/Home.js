import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <View><Text>gfg</Text></View>
            <Footer style={{}}></Footer>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
        marginTop: StatusBar.currentHeight,
    },
});