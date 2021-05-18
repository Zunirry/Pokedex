import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    StyleSheet
 } from 'react-native'
import loupe from '../../assets/loupe.png'
// import useSearch from './hook/useSearch'

const windowWidth = Dimensions.get('window').width;

const Search = ({data, handleSearch}) => {

    // const [ query, updateQuery] = useSearch()
    const [query, setQuery] = useState('')
    console.log(query, 'query');

    const updateQuery = (query) => {

        setQuery(query)

        const searchRes = data.filter(query => query)
            .filter(newQuery => newQuery.name.toLowerCase()
            .includes(query.toLowerCase()))

        console.log(searchRes, 'rsdadas');
        
        if(query == ''){
            handleSearch(data)
        }else{
            handleSearch(searchRes)
        }


        return searchRes
    }

    return (
        <View style={styles.container}>
            <Image
                source={loupe}
                resizeMode='contain'
                style={styles.img}
                tintColor='#b0b0b0'
            />

            <TextInput 
                placeholder='Search'
                style={styles.input}
                value={query}
                onChangeText={updateQuery}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 10,
        marginVertical: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: windowWidth * 0.89
    },
    img: {
        borderRadius: 10,
        width: 25,
        height: 25,
        backgroundColor: '#e0e0e0',
        height: 49,
    }
})

export default Search;
