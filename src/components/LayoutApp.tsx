import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
const LayoutApp = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.banner}
          source={require('./../../assets/img/bg.jpg')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Qué hacer en el Pais</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.city}
              source={require('./../../assets/img/actividad1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./../../assets/img/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./../../assets/img/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./../../assets/img/actividad4.jpg')}
            />
          </View>
        </ScrollView>
        <Text style={styles.title}>Los mejores Sitios</Text>
        <View>
          <Image
            style={styles.mejores}
            source={require('./../../assets/img/mejores1.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./../../assets/img/mejores2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./../../assets/img/mejores3.jpg')}
          />
        </View>
        <Text style={styles.title}>Los mejores Hospedajes</Text>
        <View style={styles.listadoHospedaje}>
          <View style={styles.listadoItemHospedaje}>
            <Image
              style={styles.mejores}
              source={require('./../../assets/img/hospedaje1.jpg')}
            />
          </View>
          <View style={styles.listadoItemHospedaje}>
            <Image
              style={styles.mejores}
              source={require('./../../assets/img/hospedaje2.jpg')}
            />
          </View>
          <View style={styles.listadoItemHospedaje}>
            <Image
              style={styles.mejores}
              source={require('./../../assets/img/hospedaje3.jpg')}
            />
          </View>
          <View style={styles.listadoItemHospedaje}>
            <Image
              style={styles.mejores}
              source={require('./../../assets/img/hospedaje4.jpg')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  container: {
    marginHorizontal: '2.5%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    textTransform: 'capitalize',
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
    borderRadius: 10,
  },
  listadoHospedaje: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  listadoItemHospedaje: {
    flexBasis: '49%',
  },
});
export default LayoutApp;
