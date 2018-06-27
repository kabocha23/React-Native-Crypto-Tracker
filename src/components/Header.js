import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const Header = () => {
    return (
      <View>
        <ImageBackground 
            style={{
                display: "flex",
                alignItems: "center",
                width:'100%'
            }}
            source={require('./../Utils/images/cryptoBG.jpg')}
        >
            <Text style={ header }>
                Cryptocurrency Tracker
            </Text>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "#223A5E",
        fontWeight: "bold",
        fontFamily: "monospace",
        marginTop: 50,
        marginBottom: 40,
        fontSize: 25,
    }
})

const { headerContainer, header } = styles;

export default Header;
