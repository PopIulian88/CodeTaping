import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import { ProgressBar} from 'react-native-paper';


export default function Game() {

    const [scorePoints, setScorePoints] = useState(0);

    return (

        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.scoreBox}>
                <Text style={styles.text}> Score: {scorePoints}</Text>
                <Text style={styles.text}> You are coding in: C++ {"\n"}</Text>

                <ProgressBar progress={scorePoints / 100} color={"green"}/>
            </View>

            <View style={styles.cookieBox}>
                <Image style={styles.languageStyle} source={require("../Image/Languages/LogoCpp.png")}/>
            </View>

            <View style={styles.keyboardBox}>
                <TouchableOpacity style={styles.keyboardStyle} onPress={() => setScorePoints(scorePoints + 1)}>
                    <Image style={{width: "80%", height: "90%"}}
                           source={require("../Image/Keyboards/1.Tastatura.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignContent: "center",
        justifyContent: "center",
    },

    scoreBox: {
        flex: 1,
        padding: 5,
        alignContent: "center",
    },

    cookieBox: {
        flex: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    keyboardBox: {
        flex: 3,
        padding: 5,
        alignContent: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 16,
        fontWeight: "bold",
    },

    languageStyle: {
        height: '65%',
        width: '65%',
    },

    keyboardStyle: {
        alignItems: "center",
        justifyContent: "center",
    }
});
