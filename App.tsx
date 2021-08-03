import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LayoutApp from './src/components/LayoutApp';

const App = () => {
  return (
    // <View style={styles.contenedor}>
    //   <View style={styles.caja1}></View>
    //   <View style={styles.caja2}></View>
    //   <View style={styles.caja3}></View>
    //   <View style={styles.caja4}></View>
    // </View>
    <>
      <LayoutApp />
      {/* <Image source={require("./assets/img/actividad1.jpg")}/> */}
    </>
  );
};

const styles = StyleSheet.create({
  // por defecto esta en flex colum
  contenedor: {
    backgroundColor: 'cornflowerblue',
    // alarga todo el ancho
    // flex: 1,
    height: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  caja1: {
    padding: 20,
    backgroundColor: 'navy',
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  caja3: {
    padding: 20,
    flex: 1,
    backgroundColor: 'green',
  },
  caja4: {
    padding: 20,
    flex: 1,
    backgroundColor: 'teal',
  },
});

export default App;
