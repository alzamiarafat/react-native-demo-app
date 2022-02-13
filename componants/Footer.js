import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';

export default function Footer(props) {
    console.log(props);

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.items} onPress={() => props.navigation.navigate('Home')}>
                <Feather name="home" size={24} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items} onPress={() => props.navigation.navigate('Home')}>
                <AntDesign name="search1" size={24} color="green" />
            </TouchableOpacity>
            <View style={styles.items}>
                <Feather name="tag" size={24} color="green" />
            </View>
            <View style={styles.items}>
                <FontAwesome name="user-o" size={24} color="green" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignContent: 'center',
        flexDirection: 'row',
        borderStyle: 'dashed',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    items: {
        flex: 1,
        padding: 10,
        borderStyle: 'dashed',
        borderRightWidth: 1,
        borderColor: 'gray',
        alignItems: 'center'
    },
});