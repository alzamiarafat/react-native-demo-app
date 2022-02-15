import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={{ flex: 6, fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#3B3938' }}>Demo App</Text>
            <View style={{ flex: 2, flexDirection: 'row', fontSize: 20, fontWeight: 'bold' }}>
                <Text style={{ paddingHorizontal: 10 }}>
                    <Ionicons name="notifications-outline" size={25} color="#3B3938" />
                </Text>
                <Text style={{ paddingLeft: 5 }}>
                    <Feather name="send" size={25} color="#3B3938" />
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        borderBottomColor: 'lightgray',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#66B57C',
        marginBottom: 10
    },
});