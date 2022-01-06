import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import successImg from '../../assets/img/success-ilu.png';
import {Button} from '../../components';

const SuccessSignUp = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.successTxt}>Success</Text>
        <Image style={styles.img} source={successImg} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contenTxt}>Yeay you're all set</Text>
        <Text style={styles.contenTxt}>Now you can start the journey</Text>
        <Button text="continue" color="#68FF33" textColor="#355C7D" />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
  successTxt: {
    fontSize: 24,
    color: '355C7D',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#355C7D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  contenTxt: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
