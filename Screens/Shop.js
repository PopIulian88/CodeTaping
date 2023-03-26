import {View, Text, StatusBar, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useState} from "react";

function BuyCard({keyboard, price, cresc}){

    const [color, setColor] = useState("white");
    const [multiplic, setMultiplic] = useState(1);

    global.MULTIPLY = multiplic;

    return (
        <View style={styles.buyCard}>
            <View style={{flex:3}}>
                <Image style={{height: 150, width: 200, resizeMode: "contain"}} source={keyboard}/>
            </View>


            <TouchableOpacity style={{flex: 2, alignItems: "center", justifyContent: "center"}} onPress={() => {
                if(color !== "red" && TOTAL_SCORE >= price && MULTIPLY === (cresc / 10)){
                    setMultiplic(multiplic * cresc);
                    setColor("red");

                }
            } } >
                <View style={{height: 100, width: "100%", backgroundColor: color, borderRadius: 50, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: 'bold'}}>Price: {price}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default function Shop() {


    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <Text style={{color: "#0D3B66", fontWeight: 'bold'}}> Every keyboard you buy will increase your coding speed
                by x10</Text>

            <BuyCard keyboard={require("../Image/Keyboards/2.Tastatura.png")} price={100} cresc={10}/>
            <BuyCard keyboard={require("../Image/Keyboards/3.Tastatura.png")} price={10_000} cresc={100}/>
            <BuyCard keyboard={require("../Image/Keyboards/4.Tastatura.png")} price={100_000} cresc={1000}/>
            <BuyCard keyboard={require("../Image/Keyboards/TastaturaExtra.png")} price={1_000_000} cresc={10_000}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 5,
        alignItems: "center",

        backgroundColor: "#FAF0CA",
    },

    buyCard: {
        flex: 4,
        width: "100%",

        flexDirection: "row",
        justifyContent: "space-around",

    },
});
