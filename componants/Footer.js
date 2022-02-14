import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { Link } from '@react-navigation/native';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';



const Tab = createBottomTabNavigator();

export default function Footer() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>

        // <View style={styles.footerContainer}>
        //     <TouchableOpacity style={styles.items}>
        //         <Link to={{ screen: 'Home', params: { id: 'jane' } }}>
        //             <Feather name="home" size={24} color="green" />
        //         </Link>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.items}>
        //         <Link to={{ screen: 'Search', params: { id: 'jane' } }}>
        //             <AntDesign name="search1" size={24} color="green" />
        //         </Link>
        //     </TouchableOpacity>
        //     <View style={styles.items}>
        //         <Feather name="tag" size={24} color="green" />
        //     </View>
        //     <View style={styles.items}>
        //         <FontAwesome name="user-o" size={24} color="green" />
        //     </View>
        // </View>
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