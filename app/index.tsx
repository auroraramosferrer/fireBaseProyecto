import { Image, StyleSheet, Platform, Text, View, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';
import GlobalStyles from './themes/GlobalStyles';
import { router } from 'expo-router';
import { getBackgroundColorAsync } from 'expo-system-ui';


export default function HomeScreen() {
  return (
    <View style={GlobalStyles.containerLogin}>
      <Text style={{padding: 25, fontSize: 30, fontWeight:"bold"}}>INICIO DE SESIÓN</Text>
      <Text style={GlobalStyles.textosNormales}>Usuario</Text>

    <TextInput style={GlobalStyles.textInputs} placeholder='Introduce tu Usuario'></TextInput>
    <Text style={GlobalStyles.textosNormales}>Contraseña</Text>
    <TextInput style={GlobalStyles.textInputs} placeholder='Introduce tu Contraseña'></TextInput>
    
    <View style={GlobalStyles.viewBotones}>
      <Pressable style={GlobalStyles.botones} onPress={() => router.push('/tabs/signout')}><Text style={GlobalStyles.textoBotones}>Iniciar Sesion</Text></Pressable>
      <Pressable style={GlobalStyles.botones} onPress={() => router.push('/tabs/base')}><Text style={GlobalStyles.textoBotones}>Registrarse</Text></Pressable>
    </View>

    </View>
  );
}

