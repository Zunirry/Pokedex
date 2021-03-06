import React from 'react';
import {
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'
import logo from '../../assets/pokemon.svg.png'

const windowWidth = Dimensions.get('window').width;

const Header = () => {
    return (
        <View>
            <Image
                source={logo}
                style={styles.img}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    img: {
        width: windowWidth * 0.6,
        height: 80,
    }
})


export default Header;
