import {View, Text, StatusBar, StyleSheet, Image, TouchableOpacity} from "react-native";

function BuyCard({keyboard, price}){
    return (
        <View style={styles.buyCard}>
            <View style={{flex:3}}>
                <Image style={{height: 150, width: 200, resizeMode: "contain"}} source={keyboard}/>
            </View>


            <TouchableOpacity style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                <View style={{height: 100, width: "100%", backgroundColor: "white", borderRadius: 50, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontWeight: 'bold'}}>Price: {price}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default function Shop({route}) {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Text style={{color: "#0D3B66", fontWeight: 'bold'}}> Every keyboard you buy will increase your coding speed by x10</Text>
            <Text>Score = {route.params.score}</Text>

            <BuyCard keyboard={require("../Image/Keyboards/2.Tastatura.png")} price={10}/>
            <BuyCard keyboard={require("../Image/Keyboards/3.Tastatura.png")} price={50}/>
            <BuyCard keyboard={require("../Image/Keyboards/4.Tastatura.png")} price={100}/>
            <BuyCard keyboard={require("../Image/Keyboards/TastaturaExtra.png")} price={1000}/>
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
