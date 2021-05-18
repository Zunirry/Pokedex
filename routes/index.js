import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/containers/Home'
import PokemonProfile from '../src/containers/PokemonProfile'


const Stack = createStackNavigator();

const appStack = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PokemonProfile" component={PokemonProfile} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default appStack;
