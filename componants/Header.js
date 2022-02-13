import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={{ fontSize: 20 }}>Header</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: '#0707',
    },
});