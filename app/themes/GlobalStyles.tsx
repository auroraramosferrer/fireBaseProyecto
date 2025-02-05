import { Pressable, StyleSheet, Text, View } from 'react-native';
import Color from './Color';

export const GlobalStyles = StyleSheet.create({
    containerLogin:{
        backgroundColor: Color.lightBlue,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    textInputs:{
        backgroundColor: Color.white,
        width: 300,
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
    },
    textosNormales:{
        padding: 10,
        fontSize: 20,
    },
    viewBotones:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    botones:{
        backgroundColor: Color.black,
        margin: 10,
        width: 100,
        height: 40,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        
    },
    textoBotones:{
        color: Color.lightBlue,
        alignSelf: "center",
        paddingLeft: 1
        
    }


});

export default GlobalStyles;