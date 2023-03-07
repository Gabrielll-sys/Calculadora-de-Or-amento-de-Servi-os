import React from "react";
import {Text, View} from "react-native";
import Header from "../components/Header";
import{merda} from './Calculadora'
import {RadioButton} from "react-native-paper";
const Mudanca = () => {
    return (

        <>
            <Header/>
            <View>
                <RadioButton
                    value="second"

                    onPress={() => setChecked('second')}
                />
            </View>


        </>
    )


}

export default Mudanca;