import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import BotonCalc from '../components/BotonCalc'
import useCalculadora from '../hooks/useCalculadora'


const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora()




  return (
    <View style={styles.calculadoraContainer}>
        {
            (numeroAnterior !== '0' ) &&
            <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
        }
        <Text 
            style={styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            {numero}
        </Text>



        <View style={styles.fila}>
            <BotonCalc texto="C" color="#9b9b9b" accion={limpiar}/>
            <BotonCalc texto="+/-"color="#9b9b9b" accion={positivoNegativo}/>
            <BotonCalc texto="del" color="#9b9b9b" accion={btnDelete}/>
            <BotonCalc texto="/" color="#FF9427" accion={btnDividir}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="7" accion={armarNumero}/>
            <BotonCalc texto="8" accion={armarNumero}/>
            <BotonCalc texto="9" accion={armarNumero}/>
            <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="4" accion={armarNumero}/>
            <BotonCalc texto="5" accion={armarNumero}/>
            <BotonCalc texto="6" accion={armarNumero}/>
            <BotonCalc texto="-" color="#FF9427" accion={btnRestar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="1" accion={armarNumero}/>
            <BotonCalc texto="2" accion={armarNumero}/>
            <BotonCalc texto="3" accion={armarNumero}/>
            <BotonCalc texto="+" color="#FF9427" accion={btnSumar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="0" accion={armarNumero} ancho/>
            <BotonCalc texto="." accion={armarNumero}/>
            <BotonCalc texto="=" color="#FF9427" accion={calcular}/>
        </View>
    </View>
  )
}

export default CalculadoraScreen
