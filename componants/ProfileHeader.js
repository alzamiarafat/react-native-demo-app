import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';

export default function ProfileHeader() {
    return (
        <View style={styles.containe}>
            <Text style={{ textAlign: 'right', marginRight: 20, marginTop: 5, paddingTop: 10, color: 'black' }}>
                <AntDesign name="edit" size={24} color="black" />
            </Text>
            <LinearGradient colors={['#FA7760', 'transparent']} style={styles.background}>
                <View style={{ alignItems: 'center', marginTop: '5%' }}>
                    <View style={{ borderColor: 'white', borderStyle: 'solid', borderWidth: 3, padding: 4, borderRadius: 70 }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU" }} style={{ width: 120, height: 120, borderRadius: 60 }} />
                    </View>
                </View>
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>John Deo</Text>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#574F4E' }}>john@example.com</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 10, paddingTop: 10, marginHorizontal: 20, backgroundColor: 'white' }}>
                    <Text style={{ padding: 10 }}>
                        <Feather name="twitter" size={24} color="#574F4E" />
                    </Text>
                    <Text style={{ padding: 10 }}>
                        <FontAwesome5 name="facebook" size={24} color="#574F4E" />
                    </Text>
                    <Text style={{ padding: 10 }}>
                        <AntDesign name="instagram" size={24} color="#574F4E" />
                    </Text>
                    <Text style={{ padding: 10 }}>
                        <FontAwesome name="whatsapp" size={24} color="#574F4E" />
                    </Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    containe: {
        backgroundColor: '#FFDDD7',
        height: '37%'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
});