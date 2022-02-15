import { View, Text, StyleSheet, StatusBar, Image, ScrollView, } from 'react-native'
import React from 'react'
import Header from '../componants/Header';
import ProfileHeader from '../componants/ProfileHeader';


export default function Setting() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <ProfileHeader />
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ backgroundColor: 'white', padding: 10, marginBottom: 50, }}>
                    <Text style={{ padding: 15, borderBottomColor: 'lightgray', borderStyle: 'solid', borderBottomWidth: 1 }}>fdsf</Text>
                    <Text style={{ padding: 15, borderBottomColor: 'lightgray', borderStyle: 'solid', borderBottomWidth: 1 }}>fdsf</Text>
                    <Text style={{ padding: 15, borderBottomColor: 'lightgray', borderStyle: 'solid', borderBottomWidth: 1 }}>fdsf</Text>
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