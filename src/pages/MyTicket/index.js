import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {HeaderBlue} from '../../components';
import Cs from '../../assets/img/cs.png';

const MyTicket = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderBlue
        title="My Ticket"
        titleColor="#355c7d"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.boxDashed}>
        <Text style={styles.title}>Your Ticket</Text>
        <Text style={styles.label}>Departure:</Text>
        <Text style={styles.content}>Surabaya</Text>
        <Text style={styles.label}>Destination:</Text>
        <Text style={styles.content}>Surabaya</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.content}>27 Januari 2022</Text>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.content}>19.30</Text>
        <Text style={styles.label}>Agent:</Text>
        <Text style={styles.content}>Baraya</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={Cs} />
          <View style={styles.imgText}>
            <Text style={styles.cs}>Please on Time</Text>
            <Text style={styles.cs}>Have a great day</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyTicket;

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
    marginTop: 10,
    flexDirection: 'row',
  },
  img: {
    maxWidth: 100,
    maxHeight: 130,
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
    fontSize:16,
  },
});
