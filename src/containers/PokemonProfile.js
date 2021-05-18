import React from 'react';
import {
    View,
    Text,
    StyleSheet
 } from 'react-native'
const PokemonProfile = ({item}) => {
    return (
        <View>
            <Text>
                {item.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
})


export default PokemonProfile;
