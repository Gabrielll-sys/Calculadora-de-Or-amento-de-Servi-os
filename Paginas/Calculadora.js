import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput, Appbar, Button,} from "react-native-paper";
import Resultado from "../components/Resultado";
import Home from "./Home";
import Header from "../components/Header"
export let merda=23;

export default function Calculadora() {
    let PorcentagemImposto = 12;
    let PorcentagemLucro =20
    let alimentacao =  50;
    let [diasTrabalho, setDiasTrabalho] = useState(0)
    let [qntdFuncionario, setFuncionarios] = useState(0)
    let [maoDeObra, setMaoDeObra] = useState(0)
    let [gasolina, setGasolina] = useState(0)
    let [lucroDisplay, setLucroDisplay] = useState(0, 0);
    let [resultado, setResultado] = useState(0);
    let [impostoDisplay, setImpostoDisplay] = useState(0)
    let [temAlimentacao,setTemAlimentacao]= useState(true);


    const calcularTotal = () => {
        let custoFuncionarios = qntdFuncionario * maoDeObra * diasTrabalho;
        let custoAlimentacao = qntdFuncionario * diasTrabalho * alimentacao;
        let custoGasolina = diasTrabalho * gasolina;
        let custosGerais = custoFuncionarios + custoGasolina + custoAlimentacao
        let lucro = custosGerais + (custosGerais*(PorcentagemLucro/100));
        let lucroEmpresario = custosGerais *(PorcentagemLucro/100) ;

        setLucroDisplay(Math.round(lucroEmpresario));
        let total = lucro + (lucro*(PorcentagemImposto/100))
        let impostoPago = lucro*(PorcentagemImposto/100)
        setImpostoDisplay(Math.round(impostoPago));
        setResultado(Math.round(total));


    }
    useEffect(() => {
            calcularTotal();
        },
        [diasTrabalho]);
    useEffect(() => {
            calcularTotal();
        },
        [qntdFuncionario]);
    useEffect(() => {
            calcularTotal();
        },
        [maoDeObra]);
    useEffect(() => {
            calcularTotal();
        },
        [gasolina]);
    const apagar = () => {
        setDiasTrabalho(0)
        setMaoDeObra(0)
        setGasolina(0)
        setFuncionarios(0)
        setResultado(0)
        setLucroDisplay(0)


    }

    return (
        <>
            <Header>


            </Header>
            <View style={styles.container}>


                <TextInput style={styles.input} keyboardType='numeric'
                           right={<TextInput.Icon name="account-clock-outline"/>}
                           label="Dias de trabalho" Type="outlined" value={diasTrabalho}
                           onChangeText={valor => setDiasTrabalho(valor)}/>


                <TextInput style={styles.input} label="Numero de funcionários" keyboardType="numeric"
                           right={<TextInput.Icon name="account-group"/>} value={qntdFuncionario}
                           onChangeText={valor => setFuncionarios(valor)}/>


                <TextInput style={styles.input} value={maoDeObra} keyboardType="numeric"
                           onChangeText={valor => setMaoDeObra(valor)}
                           right={<TextInput.Icon name="currency-brl"/>}
                           label="Custo de mão de obra" type="outlined"/>


                <TextInput label="Combustível por Dia" style={styles.input} value={gasolina} keyboardType="numeric"
                           onChangeText={valor => setGasolina(valor)}
                           right={<TextInput.Icon name="gas-station"/>}
                />


                <Resultado style={styles.resultado} total={resultado} dias={diasTrabalho} funcionarios={qntdFuncionario}
                           gasolina={gasolina} maoDeObra={maoDeObra} lucro={lucroDisplay} impostoPago={impostoDisplay}>

                </Resultado>
            </View>
        </>
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",


    },
    descricaoInput: {
        marginLeft: 10,
        marginTop: 5,
        fontStyle: "italic",
        fontWeight: "bold",
        width: 300,
        fontSize: 18

    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center",
        color: "white",
        marginTop: 40,
    },
    textoDestacado: {
        fontStyle: "italic",
        fontSize: 30
    },
    input: {

        borderWidth: 1.3,
        width: 300,
        fontSize: 15,
        backgroundColor: "#FFF",
        // color:"white",
        fontWeight: "bold",
        height: 45,
        borderColor: "lightblue",
        marginTop: 13,
         padding: 2.2,


    },

    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .9,
        borderColor: '#000',
        height: 40,
        borderRadius: 9,
        marginTop: 10
    },
    textoBotao: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        fontStyle: "italic"

    },
    containerBotao: {
        flexDirection: "row",
        width: 320,
        justifyContent: "center"

    },
    botao: {

        borderRadius: 8,
        marginTop: 7,
        backgroundColor: "#f92f2f",


    },


    icones: {
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        marginRight: 10,

    }

})