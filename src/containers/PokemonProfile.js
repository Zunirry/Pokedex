import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';
import Header from '../components/Header'
import back from '../../assets/back.png'

const PokemonProfile = ({ route, navigation }) => {


    const { item, handleImg } = route.params

    console.log(item.url, 'item');

    const [currentPokemon, setCurrentPokemon] = useState()

    useEffect(() => {
        fetch(item.url)
            .then(res => res.json())
            .then(res => (
                setCurrentPokemon(res),
                console.log(handleImg(res), 'handleimg')

            ))
    }, [fetch])


    console.log(currentPokemon, 'POKEKEKEMON');


    return (
        <View>
            <View style={styles.head}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.button}
                >
                    <Image
                        source={back}
                        tintColor='#fff'
                        resizeMode='contain'
                        style={{ width: 25, height: 25, marginTop: 20 }}
                    />
                </TouchableOpacity>
                <Header />
            </View>

            <View style={styles.profile}>
                <Image
                    resizeMode='contain'
                    style={{ width: 200, height: 200 }}
                    source={{ uri: `${currentPokemon?.sprites.front_default}` }}
                />
                <View>
                    <Text>
                        #{currentPokemon?.id}
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>
                        {currentPokemon?.name}
                    </Text>
                    <Text>
                        Height: {currentPokemon?.height}
                    </Text><Text>
                        Weight: {currentPokemon?.weight}
                    </Text>
                </View>

                <View>
                    {/* Add pokemon description here */}
                    <Text></Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center', color: '#a0a0a0' }}>Statics</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
            </View>

            <View style={styles.statics}>

                <View style={styles.staticsChilds}>
                    <Text>HP:         </Text>
                    <View style={styles.barBox}>
                    <ProgressBar progress={currentPokemon?.stats[0].base_stat / 100} color={'#3AA4C0'} style={styles.progressBar} />
                    </View>
                </View>

                <View style={styles.staticsChilds}>
                    <Text>Attack:   </Text>
                    <View style={styles.barBox}>
                    <ProgressBar progress={currentPokemon?.stats[1].base_stat / 100} color={'#3AA4C0'} style={styles.progressBar}/>
                    </View>
                </View>

                <View style={styles.staticsChilds}>
                    <Text>Defense:</Text>
                    <View style={styles.barBox}>
                    <ProgressBar progress={currentPokemon?.stats[2].base_stat / 100} color={'#3AA4C0'} style={styles.progressBar}/>
                    </View>
                </View>

                <View style={styles.staticsChilds}>
                    <Text>Speed:    </Text>
                    <View style={styles.barBox}>
                    <ProgressBar progress={currentPokemon?.stats[5].base_stat / 100} color={'#3AA4C0'} style={styles.progressBar}/>
                    </View>
                </View>

                <View style={styles.staticsChilds}>
                    <Text>Sp Atk:   </Text>
                    <View style={styles.barBox}>
                    <ProgressBar progress={currentPokemon?.stats[3].base_stat / 100} color={'#3AA4C0'} style={styles.progressBar}/>
                    </View>
                </View>

                <View style={styles.staticsChilds}>
                    <Text>Sp Def:   </Text>
                    <View style={styles.barBox}>
                    <ProgressBar progress={currentPokemon?.stats[4].base_stat / 100} color={'#3AA4C0'} style={styles.progressBar}/>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#CD2919'
    },
    button: {
        paddingLeft: 10,
        left: -50,
        paddingTop: 10,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statics: {
        marginHorizontal: 10,
    },
    staticsChilds: {
        marginBottom: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    barBox: {
        marginHorizontal: 10, 
        flex: 1
    },
    progressBar: {
        height: 8, 
        width: '100%',
        borderRadius: 4,
    }
})


export default PokemonProfile;
