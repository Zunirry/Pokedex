import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'

import Header from '../components/Header'
import Search from '../components/Search'
// import useSearch from '../components/hook/useSearch'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const numColumns = 3
const numRows = 5

const Home = ({ navigation }) => {

    const [data, setData] = useState()
    const [filterPokemon, setFilterPokemon] = useState()

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10220`)
            .then(res => res.json())
            .then(res => (
                setData(res.results),
                setFilterPokemon(res.results)
            ))

    }, [fetch])

    const handleSearch = (data) => {
        setFilterPokemon(data)
    }

    console.log(data, 'data');

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.grid}
            // onPress={() => navigation.navigate('PokemonProfile', {
            //     item
            // })}
            >
                <View style={styles.pokemons}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
            <View>
                <Search filterPokemon={filterPokemon} handleSearch={handleSearch} data={data}/>
            </View>
            <FlatList
                data={filterPokemon}
                renderItem={renderItem}
                numColumns={numColumns}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    header: {
        height: 80,
        width: windowWidth,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    pokemons: {
        backgroundColor: '#fff',
        width: windowWidth / numColumns,
        height: windowHeight / numRows,
        borderColor: '#ccc',
        borderWidth: 2
    }
})


export default Home;
