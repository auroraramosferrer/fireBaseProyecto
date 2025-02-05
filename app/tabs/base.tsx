import { View, Text } from "react-native";
import GlobalStyles from "../themes/GlobalStyles";
import Color from "../themes/Color";


export default function BaseScreen() {
    return (
        <View style={[GlobalStyles.containerLogin]}>
            <Text style={{color: Color.superWhite, padding: 10, fontSize: 25}}>Datos de la base de datos</Text>                    
        </View>
    );
}