import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, HeaderBlue} from '../../components';

const CheckOut = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderBlue
        title="Check Out"
        titleColor="#355c7d"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.boxDashed}>
        <Text style={styles.title}>Your Purchase</Text>
        <Text style={styles.label}>Departure:</Text>
        <Text style={styles.content}>Jakarta</Text>
        <Text style={styles.label}>Destination:</Text>
        <Text style={styles.content}>Bandung</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.content}>22 November 2022</Text>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.content}>19.00</Text>
        <Text style={styles.label}>Agent:</Text>
        <Text style={styles.content}>Baraya</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          text="checkout"
          textColor="#355C7D"
          color="#68FF33"
          onPress={() => navigation.navigate('CheckOutSuccess')}
        />
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  boxDashed: {
    borderWidth: 1,
    borderColor: '#355c7d',
    borderRadius: 10,
    borderStyle: 'dashed',
    marginHorizontal: 20,
    padding: 10,
    flexGrow: 1,
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#355c7d',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    color: '#355c7d',
  },
  content: {
    fontSize: 16,
    color: '#68FF33',
    backgroundColor: '#355c7d',
    borderRadius: 10,
    padding: 10,
  },
  imgContainer: {
    marginTop: 30,
    marginLeft: -40,
    flexDirection: 'row',
  },
  img: {
    maxWidth: 150,
    maxHeight: 150,
  },
  imgText: {
    backgroundColor: '#355c7d',
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  cs: {
    color: '#ffffff',
    fontSize: 16,
  },
  btnContainer: {
    justifyContent: 'center',
    marginHorizontal: 100,
    marginBottom: 30,
  },
});
