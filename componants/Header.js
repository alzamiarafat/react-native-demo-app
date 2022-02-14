import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Demo App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        // paddingHorizontal: 10,
        borderBottomColor: 'lightgray',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingBottom: 10

    },
});