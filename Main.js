import React from 'react';
import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Setting from './screens/Setting';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Main() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search1' : 'search1';

                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'user' : 'user';

                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'setting' : 'setting';
                    }

                    // You can return any component that you like here!
                    return <AntDesign name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}