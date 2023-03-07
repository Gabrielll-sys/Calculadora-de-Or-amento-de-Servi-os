import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput, Appbar, Button,} from "react-native-paper";

  const Header = ()=>{

    return(
        <View >
            <Appbar.Header style={{backgroundColor:"#282828",height: 60}}>

                <Image source={require("../assets/LOGO_BRANCO.png")} style={styles.iconeHeader}></Image>


            </Appbar.Header>
        </View>
    )
}
export default Header;

const styles= StyleSheet.create({
    iconeHeader: {
        height: 55,
        width: 105,
        resizeMode: 'stretch',
        alignSelf: 'center',

    },





})