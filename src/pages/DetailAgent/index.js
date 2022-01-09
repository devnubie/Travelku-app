import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Cover from '../../assets/img/barayaDetail.png';
import {Button, HeaderBlue} from '../../components';
import Calendar from '../../assets/img/calendar-blue.png';

const DetailAgent = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Cover} style={styles.cover}>
        <View style={styles.nav}>
          <HeaderBlue onBack={() => navigation.goBack()} />
        </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.title}>Baraya Travel</Text>
          <Text style={styles.content}>
            Baraya menyediakan jasa khusus pengiriman barang Bandung - Jakarta
            maupun sebaliknya. Nikmati berbagai layanan yang kami sediakan mulai
            dari pengiriman dokumen, elektronik, perlengkapan dan kebutuhan
            sehari-hari, hingga pengiriman kendaraan.
          </Text>
          <Text style={styles.title}>Our Service :</Text>
          <Text style={styles.content}>
            Penyewaan unit transportasi, Angkutan karyawan, Paket tour, Private
            trip.
          </Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.oh}>Office Hour:</Text>
            <Text style={styles.coh}>24 Hours</Text>
          </View>
          <View style={styles.btnContainer}>
            <Image source={Calendar} />
            <Button
              text="BOOK NOW"
              textColor="#355c7d"
              color="#68FF33"
              onPress={() => navigation.navigate('BuyTicket')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailAgent;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {height: 330},
  nav: {
    marginLeft: -10,
    marginTop: -20,
  },
  detailContainer: {
    backgroundColor: '#355c7d',
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  btnContainer: {
    backgroundColor: '#68ff33',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 5,
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    paddingBottom: 10,
  },
  content: {
    fontSize: 14,
    color: '#FFFFFF',
    paddingBottom: 5,
  },
  oh: {
    color: '#68ff33',
    fontSize: 20,
  },
  coh: {
    color: '#68ff33',
    fontSize: 16,
  },
  footer: {
    marginTop: 10,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
