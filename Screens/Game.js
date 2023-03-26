import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import { ProgressBar} from 'react-native-paper';


export default function Game() {

    const [scorePoints, setScorePoints] = useState(0);
    const [program, setProgram] = useState("Python");
    const [limb, setLimb] = useState(require("../Image/Languages/python.png"));

    const [levelUp, setLevelup] = useState(10);

    if(scorePoints === 10){
        setProgram("Javascript");
        setLimb(require("../Image/Languages/javascript.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(20);
    }else if(scorePoints === 20){
        setProgram("Ruby");
        setLimb(require("../Image/Languages/ruby.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(100)
    }else if(scorePoints === 100){
        setProgram("Java");
        setLimb(require("../Image/Languages/java.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(1000)
    }else if(scorePoints === 1000){
        setProgram("PHP");
        setLimb(require("../Image/Languages/php.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(10_000)
    }else if(scorePoints === 10_000){
        setProgram("C++");
        setLimb(require("../Image/Languages/cpp.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(100_000)
    }else if(scorePoints === 100_000){
        setProgram("GO");
        setLimb(require("../Image/Languages/go.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(500_000)
    }else if(scorePoints === 500_000){
        setProgram("Rust");
        setLimb(require("../Image/Languages/rust.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(1_000_000)
    }else if(scorePoints === 1_000_000){
        setProgram("Swift");
        setLimb(require("../Image/Languages/swift.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(10_000_000)
    }

    return (

        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.scoreBox}>
                <Text style={styles.text}> Score: {scorePoints}</Text>
                <Text style={styles.text}> You are coding in: {program} {"\n\n"}</Text>

                <ProgressBar progress={scorePoints / levelUp} color={"green"} style={{height: 15, borderRadius: 50}}/>
            </View>

            <View style={styles.cookieBox}>
                <Image style={styles.languageStyle} source={limb}/>
            </View>

            <View style={styles.keyboardBox}>
                <TouchableOpacity style={styles.keyboardStyle} onPress={() =>  {setScorePoints(scorePoints + 1)}}>
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

        backgroundColor: "#FAF0CA",
    },

    scoreBox: {
        flex: 1,
        padding: 5,
        alignContent: "center",

        borderRadius: 20,
        backgroundColor: '#EE964B',
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
        resizeMode: "contain",
    },

    keyboardStyle: {
        alignItems: "center",
        justifyContent: "center",
    }
});
