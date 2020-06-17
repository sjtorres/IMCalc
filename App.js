import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from  'react-native'

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  function handleSubmit() {
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if(imc < 18.6) {
      alert('Você está abaixo do peso! ' + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! ' + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso! ' + imc.toFixed(2))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Calcule seu IMC </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu Peso (kg)"
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua Altura (cm)"
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={styles.btn}
        onPress={handleSubmit}
      >

        <Text style={styles.btnText}> Calcular IMC </Text>
      </TouchableOpacity>

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: 25,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#121212',
    margin: 15,
    borderRadius: 10,
    padding: 10,
    color: '#FFF',
    fontSize: 20
  },
  btn: {
    backgroundColor: '#41AEF4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 10
  },
  btnText: {
    color: '#FFF',
    fontSize: 25
  }
})