import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../../components';
import checkOutSuccess from '../../assets/img/checkout-success.png';

const CheckOutSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.successTxt}>Success</Text>
      <View style={styles.bannerContainer}>
        <Image style={styles.img} source={checkOutSuccess} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textContent}>Thank You for your purchase</Text>
        <View style={styles.btnContainer}>
          <Button
            text="My Ticket"
            color="#68FF33"
            textColor="#355C7D"
            style={styles.btn}
            onPress={() => navigation.navigate('MyTicket')}
          />
        </View>
      </View>
    </View>
  );
};

export default CheckOutSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    paddingTop: 30,
  },
  img: {
    maxWidth: 300,
    maxHeight: 300,
  },
  successTxt: {
    fontSize: 24,
    color: '#355C7D',
    fontWeight: 'bold',
    paddingTop: 35,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#355C7D',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContent: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  btnContainer: {
    width: 300,
    paddingTop: 50,
    paddingHorizontal: 80,
  },
});
