import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Gap, HeaderBlue} from '../../components';
import Bandung from '../../assets/img/bandung.png';

const BuyTicket = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderBlue
        title="Buy Your Ticket"
        titleColor="#355c7d"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose Your destination</Text>
      </View>
      {/* <Gap height={10} /> */}
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image style={styles.img} source={Bandung} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Jakarta-Bandung</Text>
                <Text style={styles.content}>22 November 2022</Text>
                <Text style={styles.content}>On Board : 19.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image style={styles.img} source={Bandung} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Jakarta-Bandung</Text>
                <Text style={styles.content}>22 November 2022</Text>
                <Text style={styles.content}>On Board : 19.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image style={styles.img} source={Bandung} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Jakarta-Bandung</Text>
                <Text style={styles.content}>22 November 2022</Text>
                <Text style={styles.content}>On Board : 19.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image style={styles.img} source={Bandung} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Jakarta-Bandung</Text>
                <Text style={styles.content}>22 November 2022</Text>
                <Text style={styles.content}>On Board : 19.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.containerAgent}>
                <Image style={styles.img} source={Bandung} />
              </View>
              <View style={styles.containerContent}>
                <Text style={styles.content}>Jakarta-Bandung</Text>
                <Text style={styles.content}>22 November 2022</Text>
                <Text style={styles.content}>On Board : 19.00</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BuyTicket;

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 30,
    paddingBottom: 10,
    marginTop: -10,
  },
  title: {
    fontSize: 20,
    color: '#355c7d',
    fontWeight: '400',
  },
  container: {
    backgroundColor: '#68A2D2',
    borderWidth: 1,
    flexGrow: 1,
    borderColor: 'white',
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  box: {
    marginHorizontal: 20,
    backgroundColor: '#355c7d',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#68A2D2',
    flexDirection: 'row',
    maxWidth: 343,
    maxHeight: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  containerAgent: {
    backgroundColor: '#68A2d2',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 20,
    marginVertical: 30,
  },
  containerContent: {
    marginVertical: 30,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  content: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  img: {
    maxHeight: 50,
    maxWidth: 50,
  },
});
