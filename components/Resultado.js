import React from "react";
import {Text, TextInput, StyleSheet, Image, View} from "react-native";


const Resultado = (props) => {

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.icone} source={require("../assets/account-clock-outline.png")}/>
                <Text style={styles.texto}> {props.dias} Dias de trabalho</Text>

            </View>
            <View style={styles.container}>
                <Image style={styles.icone} source={require("../assets/account-group.png")}/>
                <Text style={styles.texto}> {props.funcionarios} Funcionários</Text>

            </View>
            <View style={styles.container}>
                <Image style={styles.icone} source={require("../assets/currency-brl.png")}/>
                <Text style={styles.texto}>Preço por mão de obra R${props.maoDeObra}</Text>

            </View>

            <View style={styles.container}>
                <Image style={styles.icone} source={require("../assets/gas-station.png")}/>
                <Text style={styles.texto}>Preço de combustível por dia R${props.gasolina}</Text>

            </View>
            <View style={styles.container2}>
                <Text style={{fontWeight:"bold",marginTop:5,fontSize:17}}>Total:R$ {props.total} Reais</Text>
                <Text style={{fontWeight:"bold",marginTop:5,fontSize:17}}>Imposto:R$ {props.impostoPago} Reais</Text>
                <Text style={{fontWeight:"bold",marginTop:5,fontSize:17}}>Lucro:R$ {props.lucro} Reais </Text>

            </View>
        </>
    )
        ;

}

const styles = StyleSheet.create({
    resultado: {
        marginLeft: 10,
        marginTop: 5,
        fontStyle: "italic",
        width: 400,
        fontSize: 16,
        lineHeight: 28,

    },
    container: {
        marginTop: 4,
        marginRight: 40,
        marginLeft:80,
        height: 40,
        width: 380,
        flexDirection: "row",
    },
    container2: {

        width: 300,
        flexDirection: "column",
        alignItems:"center",
    },
    icone: {
        height: 35,
        width: 50,
        marginRight: 4,
        marginLeft: 4,
    },
    texto:{
        fontWeight:"bold",
        fontStyle:"italic",
        fontSize:16,
        marginTop:8
    }


})
export default Resultado;