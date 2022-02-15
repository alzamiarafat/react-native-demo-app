import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../componants/Header';
import ProfileHeader from '../componants/ProfileHeader';
import { AntDesign, Feather, Entypo, Ionicons } from '@expo/vector-icons';


export default function Profile() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <ProfileHeader />
            <ScrollView>
                <View style={{ marginTop: 45, backgroundColor: 'white', padding: 10 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, padding: 5 }}>
                        <Text style={{ fontSize: 17, paddingRight: 5 }}>
                            <AntDesign name="user" size={20} color="gray" />
                        </Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>Name</Text>
                    </View>
                    <Text style={{ fontSize: 17, color: 'black', marginBottom: 10, paddingHorizontal: 10 }}>John Deo</Text>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, padding: 5 }}>
                        <Text style={{ fontSize: 17, paddingRight: 5 }}>
                            <Feather name="phone" size={20} color="gray" />
                        </Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>Contact Number</Text>
                    </View>
                    <Text style={{ fontSize: 17, color: 'black', marginBottom: 10, paddingHorizontal: 10 }}>0170000000</Text>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, padding: 5 }}>
                        <Text style={{ fontSize: 17, paddingRight: 5 }}>
                            <Ionicons name="mail-open-outline" size={20} color="gray" />
                        </Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>Email Address</Text>
                    </View>
                    <Text style={{ fontSize: 17, color: 'black', marginBottom: 10, paddingHorizontal: 10 }}>john@example.com</Text>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, padding: 5 }}>
                        <Text style={{ fontSize: 17, paddingRight: 5 }}><Entypo name="address" size={20} color="gray" /></Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>Address</Text>
                    </View>
                    <Text style={{ fontSize: 17, color: 'black', marginBottom: 10, paddingHorizontal: 10 }}>Dhaka, Bangladesh</Text>
                </View>
            </ScrollView>
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