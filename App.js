import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>VóTec - Seu assistente digital</Text>
        
        {/* Chamadas Rápidas */}
        <Card style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="call" size={24} color="white" />
            <Text style={styles.buttonText}>Chamadas Rápidas</Text>
          </TouchableOpacity>
        </Card>
        
        {/* Lembretes de Medicamentos */}
        <Card style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="bell" size={24} color="white" />
            <Text style={styles.buttonText}>Lembretes de Medicamentos</Text>
          </TouchableOpacity>
        </Card>
        
        {/* Chamar Transporte */}
        <Card style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="directions-car" size={24} color="white" />
            <Text style={styles.buttonText}>Chamar Transporte</Text>
          </TouchableOpacity>
        </Card>
        
        {/* Notícias e Entretenimento */}
        <Card style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="newspaper" size={24} color="white" />
            <Text style={styles.buttonText}>Notícias e Entretenimento</Text>
          </TouchableOpacity>
        </Card>
        
        {/* Assistente de Voz */}
        <Card style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mic" size={24} color="white" />
            <Text style={styles.buttonText}>Assistente de Voz</Text>
          </TouchableOpacity>
        </Card>
        
        {/* Grupo da Família */}
        <Card style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="users" size={24} color="white" />
            <Text style={styles.buttonText}>Grupo da Família</Text>
          </TouchableOpacity>
        </Card>
        
        {/* Segurança Digital */}
        <Card style={styles.card}>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="security" size={24} color="white" />
            <Text style={styles.buttonText}>Segurança Digital</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});