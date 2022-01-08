import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {HeaderWhite, Gap, TextInput, Button} from '../../components';


const SignUp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HeaderWhite title="Sign Up" titleColor="#FFFFFF" onBack={() => {}} />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Travelku</Text>
          </View>
          <View style={styles.content}>
            <TextInput label="Full Name" placeholder="ex.john de pendeho" />
            <Gap height={16} />
            <TextInput label="Email" placeholder="ex.john@gmail.com" />
            <Gap height={16} />
            <TextInput  label="password" placeholder="type your password here" secureTextEntry/>
            <Gap height={26} />
            <View>
              <Text style={styles.text}>
                Hey you almost done !, Just click sign up and the journey will
                begin{' '}
              </Text>
            </View>
            <Gap height={15} />
            <View style={styles.button}>
              <Button
                color="#68FF33"
                text="Sign Up"
                textColor="#355C7D"
                onPress={() => navigation.navigate('SuccessSignUp')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#355C7D',
    flex: 1,
  },
  content: {
    backgroundColor: '#355C7D',
  },
  container: {
    backgroundColor: '#355C7D',
    paddingHorizontal: 24,
    paddingBottom: 150,
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
  title: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
