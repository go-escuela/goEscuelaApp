import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoMedianoIzquierda}>Hola, Laura</Text>
      <Text style={styles.textoMedianoCentro}>¿Qué materia buscas?</Text>
      <View style={styles.botonesContainer}>
        <TouchableOpacity style={styles.boton}>
          <Image
            source={require('./ruta/a/imagen1.jpg')} // Reemplaza con la ruta de tu primera imagen
            style={styles.imagenBoton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Image
            source={require('./ruta/a/imagen2.jpg')} // Reemplaza con la ruta de tu segunda imagen
            style={styles.imagenBoton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Image
            source={require('./ruta/a/imagen3.jpg')} // Reemplaza con la ruta de tu tercera imagen
            style={styles.imagenBoton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Image
            source={require('./ruta/a/imagen4.jpg')} // Reemplaza con la ruta de tu cuarta imagen
            style={styles.imagenBoton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoMedianoIzquierda: {
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: 20,
  },
  textoMedianoCentro: {
    fontSize: 18,
    marginBottom: 20,
  },
  botonesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  boton: {
    margin: 10,
  },
  imagenBoton: {
    width: 100,
    height: 100,
  },
});

export default App;
