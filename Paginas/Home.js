import {useState} from "react";
import {StyleSheet, View} from "react-native";
import {BottomNavigation, Text} from 'react-native-paper';
import Calculadora from "./Calculadora";
import Mudanca from "./Sobre";

const Home = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'calculadora', title: 'Calculado de orçamento', focusedIcon: 'calculator',},
        {key: 'mudanca', title: 'Alterar valores fixos', focusedIcon: 'pencil-box'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        mudanca: Mudanca,
        calculadora: Calculadora,

    });

    return (

        <BottomNavigation
                          navigationState={{index, routes}}
                          onIndexChange={setIndex}
                          renderScene={renderScene}
        />

    );
};
const styles = StyleSheet.create({
    navegador: {

    }


})

export default Home;