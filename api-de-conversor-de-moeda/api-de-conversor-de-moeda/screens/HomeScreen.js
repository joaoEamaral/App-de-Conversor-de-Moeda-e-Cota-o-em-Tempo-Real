import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, Animated, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [valueBRL, setValueBRL] = useState('');
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);
  const [convertedUSD, setConvertedUSD] = useState('');
  const [convertedEUR, setConvertedEUR] = useState('');
  const [scaleAnim] = useState(new Animated.Value(1)); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Erro ao recuperar o nome do usuário:', error);
      }
    };

    fetchUser();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL');
      const data = await response.json();

      setUsdRate(parseFloat(data.USDBRL.ask));
      setEurRate(parseFloat(data.EURBRL.ask));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter as cotações.');
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const handleValueChange = (value) => {
    setValueBRL(value);

    if (value && usdRate && eurRate) {
      const brlValue = parseFloat(value);
      if (!isNaN(brlValue)) {
        setConvertedUSD((brlValue / usdRate).toFixed(2));
        setConvertedEUR((brlValue / eurRate).toFixed(2));
      } else {
        setConvertedUSD('');
        setConvertedEUR('');
      }
    } else {
      setConvertedUSD('');
      setConvertedEUR('');
    }
  };

  const animateButton = () => {
    Animated.sequence([ 
      Animated.spring(scaleAnim, { 
        toValue: 1.1,  
        useNativeDriver: true, 
      }),
      Animated.spring(scaleAnim, { 
        toValue: 1, 
        useNativeDriver: true, 
      }),
    ]).start();
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/originals/fe/de/c4/fedec45f1cb1b94a553098b9302e4dd5.jpg' }} 
      style={styles.container}
    >
      {}
      <Text style={styles.welcomeText}>Bem-vindo, {username}!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite um valor em BRL"
        keyboardType="numeric"
        value={valueBRL}
        onChangeText={handleValueChange}
      />

      {}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>BRL</Text>
          <Text style={styles.tableHeader}>USD</Text>
          <Text style={styles.tableHeader}>EUR</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{valueBRL ? `R$ ${valueBRL}` : '-'}</Text>
          <Text style={styles.tableCell}>{convertedUSD ? `$ ${convertedUSD}` : '-'}</Text>
          <Text style={styles.tableCell}>{convertedEUR ? `€ ${convertedEUR}` : '-'}</Text>
        </View>
      </View>

      {}
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            animateButton(); 
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5, 
    textAlign: 'center',
    marginTop: -30, 
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    fontSize: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    width: '33%',
    textAlign: 'center',
  },
  tableCell: {
    fontSize: 16,
    color: '#333',
    width: '33%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
