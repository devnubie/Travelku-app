import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HistoryTicket from '../../assets/img/ticket-history.png';
import {Gap, HeaderBlue} from '../../components';

const History = ({navigation}) => {
  return (
    <View>
      <HeaderBlue
        title="History Purchase"
        titleColor="#355c7d"
        onBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Journey history</Text>
        </View>
        <Gap height={10} />
        {/* item pertama */}
        <View style={styles.box}>
          <View style={styles.containerImg}>
            <Image source={HistoryTicket} />
          </View>
          <View>
            <Text style={styles.content}>Baraya</Text>
            <Text style={styles.content}>Bandung - malang</Text>
            <Text style={styles.content}>24 Januari 2020</Text>
          </View>
        </View>
        <Gap height={20} />
        {/* item pertama */}
        <View style={styles.box}>
          <View style={styles.containerImg}>
            <Image source={HistoryTicket} />
          </View>
          <View>
            <Text style={styles.content}>Damri</Text>
            <Text style={styles.content}>malang - bandung</Text>
            <Text style={styles.content}>24 maret 2020</Text>
          </View>
        </View>
        <Gap height={20} />
        {/* item pertama */}
        <View style={styles.box}>
          <View style={styles.containerImg}>
            <Image source={HistoryTicket} />
          </View>
          <View>
            <Text style={styles.content}>Baraya</Text>
            <Text style={styles.content}>Bandung - Jakarta</Text>
            <Text style={styles.content}>1 Januari 2021</Text>
          </View>
        </View>
        <Gap height={20} />
        {/* item pertama */}
        <View style={styles.box}>
          <View style={styles.containerImg}>
            <Image source={HistoryTicket} />
          </View>
          <View>
            <Text style={styles.content}>Travelpedia</Text>
            <Text style={styles.content}>Jakarta - Bandung</Text>
            <Text style={styles.content}>24 Januari 2021</Text>
          </View>
        </View>
        <Gap height={20} />
        {/* item pertama */}
        <View style={styles.box}>
          <View style={styles.containerImg}>
            <Image source={HistoryTicket} />
          </View>
          <View>
            <Text style={styles.content}>Travelpedia</Text>
            <Text style={styles.content}>Jakarta - Bandung</Text>
            <Text style={styles.content}>24 Januari 2021</Text>
          </View>
        </View>
        <Gap height={20} />
        {/* item pertama */}
        <View style={styles.box}>
          <View style={styles.containerImg}>
            <Image source={HistoryTicket} />
          </View>
          <View>
            <Text style={styles.content}>Travelpedia</Text>
            <Text style={styles.content}>Jakarta - Bandung</Text>
            <Text style={styles.content}>24 Januari 2021</Text>
          </View>
        </View>
        <Gap height={20} />
        {/* item pertama */}
        <View style={styles.box}>
          <View style={styles.containerImg}>
            <Image source={HistoryTicket} />
          </View>
          <View>
            <Text style={styles.content}>Travelpedia</Text>
            <Text style={styles.content}>Jakarta - Bandung</Text>
            <Text style={styles.content}>24 Januari 2021</Text>
          </View>
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#355c7d',
  },
  box: {
    backgroundColor: '#355c7d',
    marginHorizontal: 40,
    flexDirection: 'row',
    borderRadius: 10,
  },
  containerImg: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  content: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 5,
  },
});
