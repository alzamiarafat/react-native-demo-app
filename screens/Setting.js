import { View, Text, StyleSheet, StatusBar, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import Header from '../componants/Header';
import ProfileHeader from '../componants/ProfileHeader';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Setting() {
    const [isExtand, setIsExtand] = useState(true);

    const iconHandle = () => {
        alert(165)
        // if (isExtand) setIsExtand(false);
        // else setIsExtand(true)
    }

    return (
        <View style={styles.container}>
            <Header></Header>
            <ProfileHeader />

            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ backgroundColor: 'white', padding: 10, marginBottom: 50, }}>
                    <Collapse style={{ padding: 15, paddingBottom: 0 }}>
                        <CollapseHeader>
                            <View style={{ flexDirection: 'row' }} onPress={iconHandle}>
                                <Text style={{ flex: 8, fontSize: 17 }}>Profile Setting</Text>
                                <Text style={{ flex: 1, fontSize: 17 }}>
                                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text>Ta daa!</Text>
                        </CollapseBody>
                    </Collapse>
                    <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 1, borderStyle: 'solid', margin: 10, marginBottom: 0 }}></View>

                    <Collapse style={{ padding: 15, paddingBottom: 0 }}>
                        <CollapseHeader>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 8, fontSize: 17 }}>Account Setting</Text>
                                <Text style={{ flex: 1, fontSize: 17 }}>
                                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text>Ta daa!</Text>
                        </CollapseBody>
                    </Collapse>
                    <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 1, borderStyle: 'solid', margin: 10, marginBottom: 0 }}></View>

                    <Collapse style={{ padding: 15, paddingBottom: 0 }}>
                        <CollapseHeader>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 8, fontSize: 17 }}>Privacy Setting</Text>
                                <Text style={{ flex: 1, fontSize: 17 }}>
                                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                                </Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text>Ta daa!</Text>
                        </CollapseBody>
                    </Collapse>
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