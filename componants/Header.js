import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export default function Header({ navigation }) {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ flex: 1, fontSize: 20 }}><AntDesign name="arrowleft" size={24} color="#3B3938" /></Text>
            </TouchableOpacity>
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