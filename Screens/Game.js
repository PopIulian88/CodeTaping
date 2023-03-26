import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import { ProgressBar} from 'react-native-paper';


export default function Game() {

    const [scorePoints, setScorePoints] = useState(0);
    const [program, setProgram] = useState("Python");
    const [limb, setLimb] = useState(require("../Image/Languages/python.png"));
    const [linkTastatura, setLinkTastatura] = useState(require("../Image/Keyboards/1.Tastatura.png"));
    const [tastatura, setTastatura] = useState(1);

    const [levelUp, setLevelup] = useState(10);

    global.TOTAL_SCORE = scorePoints;


    if(scorePoints > 10 && scorePoints <= 200 && program !== "Javascript"){
        setProgram("Javascript");
        setLimb(require("../Image/Languages/javascript.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(200);
    }else if(scorePoints > 200 && scorePoints <= 1000 && program !== "Ruby"){
        setProgram("Ruby");
        setLimb(require("../Image/Languages/ruby.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(1000);
    }else if(scorePoints > 1000 && scorePoints <= 100_000 && program !== "Java"){
        setProgram("Java");
        setLimb(require("../Image/Languages/java.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(100_000)
    }else if(scorePoints > 100_000 && scorePoints <= 1_000_000 && program !== "PHP"){
        setProgram("PHP");
        setLimb(require("../Image/Languages/php.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(1_000_000);
    }else if(scorePoints > 1_000_000 && scorePoints <= 10_000_000 && program !== "C++"){
        setProgram("C++");
        setLimb(require("../Image/Languages/cpp.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(10_000_000)
    }else if(scorePoints > 10_000_000 && scorePoints <= 100_000_000 && program !== "GO"){
        setProgram("GO");
        setLimb(require("../Image/Languages/go.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(100_000_000)
    }else if(scorePoints > 100_000_000 && scorePoints <= 1_000_000_000 && program !== "Rust"){
        setProgram("Rust");
        setLimb(require("../Image/Languages/rust.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(1_000_000_000)
    }else if(scorePoints > 1_000_000_000 && program !== "Swift"){
        setProgram("Swift");
        setLimb(require("../Image/Languages/swift.png"));
        setScorePoints(scorePoints + 1);
        setLevelup(10_000_000);
    }

    try {
        if (MULTIPLY === 1 && tastatura !== 1) {
            setLinkTastatura(require("../Image/Keyboards/1.Tastatura.png"))
            setTastatura(1);
        }
        if (MULTIPLY === 10 && tastatura !== 2) {
            setLinkTastatura(require("../Image/Keyboards/2.Tastatura.png"))
            setTastatura(2);
        }
        if (MULTIPLY === 100 && tastatura !== 3) {
            setLinkTastatura(require("../Image/Keyboards/3.Tastatura.png"))
            setTastatura(3);
        }
        if (MULTIPLY === 1000 && tastatura !== 4) {
            setLinkTastatura(require("../Image/Keyboards/4.Tastatura.png"))
            setTastatura(4);
        }
        if (MULTIPLY === 10_000 && tastatura !== 5) {
            setLinkTastatura(require("../Image/Keyboards/TastaturaExtra.png"))
            setTastatura(5);
        }
    }catch{
        ///
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
                <TouchableOpacity style={styles.keyboardStyle} onPress={() =>  {
                    try{
                        setScorePoints(scorePoints + MULTIPLY)
                    }catch{
                        setScorePoints(scorePoints + 1)
                    }
                }}>

                    <Image style={{width: "80%", height: "90%"}}
                           source={linkTastatura}/>
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
        flex: 4,
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
        resizeMode: "contain",
    }
});