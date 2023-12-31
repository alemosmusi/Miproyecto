import React from 'react';
import {styles} from '../theme/appTheme';
import {Text, TouchableOpacity, View} from 'react-native';


interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
    accion: (numeroTexto: string)=> void
}



const BotonCalc = ({texto, color = "#2d2d2d", ancho = false, accion} : Props) => {
  return (
    <TouchableOpacity
      onPress={ () => accion(texto)}
    >
      <View style={{
        ...styles.boton, 
        backgroundColor: color,
        width: (ancho) ? 180 : 80
        }}>
        <Text style={{
            ...styles.botonTexto,
            color: (color === "#9b9b9b"? 'black' : 'white')
            }}>{texto}</Text>
      </View>

    </TouchableOpacity>
  );
};

export default BotonCalc;
