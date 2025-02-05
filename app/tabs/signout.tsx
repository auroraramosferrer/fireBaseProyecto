import { View, Text, Pressable } from "react-native";
import GlobalStyles from "../themes/GlobalStyles";
import Color from "../themes/Color";
import { router } from "expo-router";


export default function HomeScreen() {
    return (
        <View style={[GlobalStyles.containerLogin, {backgroundColor: Color.grey}]}>
            <Text style={{color: Color.superWhite, padding: 10, fontSize: 25}}>Desconectar</Text>
            <Pressable style={[GlobalStyles.botones, {backgroundColor: Color.superWhite}]} onPress={() => router.push('/')}><Text style={[GlobalStyles.textoBotones, {color: Color.blue}]}>Desconetarse</Text></Pressable>
            
        </View>
    );
    
}