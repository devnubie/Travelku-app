import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/img/Logo-biru.png';
import Profile from '../../assets/img/profile.png';
import Banner from '../../assets/img/welcome-banner.png';
import Bus from '../../assets/img/bus.png';
import Ticket from '../../assets/img/ticket.png';
import Calendar from '../../assets/img/calendar.png';
import Search from '../../assets/img/search.png';


const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 25,
          // backgroundColor: 'brown',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={Logo} style={{width: 40, height: 40}} />
        <Text
          style={{
            color: '#355C7D',
            fontSize: 24,
            fontWeight: '400',
            paddingLeft: 10,
          }}>
          Travelku
        </Text>
        <View
          style={{
            marginHorizontal:160,
            // backgroundColor: 'green',
          }}>
          <Image source={Profile} style={{borderRadius: 10}} />
        </View>
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: '#355C7D',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginHorizontal: 20,
        }}></View>
      {/* main content */}
      {/* container white */}
      <View
        style={{
          flex: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          marginHorizontal: 20,
          paddingHorizontal: 30,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        {/* agent */}
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#355c7D',
                width: 35,
                height: 35,
                borderRadius: 10,
              }}>
              <Image source={Bus} />
            </View>
            <Text>agent</Text>
          </View>
        </TouchableOpacity>

        {/* my ticket */}
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#355c7D',
                width: 35,
                height: 35,
                borderRadius: 10,
              }}>
              <Image source={Ticket} />
            </View>
            <Text>My ticket</Text>
          </View>
        </TouchableOpacity>

        {/* Schedule */}
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#355c7D',
                width: 35,
                height: 35,
                borderRadius: 10,
              }}>
              <Image source={Calendar} />
            </View>
            <Text>schedule</Text>
          </View>
        </TouchableOpacity>
        {/* Search */}
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#355c7D',
                width: 35,
                height: 35,
                borderRadius: 10,
              }}>
              <Image source={Search}/>
            </View>
            <Text>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* main content */}
      <View style={{alignItems:'center'}}>
        <Image source={Banner} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
