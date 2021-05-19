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
import Buttons from '../components/ButtonsPage'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const numColumns = 3
const numRows = 5

const Home = ({ navigation }) => {


    const [data, setData] = useState([])
    const [filterPokemon, setFilterPokemon] = useState()
    const [img, setImg] = useState()
    const [page, setPage] = useState(0)

    console.log(data, 'data');
    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=50`)
            .then(res => res.json())
            .then(res => {
                // setData(res.results),
                const newData = []
                // setFilterPokemon(res.results),
                    res.results.map((pokemon, index) => {
                        newData[index] = {
                            id: index + 1,
                            name: pokemon.name,
                            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                            url: `https://pokeapi.co/api/v2/pokemon/${index + 1}`
                        }
                    }),
                    setFilterPokemon(newData)
                    setData(newData)
            })

    }, [fetch, page])




    const nextPage = () => {
        if (page === 1100) {
            setPage(page)
        } else {
            setPage(page + 50)
        }
    }

    const backPage = () => {
        if (page === 0) {
            setPage(page)
        } else {
            setPage(page - 50)
        }
    }


    const handleSearch = (data) => {
        setFilterPokemon(data)
    }

    const handleImg = (img) => {
        setImg(img)
    }


    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity
                style={styles.grid}
                onPress={() => navigation.navigate('PokemonProfile', {
                    item,
                    handleImg
                })}
            >
                <View style={styles.pokemons}>
                    <Image
                        style={{ height: 120, width: 120 }}
                        source={{uri: item.sprite}}
                    />
                    <Text style={{textAlign: 'center'}}>{item.name}</Text>
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
                <Search
                    filterPokemon={filterPokemon}
                    handleSearch={handleSearch}
                    data={data}
                />
            </View>
            <FlatList
                data={filterPokemon}
                renderItem={renderItem}
                numColumns={numColumns}
                keyExtractor={data?.id}
                
            />
            <Buttons nextPage={nextPage} backPage={backPage} />
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
        backgroundColor: '#CD2919'
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
