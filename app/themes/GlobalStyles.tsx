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
        padding: 15,
        fontSize: 22,
        fontWeight:"bold"
        
    },
    viewBotones:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    botones:{
        backgroundColor: Color.blue,
        margin: 10,
        width: 110,
        height: 45,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        
    },
    textoBotones:{
        color: Color.superWhite,
        alignSelf: "center",
        paddingLeft: 1
        
    }


});

export default GlobalStyles;