import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Alert, Dimensions, ScrollView } from 'react-native'
import React from 'react';
import { Ionicons, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function Login({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://pathwayport.com/saasland/images/login@4x.png' }} style={styles.image} resizeMode='contain'></Image>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.body}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subtitle}>Enter your personal details and start journey with us</Text>
                    <TextInput style={styles.input} placeholder="Email/Username" />
                    <View style={styles.passwordInput}>
                        <TextInput secureTextEntry={true} style={{ fontSize: 16, }} placeholder="Password" />
                        <View style={{ backgroundColor: 'gray', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Ionicons name="eye" size={25} style={styles.iconStyle} color="#999" />
                            <Ionicons name="eye-off" size={25} style={styles.iconStyle} color="#999" />
                        </View>
                    </View>
                    <Text style={{ color: 'darkgray', fontSize: 17, textAlign: 'right', marginBottom: 10 }}>Forgot Password?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.btn}>Log In</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 18, marginTop: 15 }}>Create an Account?</Text>
                        <Text style={{ color: 'gray', fontSize: 18, marginTop: 15 }}>Or</Text>
                    </View>
                    <View style={styles.socialIcons}>
                        <Text style={{ paddingHorizontal: 10 }}>
                            <FontAwesome name="google-plus-circle" size={53} color="crimson" />
                        </Text>
                        <Text style={{ paddingHorizontal: 10 }}>
                            <Entypo name="twitter-with-circle" size={50} color="deepskyblue" />
                        </Text>
                        <Text style={{ paddingHorizontal: 10 }}>
                            <MaterialIcons name="facebook" size={50} color="royalblue" />
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    },
    imageContainer: {
        marginTop: height - 800,
        alignItems: 'center'
    },
    image: {
        width: width - 30,
        height: height - 600
    },
    body: {
        width: width - 30
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 5,
        color: 'gray'
    },
    input: {
        fontSize: 16,
        color: 'black',
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 13,
        borderRadius: 5,
        marginVertical: 10
    },
    passwordInput: {
        fontSize: 18,
        color: 'black',
        borderColor: 'lightgray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 13,
        borderRadius: 5,
        marginVertical: 10,
    },
    btn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        borderRadius: 5,
        marginTop: 10,
        // backgroundColor: '#66B57C',
        backgroundColor: '#15B699',
        padding: 12,
    },
    iconStyle: {
        position: 'absolute',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    }
});