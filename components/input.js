import React from "react";
import {Image, Text, TextInput,View} from "react-native";
const Input=(props)=>{

return(
    <>

    <Text style={styles.descricaoInput}>Dias de trabalho</Text>
    <View style={styles.sectionStyle}>


        <TextInput style={styles.input} keyboardType='numeric' value={diasTrabalho}
                   onChangeText={valor => setDiasTrabalho(valor)}/>
        <Image source={require("../assets/simbolo-relogio.png")} style={styles.icones}></Image>

    </View>
    </>
);








};
export default Input;