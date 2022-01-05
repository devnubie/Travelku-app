import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {HeaderWhite, Gap, TextInput, Button} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderWhite title="Sign Up" titleColor="#FFFFFF" onBack={() => {}} />
      <View style={styles.container}>
        <TextInput label="Name" placeholder="type your name here" />
        <Gap height={16} />
        <TextInput label="Email" placeholder="type your email here" />
        <Gap height={16} />
        <TextInput label="password" placeholder="type your password here" />
        <Gap height={26} />
        <View>
          <Text style={styles.text}>
            Hey you almost done !, Just click sign Up and the journey will begin{' '}
          </Text>
        </View>
        <Gap height={15} />
        <View style={styles.button}>
          <Button color="#68FF33" text="Sign Up" textColor="#355C7D" />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#355C7D',
    flex: 1,
  },
  container: {
    backgroundColor: '#355c7D',
    paddingHorizontal: 24,
    paddingVertical: 26,
    flex: 1,
  },
  button: {
    width: 148,
    marginLeft: 411 - 217,
  },

  text: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
