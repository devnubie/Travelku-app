import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import successImg from '../../assets/img/success-ilu.png';
import {Button} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.bannerContainer}>
        <Text style={styles.successTxt}>Success</Text>
        <Image style={styles.img} source={successImg} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textContent}>Yeay you're all set</Text>
        <Text style={styles.textContent}>Now you can start the journey</Text>
        <View style={styles.btnContainer}>
          <Button
            text="continue"
            color="#68FF33"
            textColor="#355C7D"
            onPress={() => navigation.navigate('Home')}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
  successTxt: {
    fontSize: 24,
    color: '#355C7D',
    fontWeight: 'bold',
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
