import { View, Text, Pressable } from "react-native";
import GlobalStyles from "../themes/GlobalStyles";
import Color from "../themes/Color";
import { router } from "expo-router";


export default function HomeScreen() {
    return (
        <View style={[GlobalStyles.containerLogin, {backgroundColor: Color.grey}]}>
            <Text style={{color: Color.superWhite, padding: 20, fontSize: 30}}>Desconectar</Text>
            <Pressable style={[GlobalStyles.botones, {backgroundColor: Color.superWhite}]} onPress={() => router.push('/')}><Text style={[GlobalStyles.textoBotones, {color: Color.blue}]}>Desconectarse</Text></Pressable>
            
        </View>
    );
    
}