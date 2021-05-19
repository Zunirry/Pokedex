import { HeaderHeightContext } from '@react-navigation/stack';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import arrow from '../../assets/next.png'

const ButtonsPage = ({ nextPage, backPage }) => {

    return (
        <View style={styles.container}>
            <View style={styles.backPageBox}>

                <TouchableOpacity
                    onPress={() => backPage()}
                >
                    <Text> back page</Text>
                    
                </TouchableOpacity>

            <View style={styles.nextPageBox}>
                <TouchableOpacity
                    onPress={() => nextPage()}
                    style={styles.nextPage}
                >
                    <Image
                        resizeMode='contain'
                        source={arrow}
                        style={{width: 30, height: 30}}
                    />
                </TouchableOpacity>
            </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    nextPage: {
        height: 50,
    },
   
})

export default ButtonsPage;
